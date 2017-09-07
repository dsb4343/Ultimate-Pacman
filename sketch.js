var music;
var audio;
var bugs = []; // array of Jitter objects
var rows = 5;
var cols = 4;

function preload() {
  music = new Audio('shine.mp3');
  audio = new Audio('intro.mp3');

}

function setup() {
  createCanvas(400, 400);
  frameRate(15);
  rbc = random(0 - 255, 0, 0);
  gbc = random(0, 0 - 255, 0);
  bbc = random(0, 0, 0 - 255);
  r = random(0 - 255, 0, 0);
  g = random(0, 0 - 255, 0);
  b = random(0, 0, 0 - 255);
  pacman1 = new Pacman(width / 2, height / 2, 50, radians(0), radians(0));
  button1 = new Button((width / 2) - 150, height - 25, 50, 25, 'BugClr', 'lightgray', 'black');
  button2 = new Button((width / 2) - 100, height - 25, 50, 25, 'BgClr', 'gray', 'black');
  button3 = new Button((width / 2) - 50, height - 25, 50, 25, 'FrSlow', 'red', 'black');
  button4 = new Button((width / 2), height - 25, 50, 25, 'FrNorm', 'yellow', 'black');
  button5 = new Button((width / 2) + 50, height - 25, 50, 25, 'FrTurbo', 'lightgreen', 'black');
  button6 = new Button((width / 2) - 200, height - 25, 50, 25, 'START', 'lightblue', 'black');
  button7 = new Button((width / 2) + 100, height - 25, 50, 25, 'MusON', 'orange', 'black');
  button8 = new Button((width / 2) + 150, height - 25, 50, 25, 'MusOFF', 'lightbrown', 'black');

  for (var i = 0; i < rows; i++) {
    bugs[i] = []
    for (var k = 0; k < cols; k++) {
      bugs[i][k] = new Jitter(k * 75 + 50, i * 75 + 50, 50);
    }
  }
}

function draw() {
  background(rbc, gbc, bbc);

  for (var i = 0; i < bugs.length; i++) {
    for (var k = 0; k < bugs[i].length; k++) {
      var d = dist(pacman1.x, pacman1.y, bugs[i][k].x, bugs[i][k].y);
      if (d < pacman1.size / 5 + bugs[i][k].diameter / 2) {
        pacman1.size += bugs[i][k].diameter / 20
        bugs[i].splice(k, 1);
      } else {
        bugs[i][k].display();
      }
    }
  }

  pacman1.display();
  button1.display();
  button2.display();
  button3.display();
  button4.display();
  button5.display();
  button6.display();
  button7.display();
  button8.display();

  if (keyIsPressed) {
    if (key == 'w') {
      pacman1.moveup();
    } else if (key == 's') {
      pacman1.movedown();
    } else if (key == 'a') {
      pacman1.moveleft();
    } else if (key == 'd') {
      pacman1.moveright();
    }
  }

  if (button1.isClicked()) {
    r = random(255), g = random(255), b = random(255)
  }

  if (button2.isClicked()) {
    rbc = random(255), gbc = random(255), bbc = random(255);
  }

  if (button3.isClicked()) {
    frameRate(15);
  }

  if (button4.isClicked()) {
    frameRate(30);
  }

  if (button5.isClicked()) {
    frameRate(60);
  }

  if (button6.isClicked()) {
    r = random(255), g = random(255), b = random(255)
    rbc = random(255), gbc = random(255), bbc = random(255)
    audio.play()
  }

  if (button7.isClicked()) {
    music.play();
  }

  if (button8.isClicked()) {
    music.pause();
  }
}