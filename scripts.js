console.log("Hello World");

var canvas = document.getElementById("canvas");
var c= canvas.getContext('2d");
var tx = window.innerWidth;
var ty = window.innerHeight;     
canvas.width = tx;
canvas.height = ty;
//c.linewidth= 5;
//c.globalAlpha = o.5;

var mousex = 0;
var mousey = 0;
                         
addEventListener('mousemove', function() {
  mousex = event.clientX;
  mousey = event.clientY;
  });

var grav = 0.99;
c.strokewidth = 5;
function randomColor() {
  return (
    "rgba(" +
    Math.round(Math.random() * 250) + "," +
    Math.round(Math.random() * 250) + "," +
    Math.round(Math.random() * 250) + "," +
    Math.ceil(Math.random() * 10) / 10  + ")"
    );
 }
      
function Ball () {
 this.color = randomColor();
 this. radius = Math.random() * 20 + 14;
 this. startradius = this.radius;
 this.x = Math. random() * (tx - this.radius * 2) + this.radius;
 this.y = Math. random() + (ty - this.radius); 
 this.dy = Math.random() * 2;
 this.dx = Math.random((Math.random() - 0.5) * 10);
 this.vel = Math. random() /5;
 this. update = function() {
   c.beginPath();
   c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
   c.fillstyle = this.color;
   c.fill();
   //c.stroke();
  }; 
}

var bal = [];
for (var i =0; i < 50; i ++
                         
                         
