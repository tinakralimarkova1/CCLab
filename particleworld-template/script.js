// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 2; // Decide the initial number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");

  // generate particles
  
}

function draw() {
  background(252, 186, 3);
  tv();

  // update and display
  if(mouseX > 185 && mouseX < 615 && mouseY > 185 && mouseY < 415 && mouseIsPressed){
    for (let i = 0; i < NUM_OF_PARTICLES; i++) {

      particles.push(new Particle(random(mouseX-10, mouseX+10), random(mouseY-10, mouseY+10)));
    }
  }

  // show particles 
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();

    //remove particles
    if(particles[i].x <185 || particles[i].x > 615 || particles[i].y <185 || particles[i].y > 415){
      particles.splice(i, 1);
    }
  }
}


function tv(){
  
  push()
  strokeWeight(10)
  line(350,150,300,50)
  line(450,150,500,50)
  
  circle(300,50,10)
  circle(500,50,10)
  
  pop()
  
  rectMode(CENTER);
  fill(74, 70, 59)
  rect(400,300,500,300)
  fill(18)
  rect(400,300,450,250)
  
  
  
  
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.rectX = random(1, 50);
    this.rectY = random(1, 50);
  }
  // methods (functions): particle's behaviors
  update() {
    this.y += random(-5, 5);
    this.x += random(-5, 5);
  }
  display() {
    // particle's appearance
    push();
    fill(random(255), random(255), random(255));
    

    rect(this.x, this.y, this.rectX,this.rectY);

    pop();
  }
}
