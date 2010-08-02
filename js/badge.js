// (function (window, document, undefined) {

var addEvent = (function () {
  if (document.addEventListener) {
    return function (el, type, fn) {
      if (el && el.nodeName || el === window) {
        el.addEventListener(type, fn, false);
      } else if (el && el.length) {
        for (var i = 0; i < el.length; i++) {
          addEvent(el[i], type, fn);
        }
      }
    };
  } else {
    return function (el, type, fn) {
      if (el && el.nodeName || el === window) {
        el.attachEvent('on' + type, function () { return fn.call(el, window.event); });
      } else if (el && el.length) {
        for (var i = 0; i < el.length; i++) {
          addEvent(el[i], type, fn);
        }
      }
    };
  }
})();


var old = { h: window.innerHeight, w: window.innerWidth };

function init(event) {
  // var logoHead, logoBody;
  
  if (init.done === true) {
    //   var x = old.w - window.innerWidth, y = old.h - window.innerHeight;
    //   // x *= x < 0 ? -1 : 1;
    //   // y *= y < 0 ? -1 : 1;
    //   x /= 50;
    //   y /= 50;
    // 
    //   logoBody.attr(
    //     x: parseInt(point.style.top) - x,
    //     y: parseInt(point.style.top) - y
    //   });
    // 
    //   timer = setTimeout(function () {
    //     old = { h: window.innerHeight, w: window.innerWidth };
    //   }, 1000);
    // }, true);
    // 
  } else {
    init.done = true;

    var script = document.createElement('script');
    script.src = 'http://github.com/DmitryBaranovskiy/raphael/blob/master/raphael.js?raw=true';
    addEvent(script, 'load', function () {
      var badge = document.createElement('div');
      badge.id = 'leftlogicBadge';
      badge.style.position = 'absolute';
      badge.style.top = '5px';
      badge.style.left = '5px';
      // badge.style.opacity = 0;
      document.body.appendChild(badge);
      R = Raphael('leftlogicBadge', 400, 400);

      logoHead = R.set();
      logoHead.push(
        R.rect(2, 2, 10, 10).attr({ fill: '#fff', stroke: 'none' }),
        R.rect(4.5, 4.5, 5, 5).attr({ fill: '#008F69', stroke: 'none' })
      );

      logoBody = R.set();
      logoBody.push(
        R.path("m 32,22 -10,-10 -10,0 0,10 L 22,32 32,32 z").attr({ fill: '#FF5F00', stroke: 'none' }),
        R.rect(14.5, 14.5, 5, 5).attr({ fill: '#fff', stroke: 'none' }),
        R.path("m 32,32 -10,-10 0,-10 10,10 z").attr({ fill: '#F24D00', stroke: 'none' })      
      );
      
      var start = function () {
          // storing original coordinates
          this.ox = this.attr("x");
          this.oy = this.attr("y");
          this.attr({opacity: 1});
          console.log('start');
      },
      move = function (dx, dy) {
          // move will be called with dx and dy
          this.attr({x: this.ox + dx, y: this.oy + dy});
          console.log('move');
      },
      up = function () {
          // restoring state
          this.attr({opacity: .5});
          console.log('up');
      };
      logoHead.drag(move, start, up);
      
    });
    document.body.appendChild(script);
  }
}


addEvent(window, 'resize', init);
init();

// })(this, document);
