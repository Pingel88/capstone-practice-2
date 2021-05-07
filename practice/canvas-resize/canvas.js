// shouldn't use var
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c is short for context
var c = canvas.getContext('2d');

              // fillStyle colors all rectangles (fills?) below it
              // can be rgb, hex, or text color
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
          // x & y are from top-left
          // x, y, width, height
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(50, 50, 20, 20);
c.fillStyle = 'rgba(123, 123, 321, 0.5)';
c.fillRect(500, 300, 123, 48);
console.log(canvas);

// Line
c.beginPath();
      // x, y
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#fa34a3";
c.stroke();

// Arc / Circle
// c.beginPath();
    // x, y, radius, startAngle (in radians), endAngle (in radians), anti-clockwise (boolean)
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();


for (let i = 0; i < 100; i++) {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = `rgba(${r}, ${g}, ${b}, 1)`;
  c.stroke();
}