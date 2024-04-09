
let balls = [];
let mySound;

function preload() {
  mySound = loadSound("assets/Main Menu Idea.mp3.mp3");
}

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("canvasContainer");
  background(220);

  for (let i = 0; i < 20; i++) {
    balls.push(new Ball(random(width), random(height), mySound));
  }
}

function draw() {
  background(220);



  for (let i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].move();
    balls[i].bounce();  
  }
}

class Ball {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.xSpeed = random(-3, 3);
    this.ySpeed = random(-3, 3);
    this.size = random(5, 50);
    this.col = [random(255), random(255), random(255)];
    this.s = s;
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  bounce() {
    if (this.x > width  || this.x <0)  {
      this.col = [random(255), random(255), random(255)];
      this.xSpeed *=1;
      //this.xSpeed++;
      //this.s.play();
    }
    if (this.y > height || this.y <0) {
      this.ySpeed *= -1;
      
      this.col = [random(255), random(255), random(255)];
      //this.s.play();
    }
    
  }

  display() {
    fill(this.col[0], this.col[1], this.col[2]);
    circle(this.x, this.y, this.size);



  }


}
