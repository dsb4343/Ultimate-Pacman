//Constructor to create button objects
function Button(_x, _y, _w, _h, _txt, _btnClr, _txtClr) {
  //properties or data
  this.x = _x;
  this.y = _y;
  this.w = _w;
  this.h = _h;
  this.txt = _txt;
  this.btnClr = _btnClr;
  this.txtClr = _txtClr;
  //methods
  this.display = function() {
    push(); //remember current settings
    rectMode(CORNER);
    fill(this.btnClr);
    rect(this.x, this.y, this.w, this.h);
    fill(this.txtClr);
    textSize(12);
    textAlign(CENTER, CENTER);
    text(this.txt, this.x + this.w / 2, this.y + this.h / 2); //write text at center of button
    pop(); //return the setting as they were at the beginning
  };

  this.isClicked = function() {
    if (mouseIsPressed && mouseX > this.x && mouseX < this.x + this.w &&
      mouseY > this.y && mouseY < this.y + this.h) {
      return true;
    } else {
      return false;
    }
  }; //closes isClicked method
} //closes constructor