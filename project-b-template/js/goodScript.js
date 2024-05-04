
//import { totalScore } from './quiz.js';



flowers = [];
eyes = [];


oValue = 0;
changeO = false;
checkGone = false;


created = true;

function setup() {
    let canvas = createCanvas(2016, 1153);
    canvas.parent("GoodCanvasContainer");
    
    totalScore = getItem('totalScore');
    flowerCounter = totalScore;
    //console.log(totalScore);
   
  }
  


function draw() {

  background(150, 214, 205);
  texts = getItem('good');
  totalScore = getItem('totalScore');
  // fill(110, 103, 240,5);
  // rect(50,250,1700,130,20);
  
  // for(i = 0; i < texts.length; i++){
  //   console.log(i)
  //   console.log(texts[i]);
  // }

  noStroke();
  fill(72, 140, 55);
  rect(0,800,windowWidth,windowHeight-800);

  if(created === true){
    for(i = 0; i <totalScore; i++){
      //console.log(totalScore);
      flowers[i] = new Flower(random(0, 2000), random(900, 1000));
    }
    created = false;

  }
  
  // flower1 = new Flower();
  // flower1.display();

  for(i = 0; i < flowers.length; i++){
    flowers[i].display();


    
  }

  

  
  
  if (changeO === true) {
    //circle(mouseX, mouseY, 10);
    //console.log(oValue);
    for (i = 0; i < flowers.length; i++) {
      if(mouseX > flowers[i].x-40 && mouseX < flowers[i].x+40 && mouseY > flowers[i].y - 40 && mouseY < flowers[i].y+40){
        if(oValue >=255){
          oValue = 0;
          changeO = false;
          
          //flowerCounter --;
          
          
        
        }
        else{

          oValue++
          flowers[i].flowerClicked(oValue);
          
        }

        
      }

  }
  }
  for(i = 0; i < eyes.length; i++){
    eyes[i].display();
    eyes[i].update();
    
   // eyes[i].update();
  }
  



  //ending 
  
  // for(i = 0; i < flowers.length; i++){
  //   if (flowers[i].this.opacity <= 0) {
  //     break;
  //   }
  //   else{
  //     checkGone = true;
  //   }
    
  // }
  //console.log(checkGone);

  console.log(flowerCounter);

  if(flowerCounter <= 0){
    
    


    for(i = 0; i < texts.length; i++){

      if(texts[i] === 'appritiationText' || texts[i] === 'congrats' || texts[i] === 'books'){
        textSize(40);
        fill("purple");

        text("You are the type of person who uses the internet to connect with like-minded people and keep \nin touch with loved ones.", 100, 100);
      }
      
      if(texts[i] === 'dog' || texts[i] === 'concert' || texts[i] === 'kangaroo' ){
        //eyes.push(new eye(random(0, 2000), random(100, 700)));

        fill(110, 103, 240,5);
        rect(50,250,1700,130,20);

        strokeWeight(4);
        //strokeColor("red");

        textSize(40);
        //noStroke();
        

        fill("purple");

        text("You are the type of person who uses the internet to share and find interesting information, \nbut also are careful of what you share.", 100, 300);
        
      }

      if(texts[i] === 'news' || texts[i] === 'loans'){

        textSize(40);
        fill("purple");

        text("You are the type of person who uses the internet to fight for what's right and important.", 100, 400);
      
      }

      if(texts[i] === 'map' || texts[i] === 'zoom'){

        textSize(40);

        fill("purple"); 
        text("You are the type of person who uses the internet to make your life easier.", 100, 500);


      }

      textSize(70);
      fill(129, 227, 170);
      text("But remember, they are still watching you.", 350, 950);


    }



  }

  


  
  




  
  
  
  


}



function mouseClicked() {
  changeO = true

}


class Flower {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.opacity = 255;
  
  }

  display() {
  //   fill(11, 77, 26);
  //   rect(this.x-5, this.y, 10, 100);
  
  // // Petals
  // fill(255, 204, 0);
  // translate(this.x /4, this.y/4);
  // for (let i = 0; i < 10; i++) {
  //   ellipse(this.x,this.y, 20, 30);
  //   rotate(PI/5);
  // }
  
  // // Center
  // fill(255, 0, 0);
  // ellipse(0, 0, 50, 50);


  fill(11, 77, 26, this.opacity);
  rect(this.x-5, this.y, 10, 100);
  
  fill(245, 209, 66, this.opacity);
  ellipse(this.x,this.y+15,20,30);
  ellipse(this.x,this.y-15,20,30);
  
  ellipse(this.x+15,this.y,30,20);
  ellipse(this.x-15,this.y,30,20);
  
  circle(this.x+15,this.y-15,20);
  circle(this.x-15,this.y-15,20);
  circle(this.x-15,this.y+15,20);
  circle(this.x+15,this.y+15,20);
  
  
  
  fill(230, 39, 9, this.opacity);
  circle(this.x,this.y,20);



  }

  flowerClicked(oValue){

      this.y -= oValue/4;
      this.opacity-= oValue *1.7;

      if(this.opacity <= 0){
        changeO = false;
        flowerCounter --;
        oValue = 0;
        makeEye();
        
      }
    }
   



}

function makeEye(){
  eyes.push(new eye(random(0, 2000), random(100, 700)));

}

class eye{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.w = x;
    this.h = y;
  }

  display(){
    fill(255, 255, 255);
    ellipse(this.x,this.y,70,50);
    fill(0, 0, 0);
    circle(this.x,this.y,30);
  }

  update(){
    this.x += random(-10, 10);
    this.y += random(-10, 10);
  }

  

}