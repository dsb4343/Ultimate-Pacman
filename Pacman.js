//Pacman Constructor
function Pacman(_x, _y, _size, _arcbeg, _arcend) {
  this.x = _x;
  this.y = _y;
  this.size = _size;
  this.arcbeg = _arcbeg;
  this.arcend = _arcend;
  this.isopen = false;

  this.display = function() {
    push();
    noStroke();
    fill('yellow'); //Draw Pacman's Body
    arc(this.x, this.y, this.size, this.size, this.arcbeg, this.arcend);
    stroke(0);
    fill(0); //Draw circle for Pacman's eye
    ellipse(this.x + (this.size / 5), this.y - (this.size / 3), this.size / 15, this.size / 15);
    line(this.x, this.y, this.x + (this.size / 2.00), this.y); //Draw Pacman's mouth closed
    if (this.isopen) { //Animate Pacman's mouth
      fill(0);
      arc(this.x, this.y, this.size, this.size, this.arcbeg - 0.505, this.arcend + 0.505);
      fill(rbc, gbc, bbc);
      noStroke();
      arc(this.x, this.y, this.size + 3, this.size, this.arcbeg - 0.5, this.arcend + 0.5);
    } //mouth is open
    if (frameCount % 8 === 0) {
      this.isopen = !this.isopen;
    }
    pop();
  };
  this.moveright = function() {
    this.x = this.x + 5;
  };
  this.moveleft = function() {
    this.x = this.x - 5;
  };
  this.moveup = function() {
    this.y = this.y - 5;
  };
  this.movedown = function() {
    this.y = this.y + 5;
  };
} //Closes Constructor