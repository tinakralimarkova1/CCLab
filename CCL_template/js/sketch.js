
let RandomX = 0
let RandomY = 0
let moveX = 0
let moveY = 0
let constant = 20
let inZone = false
let x1 = 0
let angle = 0;
let scaryZone = 0 
function setup() {
  let cnv = createCanvas(800, 500);
  cnv.id("my_canvas");
  cnv.parent("p5-cont")

}

function draw() {
  RandomX = random(-10,10) + random(-x1/10,x1/10)
  RandomY = random(-10,10) + random(-x1/10,x1/10)
  moveX += 1
  moveY += 1
  //background(33, 80, 97);
  
  // START OF BACKGROUNG
      backgrnd()
  // END OF BACKKGROUND
  
      //man()
  
  
//   //START OF CREATURE
  
  inZone = false
  push()
  
  if(mouseX >250 && mouseX < 550 && mouseY >60 && mouseY<450 && scaryZone <=200){
      translate(RandomX,RandomY)
      tentacles()
      creatureBody()
    tentacle_blink()
    inZone = true
    
  }
  
  if(scaryZone <=200){
    tentacles()
  creatureBody()
  tentacle_blink()
  }
  
//   //END OF CREATURE
  pop()
  
 draw_man()
  
  
  
  if (frameCount >400){
    
  }
    
  
  if(inZone){
    scaryZone++
  }
  
  if(scaryZone >200){
    scale(1.3 )
    push()
  translate(-100,-30)
    monster()
    pop()
  
    
    

  }
  
  
  
  
  
  
  
}
function monster_mouth(){
  
  push()
  fill(184, 193, 207)
  circle(400,230,90)
  fill(0)
  circle(400,230,70)
  pop()
  
  scale(0.60)
  translate(265,150)
  fill('white')
  let angleIncrement = TWO_PI / 12;
  
  
  
  // Draw rotating teeth around the circle
  for (let i = 0; i < 16; i++) {
    let x = 400 + cos(angle + frameCount/20 ) * 70;
    let y = 230 + sin(angle + frameCount/20) * 70;
    let toothX1 = x + cos(angle ) * 20;
    let toothY1 = y + sin(angle ) * 20;
    let toothX2 = x + cos(angle ) * 10 + 10;
    let toothY2 = y + sin(angle ) * 10 + 10 ;
    
    // Draw the teeth
    
    triangle( toothX1, toothY1,x, y, toothX2,toothY2);
    
    // Increment the angle for the next tooth
    angle += angleIncrement;
  }
  
  for (let i = 0; i < 14; i++) {
    let x = 400 + cos(-angle + frameCount/10 ) * 70;
    let y = 230 + sin(-angle + frameCount/10 ) * 70;
    let toothX1 = x + cos(-angle ) * 20;
    let toothY1 = y + sin(-angle) * 20;
    let toothX2 = x + cos(-angle ) * 10 + 8;
    let toothY2 = y + sin(-angle) * 10 + 8;
    
    // Draw the teeth
    
    triangle( toothX1, toothY1,x, y, toothX2,toothY2);
    
    // Increment the angle for the next tooth
    angle += angleIncrement;
  }
  
  
  for (let i = 0; i < 12; i++) {
    let x = 400 + cos(-angle + frameCount/5 ) * 70;
    let y = 230 + sin(-angle + frameCount/5 ) * 70;
    let toothX1 = x + cos(-angle ) * 20;
    let toothY1 = y + sin(-angle) * 20;
    let toothX2 = x + cos(-angle ) * 10 + 5;
    let toothY2 = y + sin(-angle) * 10 + 5;
    
    // Draw the teeth
    
    triangle( toothX1, toothY1,x, y, toothX2,toothY2);
    
    // Increment the angle for the next tooth
    angle += angleIncrement;
  }
  
  for (let i = 0; i < 10; i++) {
    let x = 400 + cos(-angle + frameCount/3 ) * 70;
    let y = 230 + sin(-angle + frameCount/3 ) * 70;
    let toothX1 = x + cos(-angle ) * 20;
    let toothY1 = y + sin(-angle) * 20;
    let toothX2 = x + cos(-angle ) * 10 + 3;
    let toothY2 = y + sin(-angle) * 10 + 3;
    
    // Draw the teeth
    
    triangle( toothX1, toothY1,x, y, toothX2,toothY2);
    
    // Increment the angle for the next tooth
    angle += angleIncrement;
  }
  
}

