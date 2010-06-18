if (document.createElement('canvas').getContext('2d')) (function (window, document, undefined) {

var dots = {};

function Dot(x, y) {
  var dot = this,
      color = colors[~~(Math.random()*colors.length)];
  
  function animate() {
    ctx.save();
    dot.level += 0.1 * dot.direction;
    if (dot.level < 0.01) dot.level = 0;
    ctx.fillStyle = 'rgba(' + color + ', ' + dot.level + ')';
    ctx.clearRect(~~(x / 10) * 10, ~~(y / 10) * 10, 9, 9); // because we're using opacity
    ctx.fillRect(~~(x / 10) * 10, ~~(y / 10) * 10, 9, 9);
    ctx.restore();
    if (0 < dot.level && dot.level < 1) {
      dot.timer = setTimeout(animate, 50);
    } else if (dot.level > 1) {
      dot.direction = -1;
      dot.timer = setTimeout(animate, 500);
    } 
  }
  
  dot.level = 0;
  dot.direction = 1;
  
  if (dots[x+':'+y] !== undefined) {
    dot.level = dots[x+':'+y].level;
    dots[x+':'+y].clear();
  }
  
  dots[x+':'+y] = dot;
  
  dot.timer = setTimeout(animate, 50);
}

Dot.prototype.clear = function () {
  clearTimeout(this.timer);
};

var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    copy = document.createElement('canvas'),
    ctxcopy = copy.getContext('2d'),
    body = document.body,
    drawing = false,
    resizeTimer = null,
    colors = ['234,109,0', '219,64,0', '224,73,0', '224,78,0', '229,95,0', '228,100,0', '229,101,0'];

// setup the style
canvas.className = 'game';
canvas.height = body.scrollHeight;
canvas.width = window.innerWidth - 16;

ctx.lineWidth = 9;
ctx.moveTo(1, 1);
ctx.fillStyle = '#EA6D00';

// mouse handlers
canvas.addEventListener('mousemove', function (event) {
  var x, y;
  if (drawing) {
    x = event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
    y = event.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
    new Dot(x, y);
  }
}, false);

canvas.addEventListener('mousedown', function (event) {
  drawing = true;
  event.preventDefault();
}, false);

body.addEventListener('mouseup', function (event) {
  x = event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);
  y = event.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
  new Dot(x, y);
  drawing = false;
}, false);

window.addEventListener('resize', function (event) {
  clearTimeout(resizeTimer);
  var resizeTimer = setTimeout(function () {
    // copy the canvas before it gets resized
    copy.height = canvas.height;
    copy.width = canvas.width;
    
    ctxcopy.drawImage(canvas, 0, 0);
    
    canvas.height = body.scrollHeight;
    canvas.width = window.innerWidth - 16;
    
    ctx.drawImage(copy, 0, 0);
    ctx.fillStyle = '#EA6D00';
  }, 100);
}, false);

body.insertBefore(canvas, body.firstChild);


})(this, document);