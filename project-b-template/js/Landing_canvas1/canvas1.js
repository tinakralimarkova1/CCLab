
  let NUM_OF_PARTICLES = 1; // Decide the initial number of particles.
  
  let particles = [];
  function setup() {
    let canvas1 = createCanvas(800, 500);
    canvas1.parent("Landing_canvas1");
    background(29, 240, 177);
  }
  
  function draw() {
    //
    background(29, 240, 177);
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
      this.X = random(1, 50);
      this.Y = random(1, 50);
    }
    // methods (functions): particle's behaviors
    update() {
      this.y += random(-5, 5);
      this.x += random(-5, 5);
    }
    
    
    
    display() {
      // particle's appearance
      function foot(x,y){
    fill(random(255), random(255), random(255));
  
    noStroke();
    circle(x,y,20);
    ellipse(x,y+10,20,25);
    
    circle(x-13,y-10,7);
    circle(x-5,y-15,7);
    circle(x+5,y-15,7);
    circle(x+15,y-10,7);
    
    
  }
      
      
      push();
      fill(random(255), random(255), random(255));
      
      
      foot(this.x,this.y)
  
      pop();
    }
  }
  
  
  
  
  
  