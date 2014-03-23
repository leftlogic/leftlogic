(function (window, document, undefined) {
  'use strict';
  var play = document.getElementById('play');
  // var save = false;
  var dots = {};

  var dotsize = 10;

  if (play) {
    if (sketchpad(play)) {
      var playctx = play.firstChild.getContext('2d'),
          others = document.getElementById('others');
      if (others) {
        others.addEventListener('click', function (event) {
          if (event.target.nodeName === 'IMG') {
            playctx.clearRect(0, 0, playctx.canvas.width, playctx.canvas.height);
            playctx.drawImage(event.target, 0, 0); //, playctx.canvas.width - 4, playctx.canvas.height);
          }
        });
      }

      play.addEventListener('dblclick', function (event) {
        playctx.clearRect(0, 0, playctx.canvas.width, playctx.canvas.height);
        event.preventDefault();
      }, false);

      // var timer = 0;
      play.firstChild.addEventListener('mouseup', function () {
        console.log(dataToString());
        return;
        // clearTimeout(timer);
        // timer = setTimeout(function () {
        //   var client = new XMLHttpRequest();
        //   client.open('POST', '/savepng.php');
        //   client.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //   client.send('data='+play.firstChild.toDataURL('image/png'));
        // }, 2000);
      });
    }
  }

  function dataToString() {
    var string = '';
    var position;
    for (var i = 0; i < 53 * 40; i++) {
      string += '0';
    }
    console.log(dots);
    for (var row in dots) {
      for (var column in dots[row]) {
        // Here we need to convert the coords from a dot (e.g. 3, 4) into a
        // position in the string (in order to add a 1). We multiply the row
        // number (minus 1) by 53 (the amount of columns), and then add on the
        // remainder columns of the last row. This gives us the position.
        position = ((parseInt(row) - 1) * 53) + parseInt(column) - 1;
        string = string.substr(0, position) + '1' + string.substr(position + 1);
      }
    }
    return string;
  }

  function sketchpad(mirror) {
    if (!document.createElement('canvas').getContext('2d')) {
      return;
    }

    function Dot(x, y) {
      var dot = this;
      var color = colors[~~(Math.random()*colors.length)];
      var column = (x / dotsize) + 1 | 0;
      var row = (y / dotsize) + 1 | 0;

      function draw() {
        ctx.save();
        dot.level += 0.1 * dot.direction;
        if (dot.level < 0.01) {
          dot.level = 0;
        }
        ctx.fillStyle = 'rgba(' + color + ', ' + dot.level + ')';
        // if (mirror === body) {
        //   ctx.clearRect(~~(x / dotsize) * dotsize, ~~(y / dotsize) * dotsize, dotsize-1, dotsize-1); // because we're using opacity
        // }
        ctx.fillRect(~~(x / dotsize) * dotsize, ~~(y / dotsize) * dotsize, dotsize-1, dotsize-1);
        ctx.restore();
      }

      dot.level = 1;
      dot.direction = 1;

      /*if (dots[x+':'+y] !== undefined) {
        dot.level = dots[x+':'+y].level;
        dots[x+':'+y].clear();
      }

      dots[x+':'+y] = dot;*/

      // Adds the dot to a Object of Objects (columns in rows) to convert into
      // a string later on.
      dots[row] = dots[row] || {};
      dots[row][column] = dot;

      // dot.timer = setTimeout(animate, 50);
      draw();
    }

    Dot.prototype.clear = function () {
      clearTimeout(this.timer);
    };

    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        drawing = false,
        comp = mirror.currentStyle ? mirror.currentStyle : getComputedStyle(mirror, null),
        left = 0,
        top = 0,
        colors = ['234,109,0', '219,64,0', '224,73,0', '224,78,0', '229,95,0', '228,100,0', '229,101,0'],
        obj = mirror;

    do {
      left += obj.offsetLeft;
      top += obj.offsetTop;
    } while (obj = obj.offsetParent);

    canvas.className = 'game';
    canvas.height = parseInt(comp.height);
    canvas.width = parseInt(comp.width);

    ctx.lineWidth = 9;
    ctx.moveTo(1, 1);
    ctx.fillStyle = '#ea6d00';

    // mouse handlers
    canvas.addEventListener('mousemove', function (event) {
      var x, y;
      if (drawing) {
        x = event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - left;
        y = event.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - top;
        new Dot(x, y);
      }
    }, false);

    canvas.addEventListener('mousedown', function (event) {
      drawing = true;
      event.preventDefault();
    }, false);

    document.addEventListener('mouseup', function (event) {
      drawing = false;
    }, false);

    mirror.insertBefore(canvas, mirror.firstChild);
    return true;
  }
})(this, document);
