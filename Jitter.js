// Jitter class
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = (10, 20);
  this.speed = 2;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    fill(r, g, b);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}