function monster(){
  scale(1 + frameCount/500)
  fill(40, 139, 237)
  noStroke()
  //petal 1
  petal()
  
  //petal 2
  push()
  translate(580,-200)
  rotate(1.45)
  petal()
  pop()
  
  //petal 3
  
  push()
  translate(140,602)
  rotate(-1.5)
  petal()
  pop()
  
  //petal 4
   push()
  translate(850,160)
  rotate(2.45)
  petal()
  pop()
  //petal 5
  push()
  translate(560,670)
  rotate(-2.45)
  petal()
  pop()
  
  //mouth
  monster_mouth()
  
  
  
  
        }

function petal(){
  
  
  beginShape()
  curveVertex(400,50)
  vertex(400,30)
  vertex(350,100)
  vertex(375,200)
  vertex(425,200)
  vertex(450,100)
  vertex(400,30)
  vertex(400,30)
  endShape()
  
}

function backgrnd(){
  background(33, 80, 97);
  push()
  for(x=0;x<800;x += 10){
    
      for(i=0;i<500;i+= 10){
        
        noStroke()
        fill(14 - random(-20,20), 45 - random(-20,20), 82 - random(-20,20),random(50))
        square(x,i,100)
         fill(60 - random(-20,20), 98 - random(-20,20), 130 - random(-20,20),random(50,80))
        circle(sin(random(x))*30 + x,i,10)
        circle(cos(random(i))*30 + x,i,10)
        
      }
  }
  pop()
}

function creatureBody(){
  push()
  noStroke()
    beginShape();
  fill(40, 139, 237)
  curveVertex(300,400)
  vertex(500,400)
  vertex(500,200)
  vertex(400,50)
  vertex(300,200)
  vertex(300,400)
  vertex(450,400)
  ellipse(400,350,231,210)
  
  
  endShape(CLOSE);
  pop()
  
  
  
  
  push()
  
  //fill(13, 89, 161)
  noFill()
  strokeWeight(20)
  stroke(13,89,161)
  curve(300,100,280,345,525,345,500,100)
  pop()
  
  //
  
  
  
  
  
}

