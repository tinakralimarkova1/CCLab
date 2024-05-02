
  let NUM_OF_PARTICLES = 1; // Decide the initial number of particles.
  
  let particles = [];
  function setup() {
    let canvas1 = createCanvas(800, 500);
    canvas1.parent("Landing_canvas2");
    background(29, 240, 177);
  }
  
  function draw() {
  background(29, 240, 177);
  
  strokeWeight(20);
  fill("white");
  circle(200,200,350);
  
  push();
  noStroke();
  
  fill("black");
  circle(constrain(mouseX,120,280),constrain(mouseY,110,290),100);
  fill("white");
  circle(constrain(mouseX,105,295),constrain(mouseY,95,305),40);
  pop();
    
  }
  
  
  
  
  
  