// Select canvas in DOM
var canvas = document.querySelector('canvas');
// Set width and height of canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create context
var c = canvas.getContext('2d');

// // Create rectanlge
// c.fillStyle = "rgba(250, 0, 255, .5)";
// c.fillRect(100, 100, 100, 100);
//
// // Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.strokeStyle = "#0af";
// c.stroke();
//
// // Arc or Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.stroke();
//  for (var i = 0; i < 200; i++){
//    var x = Math.random() * window.innerWidth;
//    var y = Math.random() * window.innerHeight;
//    c.beginPath();
//    c.arc(x, y, 30, 0, Math.PI * 2, false);
//    c.stroke();
//  }

var mouse = {
  x: undefined,
  y: undefined
}

var maxRadius = 30;
var minRadius = 5;

var colorArray = [
  '#02547D',
  '#0284A8',
  '#02BEC4',
  '#A9E8DC',
  '#E1F7E7'
];

window.addEventListener('mousemove',
  function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
  });

window.addEventListener('resize', function()
{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.stroke();
    c.fill();
  }

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    // Interactivity
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50
        && mouse.y - this.y < 50 && mouse.y - this.y > -50)
        {
        if (this.radius < maxRadius){
          this.radius += 1;
        }
    } else if (this.radius > this.minRadius){
      this.radius -= 1;
    }

    this.draw();
  }
}

var circleArray = [];

function init() {
  circleArray = [];
  for (var i = 0; i < 900; i++) {
    var radius = Math.random() * 4 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 7;
    var dy = (Math.random() - 0.5) * 7;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

}
init();
animate();