function tentacles(){
  
  
  
  //tentacle 1 START
  push()
  noFill()
  stroke(120, 10, 68)
  strokeWeight(15)
  bezier(300, 300, 220, 300+sin(frameCount/4)*40, 230, 130+ cos(frameCount/4)*40, 170, 130);
  pop()
  
  noStroke()
  
  if(inZone == false){
    
    fill(120, 10, 68)
  circle(165,120,50)
  fill(255,255,255)
  
  circle(165,120,40)
  fill(0,0,0)
  circle(constrain(mouseX,160,170),constrain(mouseY,115,125),30)
  }
  else{
    
    fill(204 - random(-x1/2,x1/2), 10, 114 ,80 + random(-30,30))
  circle(165,120,1+x1)
    fill(120, 10, 68)
  circle(165,120,50)
  fill(255,255,255)
  
  circle(165,120,40)
  fill(0,0,0)
    circle(165,120,10)
  }
  //tentacle 1 END
  
  //tentacle 2
   push();
  noFill();
  stroke(120, 10, 68);
  strokeWeight(15);
  bezier(500, 300, 580, 300+sin(frameCount/4)*40, 570, 130 + cos(frameCount/4)*40, 630, 130); 
  pop();
  
  push()
  noStroke();
  
  if(inZone == true){
    fill(204 - random(-x1/2,x1/2), 10, 114 ,80 + random(-30,30))
  circle(635,120,1+x1)
    fill(120, 10, 68);
  circle(635, 120, 50);
  fill(255,255,255)
  circle(635,120,40)
  fill(0,0,0)
    circle(635,120,10)
  }
  else{
    
    fill(120, 10, 68);
  circle(635, 120, 50);
  fill(255,255,255)
  circle(635,120,40)
  fill(0,0,0)
      circle(constrain(mouseX,630,640),constrain(mouseY,115,125),30)
    

  }
  
  
  pop()
  //tentacle 2 END
  
  //tentacle 3 Start
  push()
  stroke(120, 10, 68)
  strokeWeight(15)
  line(300,60,350,190)
  pop()
  
  if(inZone == false){
    fill(120, 10, 68)
  circle(300,60,50)
  fill('white')
  circle(300,60,40)
  fill(0)
    circle(constrain(mouseX,295,305),constrain(mouseY,55,65),30)
  }
  else{
    fill(204 - random(-x1/2,x1/2), 10, 114 ,80 + random(-30,30))
  circle(300,60,1+x1)
    fill(120, 10, 68)
  circle(300,60,50)
  fill('white')
  circle(300,60,40)
  fill(0)
    circle(300,60,10)
  }
  
  //tentacle 3 END
  
  //tentacle 4 START
  push();
  stroke(120, 10, 68);
  strokeWeight(15);
  line(500, 60, 450, 190); 
  pop();
  
  
  if(inZone == false){
    fill(120, 10, 68);
  circle(width - 300, 60, 50); 
  fill('white');
  circle(width - 300, 60, 40); 
  fill(0);
    circle(constrain(mouseX,495,505),constrain(mouseY,55,65),30)
  }
  else{
    fill(204 - random(-x1/2,x1/2), 10, 114 ,80 + random(-30,30))
  circle(width - 300,60,1+x1)
    fill(120, 10, 68);
  circle(width - 300, 60, 50); 
  fill('white');
  circle(width - 300, 60, 40); 
  fill(0);
    
    circle(width - 300, 60, 10); 
  }
  
  //tentacle 4 End
  
  //tentacle 5 Start
  push();
  translate(width, 0);
  scale(-1, 1);
  stroke(120, 10, 68);
  strokeWeight(15);
  noFill()
  bezier(310, 400, 220, 300+sin(frameCount/4)*40, 230, 470+cos(frameCount/4)*40, 170, 400); 
  pop();
  
  if(inZone == false){
   fill(120, 10, 68);
  circle(635, 400, 50); 
  fill('white');
  circle(635, 400, 40); 
  fill(0); circle(constrain(mouseX,630,640),constrain(mouseY,395,405),30)
  }
  else{
    fill(204 - random(-x1/2,x1/2), 10, 114 ,80 + random(-30,30))
  circle(635, 400,1+x1)
    fill(120, 10, 68);
  circle(635, 400, 50); 
  fill('white');
  circle(635, 400, 40); 
  fill(0); 
    circle(635, 400, 10);
  }
   
  //tentacle 5 END
  
  //tentacle 6 START (right side, mirrored)
  push();
  translate(width, 0);
  scale(-1, 1);
  stroke(120, 10, 68);
  strokeWeight(15);
  noFill()
  bezier(490, 400, 580, 300 + sin(frameCount/4)*40, 570, 470 + cos(frameCount/4)*40, 630, 400); 
  pop();
  fill(120, 10, 68);
  circle(160, 400, 50); 
  fill('white');
  circle(160, 400, 40); 
  fill(0);
  if(inZone == false){
    fill(120, 10, 68);
  circle(160, 400, 50); 
  fill('white');
  circle(160, 400, 40); 
  fill(0);
    circle(constrain(mouseX,155,165),constrain(mouseY,395,405),30)
  }
  else{
    x1 += 1
    fill(204 - random(-x1/2,x1/2), 10, 114 ,80 + random(-30,30))
  circle(160,400,1+x1)
    fill(120, 10, 68);
  circle(160, 400, 50); 
  fill('white');
  circle(160, 400, 40); 
  fill(0);
    
    fill(0)
  circle(160, 400, 10); 
    // fill('white')
    // circle(160, 400, 5); 
  }
  //tentacle 8 END
  
  //print(x1)
  
}

