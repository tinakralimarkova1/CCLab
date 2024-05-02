
  let NUM_OF_PARTICLES = 1; // Decide the initial number of particles.
  
  let particles = [];
  function setup() {
    let canvas1 = createCanvas(800, 500);
    canvas1.parent("Landing_canvas3");
    background(29, 240, 177);
  }
  
  function draw() {
    background(29, 240, 177);
    textAlign(CENTER,CENTER)
    textSize(20);
    
    
    
    
    let cols = 50;
    let rows = 40;
    
    // Set the size of each cell
    let cellWidth = width / cols;
    let cellHeight = height / rows;
    
    // Loop through each cell and print a random 0 or 1
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * cellWidth + cellWidth / 2;
        let y = j * cellHeight + cellHeight / 2;
        
        
        let value = floor(random(2)); // Randomly choose 0 or 1
        fill(35+(random(-60,60)), 184+(random(-60,60)), 47+(random(-60,60)));
        text(value, x, y);
      }
    }
    fill("black")
    circle(200,150,100);
    rectMode(CENTER)
    rect(200,285,120,200,50,50,0,0)
    
  }
  
  
  
  
  
  