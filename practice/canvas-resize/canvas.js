//shouldn't use var
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//c is short for context
var c = canvas.getContext('2d');

          //x & y are from top-left
          //x, y, width, height
c.fillRect(100, 100, 100, 100);
c.fillRect(400, 100, 100, 100);
c.fillRect(50, 50, 20, 20);
c.fillRect(500, 300, 123, 48);
console.log(canvas);