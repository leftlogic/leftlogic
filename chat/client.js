var CONFIG = { debug: false,
               room: '',
               nick: "#",   // set in onConnect
               id: null,    // set in onConnect
               last_message_time: 1,
               focus: true, //event listeners bound in onConnect
               unread: 0, //updated in the message-processing loop
             };

var nicks = [];
var userCancel = null;

function getQuery(s) {
  var query = {};
  
  s.replace(/\b([^&=]*)=([^&=]*)\b/g, function (m, a, d) {
    if (typeof query[a] != 'undefined') {
      query[a] += ',' + d;
    } else {
      query[a] = d;
    }
  });
    
  return query;
}
//updates the users link to reflect the number of active users
function updateUsersLink(n) {
  var t = n + " user";
  if (n != 1) t += "s";
  $("#usersLink").text(t);
}

//handles another person joining chat
function userJoin(event) {
  //put it in the stream
  var nick = event.user;
  var _class = 'join';
  if (event.isme) _class += ' me';
  addMessage(nick, "joined", +new Date, _class);
  //if we already know about this user, ignore it
  for (var i = 0; i < nicks.length; i++)
    if (nicks[i] == nick) return;
  //otherwise, add the user to the list
  nicks.push(nick);
  //update the UI
  updateUsersLink(event.total);
}

//handles someone leaving
function userPart(event) {
  //put it in the stream
  var nick = event.user;
  var _class = 'part';
  if (event.isme) _class += ' me';
  addMessage(nick, "left", +new Date, "part");
  //remove the user from the list
  for (var i = 0; i < nicks.length; i++) {
    if (nicks[i] == nick) {
      nicks.splice(i,1)
      break;
    }
  }
  //update the UI
  updateUsersLink(event.total);
}

// utility functions

util = {
  urlRE: /https?:\/\/([-\w\.]+)+(:\d+)?(\/([^\s]*(\?\S+)?)?)?/g, 

  nlRE: /\n/,

  //  html sanitizer 
  toStaticHTML: function(inputHtml) {
    inputHtml = inputHtml.toString();
    return inputHtml.replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;");
  }, 

  //pads n with zeros on the left,
  //digits is minimum length of output
  //zeroPad(3, 5); returns "005"
  //zeroPad(2, 500); returns "500"
  zeroPad: function (digits, n) {
    n = n.toString();
    while (n.length < digits) 
      n = '0' + n;
    return n;
  },

  //it is almost 8 o'clock PM here
  //timeString(new Date); returns "19:49"
  timeString: function (date) {
    var minutes = date.getMinutes().toString();
    var hours = date.getHours().toString();
    return this.zeroPad(2, hours) + ":" + this.zeroPad(2, minutes);
  },

  //does the argument only contain whitespace?
  isBlank: function(text) {
    var blank = /^\s*$/;
    return (text.match(blank) !== null);
  }
};

//used to keep the most recent messages visible
function scrollDown () {
  window.scrollBy(0, 100000000000000000);
  $("#entry").focus();
}

//inserts an event into the stream for display
//the event may be a msg, join or part type
//from is the user, text is the body and time is the timestamp, defaulting to now
//_class is a css class to apply to the message, usefull for system events
function addMessage (from, text, time, _class) {
  if (text === null)
    return;

  if (time == null) {
    // if the time is null or undefined, use the current time.
    time = new Date();
  } else if ((time instanceof Date) === false) {
    // if it's a timestamp, interpret it
    time = new Date(time);
  }

  //every message you see is actually a table with 3 cols:
  //  the time,
  //  the person who caused the event,
  //  and the content
  // sanitize
  text = util.toStaticHTML(text);

  // replace URLs with links
  text = text.replace(util.urlRE, '<a target="_blank" href="$&">$&</a>');

  if (util.nlRE.test(text)) text = '<pre>' + text + '</pre>';

  var messageElement = $('<tr>'
              + '  <td class="date">' + util.timeString(time) + '</td>'
              + '  <td class="nick">' + util.toStaticHTML(from) + '</td>'
              + '  <td class="msg-text">' + text  + '</td>'
              + '</tr>');

  // If the current user said this, add a special css class
  var nick_re = new RegExp(CONFIG.nick);
  if (nick_re.exec(text))
    messageElement.addClass("personal");

  messageElement.addClass("message");
  if (_class)
    messageElement.addClass(_class);

  //the log is the stream that we view
  $("#log").append(messageElement);

  //always view the most recent message when it is added
  scrollDown();
}

