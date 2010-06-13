if (document.createElement('canvas').getContext('2d')) (function () {

var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    copy = document.createElement('canvas'),
    ctxcopy = copy.getContext('2d'),
    body = document.body,
    drawing = false,
    resizeTimer = null;

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
    x = event.clientX + document.body.scrollLeft;
    y = event.clientY + document.body.scrollTop;
    ctx.fillRect(~~(x / 10) * 10, ~~(y / 10) * 10, 9, 9);
  }
}, false);

canvas.addEventListener('mousedown', function (event) {
  drawing = true;
  // ctx.fillStyle = '#' + (~~(Math.random() * 16777215)).toString(16);
  event.preventDefault();
}, false);

body.addEventListener('mouseup', function () {
  x = event.clientX + document.body.scrollLeft;
  y = event.clientY + document.body.scrollTop;
  ctx.fillRect(~~(x / 10) * 10, ~~(y / 10) * 10, 9, 9);
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


})();