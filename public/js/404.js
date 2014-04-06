function request(type, url, opts, callback) {
  'use strict';
  var xhr = new XMLHttpRequest(),
      fd;

  if (typeof opts === 'function') {
    callback = opts;
    opts = null;
  }

  xhr.open(type, url);

  if (type === 'POST' && opts) {
    fd = new FormData();

    for (var key in opts) {
      fd.append(key, JSON.stringify(opts[key]));
    }
  }

  xhr.onload = function () {
    callback(JSON.parse(xhr.response));
  };

  xhr.send(opts ? fd : null);
}

function shuffle(array) {
  'use strict';
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

(function (others) {
  'use strict';

  if (!others) {
    return;
  }

  request('GET', '/404-images.json', function (images) {
    others.parentNode.hidden = false;
    others.innerHTML = shuffle(images).slice(0, 10).map(function (image) {
      return '<li><img src="/img/404/' + image + '"></li>';
    }).join('');
  });

})(document.getElementById('others'));