function draw_man(){
  
  
  
 
  
  if(pmouseX-mouseX >=0){
    fill(113, 200, 222)
  ellipse(mouseX-3,mouseY,10,7)
  
  push()
  noStroke()
  
  fill(56, 171, 62)
  rect(mouseX+7,mouseY-10,12,7)
  fill(103, 201, 144)
  rect(mouseX+5,mouseY-5,20,10)
  
 
  pop()
  
  //legs
  push()
  fill(232, 195, 49)
  noStroke()
  rect(mouseX+40,mouseY+2 +sin(frameCount)* 2,10,6)
  rect(mouseX+40,mouseY-8 +cos(frameCount)* 2,10,6)
  stroke(103, 201, 144)
  strokeWeight(3)
  line(mouseX+40,mouseY+5 +sin(frameCount)* 2,mouseX+25, mouseY+3)
  line(mouseX+40,mouseY-5+cos(frameCount)* 2,mouseX+25, mouseY-3)
  
  //hands
  
  stroke(232, 205, 151)
  line(mouseX-20,mouseY+5 +sin(frameCount)* 2,mouseX+5, mouseY+3)
  line(mouseX-20,mouseY-5+cos(frameCount)* 2,mouseX+5, mouseY-3)
  
  stroke(103, 201, 144)
  line(mouseX-15,mouseY+5 +sin(frameCount)* 2,mouseX+5, mouseY+3)
  line(mouseX-15,mouseY-5+cos(frameCount)* 2,mouseX+5, mouseY-3)
  pop()
  
  
  
     
  
}
  else{
    
    //body
    fill(56, 171, 62)
  rect(mouseX-27,mouseY-10,12,7)
  fill(103, 201, 144)
  rect(mouseX-27,mouseY-5,20,10)
    
    //legs
    push()
  fill(232, 195, 49)
  noStroke()
  rect(mouseX-50,mouseY+2 +sin(frameCount)* 2,10,6)
  rect(mouseX-50,mouseY-8 +cos(frameCount)* 2,10,6)
  stroke(103, 201, 144)
  strokeWeight(3)
  line(mouseX-40,mouseY+5 +sin(frameCount)* 2,mouseX-20, mouseY+3)
  line(mouseX-40,mouseY-5+cos(frameCount)* 2,mouseX-25, mouseY-3)
  
  //hands
  
  stroke(232, 205, 151)
  line(mouseX+20,mouseY+5 +sin(frameCount)* 2,mouseX-5, mouseY+3)
  line(mouseX+20,mouseY-5+cos(frameCount)* 2,mouseX-5, mouseY-3)
  
  stroke(103, 201, 144)
  line(mouseX+15,mouseY+5 +sin(frameCount)* 2,mouseX-5, mouseY+3)
  line(mouseX+15,mouseY-5+cos(frameCount)* 2,mouseX-5, mouseY-3)
  pop()
    
    
    
    
  }
    
   noStroke()
  fill(232, 205, 151)
  circle(mouseX ,mouseY ,15)
  
  if(pmouseX-mouseX >=0){
  fill(113, 200, 222)
  ellipse(mouseX-3,mouseY,10,7)
  }
  else{
     fill(113, 200, 222)
  ellipse(mouseX+3,mouseY,10,7)
  }
  
}

function tentacle_blink(){
  
  
  // for(i = frameCount; i % 50 != 0; i++){
  //   fill(120, 10, 68);
  //   circle(160, 400, 50); 
  // }
  
//   fill(120, 10, 68);
//   circle(160, 400, 50); 
//   fill('white');
//   circle(160, 400, 40-frameCount); 
//   fill(0);
//   circle(160, 400, 30-frameCount);
  
  
}

function locate_man(){
  if (pmouseX - mouseX <0){
    push()
    scale(-1,1)
    draw_man()
    pop()
  }
  else{
    draw_man()
  }
  
}