//submit a new message to the server
function send(msg) {
  if (CONFIG.debug === false) {
    forbind.send({ text: msg });
    addMessage(CONFIG.nick, msg, +new Date, 'me'); 
  }
}

//Transition the page to the state that prompts the user for a nickname
function showConnect () {
  $("#connect").show();
  $("#loading").hide();
  $("#toolbar").hide();
  $("#nickInput").focus();
}

//transition the page to the loading screen
function showLoad () {
  $("#connect").hide();
  $("#loading").show();
  $("#toolbar").hide();
}

//transition the page to the main chat view, putting the cursor in the textfield
function showChat (nick) {
  $("#toolbar").show();
  $("#entry").focus();

  $("#connect").hide();
  $("#loading").hide();

  scrollDown();
}

//we want to show a count of unread messages when the window does not have focus
function updateTitle(){
  if (CONFIG.unread) {
    document.title = "(" + CONFIG.unread.toString() + ") chat";
  } else {
    document.title = "chat";
  }
}

//handle the server's response to our nickname and join request
function ready(event) {
  //update the UI to show the chat
  showChat(CONFIG.nick);

  //listen for browser events so we know to update the document title
  $(window).bind("blur", function() {
    CONFIG.focus = false;
    updateTitle();
  });

  $(window).bind("focus", function() {
    CONFIG.focus = true;
    CONFIG.unread = 0;
    updateTitle();
  });
  
  $('#entry').focus();
}

//add a list of present chat members to the stream
function outputUsers () {
  var nick_string = nicks.length > 0 ? nicks.join(", ") : "(none)";
  addMessage("users:", nick_string, new Date(), "notice");
  return false;
}

function part() {
  forbind.leave();
  showConnect();
}

$(document).ready(function() {

  //submit new messages when the user hits enter if the message isnt blank
  $("#entry").keypress(function (e) {
    if (e.keyCode != 13 /* Return */) return;
    var msg = $("#entry").val(); //.replace("\n", "");
    if (!util.isBlank(msg)) send(msg);
    $("#entry").val(""); // clear the entry field.
    return false;
  });

  $("#usersLink").click(outputUsers);
  
  forbind.on({
    message: function (event) {
      if(!CONFIG.focus){
        CONFIG.unread++;
      }
      var message = event.data;
      addMessage(event.user, message.text, event.timestamp);
      updateTitle();     
    },
    ready: ready,
    join: userJoin,
    leave: userPart,
    error: function (error) {
      alert('Something went wrong trying to connect - \n' + error.description);
      showConnect();
    }
  });
  

  //try joining the chat when the user clicks the connect button
  $("#connectButton").click(function () {
    //lock the UI while waiting for a response
    showLoad();
    CONFIG.nick = $("#nickInput").val();
    CONFIG.room = $('#room').val().toLowerCase();
    
    forbind.user(CONFIG.nick);

    window.name = 'room=' + CONFIG.room + '&nick=' + CONFIG.nick;

    //dont bother the backend if we fail easy validations
    if (CONFIG.nick.length > 50) {
      alert("Nick too long. 50 character max.");
      showConnect();
      return false;
    }

    //more validations
    if (/[^\w_\-^!]/.exec(CONFIG.nick)) {
      alert("Bad character in nick. Can only have letters, numbers, and '_', '-', '^', '!'");
      showConnect();
      return false;
    }

    //make the actual join request to the server
    forbind.join(CONFIG.room);
    return false;
  });

  // update the clock every second
  setInterval(function () {
    var now = new Date();
    $("#currentTime").text(util.timeString(now));
  }, 1000);

  if (CONFIG.debug) {
    $("#loading").hide();
    $("#connect").hide();
    scrollDown();
    return;
  }

  // remove fixtures
  $("#log table").remove();

  var query = getQuery(window.location.search || window.name);
  if (query.nick) {
    $("#nickInput").val(query.nick);
    $('#room').val(query.room);
    $('#connectButton').click();
  } else {
    showConnect();
  }
});

//if we can, notify the server that we're going away.
$(window).unload(part);