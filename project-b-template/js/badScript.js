let x = 0
let angle;
let angleVel;
let radDist;
function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent("BadCanvasContainer");
    background(220);
  }
  

  
  function draw() { 
    
    angle = angle + angleVel;
  
    // calculate the position
    x = width/2 + cos(angle) * radDist;
    m = width/2 + cos(0.2) * 100
    y = height/2 + sin(angle) * radDist;
    
    background(100 - random(-50,50),20 - random(-50,50),40 - random(-50,50));
    
    
    fill(200 - random(25),200 - random(25),10 - random(25))
    circle(y,y, 400 * sin(frameCount/10))
    
    fill(220 - random(25),170 - random(25),30 - random(25))
    circle(x,x, 350 * sin(frameCount/9))
    
    fill(20 - random(25),150 - random(25),20 - random(25))
    circle(y,x, 300 * sin(frameCount/8))
    
    fill(40 - random(25),130 - random(25),100 - random(25))
    circle(x,y, 250 * sin(frameCount/7))
    
    fill(50 - random(25),120 - random(25),220 - random(25))
    circle(y,y, 200 * sin(frameCount/6))
    
    fill(100 - random(25),60 - random(25),220 - random(25))
    circle(x,x, 150 * sin(frameCount/5))
    
    fill(200 - random(25),20 - random(25),220 - random(25))
    circle(y,x, 100 * sin(frameCount/4))
    
    fill(230 - random(25),20 - random(25),50 - random(25))
    circle(x,y, 50 * sin(frameCount/2))
    
  }