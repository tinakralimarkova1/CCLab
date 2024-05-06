
//import { totalScore } from './quiz.js';




eyes = [];


oValue = 0;
changeO = false;
checkGone = false;


created1 = false;

function setup() {
    let canvas = createCanvas(2016, 1153);
    canvas.parent("BadCanvasContainer");
    
    totalScore = getItem('totalScore');
    totalScore = totalScore *-1;
    eyeCounter = totalScore;
  // console.log(totalScore);
   
  }
  


function draw() {

  background(138, 14, 55);
  texts = getItem('bad');
  //totalScore = getItem('totalScore');
  // fill(110, 103, 240,5);
  // rect(50,250,1700,130,20);
  
  // for(i = 0; i < texts.length; i++){
  //   console.log(i)
  //   console.log(texts[i]);
  // }

  //noStroke();
  // fill(72, 140, 55);
  // rect(0,800,windowWidth,windowHeight-800);

  // eye1 = new eye(300, 500);
  // eye1.display();
  //console.log(totalScore);

  if(created1 === false){
    for(i = 0; i <totalScore; i++){
      //console.log(totalScore);
      eyes[i] = new eye(random(0, 2000), random(100, 700));
    }
    created1 = true;
    
  }
  
  // flower1 = new Flower();
  // flower1.display();

  for(i = 0; i < eyes.length; i++){
    eyes[i].display();
    eyes[i].checkClick(mouseX, mouseY);
    
  


    
  }

  if(CheckAll(eyes) === true){
    for(i = 0; i < eyes.length; i++){
      eyes[i].scary = true;
    }

  }

  

  
  
  // if (changeO === true) {
  //   //circle(mouseX, mouseY, 10);
  //   //console.log(oValue);
  //   for (i = 0; i < eyes.length; i++) {
  //     if(mouseX > eyes[i].x-40 && mouseX < eyes[i].x+40 && mouseY > eyes[i].y - 40 && mouseY < eyes[i].y+40){

  //         eyeCounter--;
  //         eyes[i].blink();


        
  //     }

  // }
  // }
  // for(i = 0; i < eyes.length; i++){
  //   eyes[i].display();
  //   eyes[i].update();
    
  //  // eyes[i].update();
  // }
  



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

  console.log(eyeCounter);

  if(eyeCounter <= 0){
    
    


    for(i = 0; i < texts.length; i++){

      if(texts[i] === 'angryFriend' || texts[i] === 'tiktok' ){
        textSize(40);
        
        fill("white");

        text("You are the type of person who posts on the internet without considering its effects on others", 100, 100);
      }
      
      if(texts[i] === 'familyVacation' || texts[i] === 'house' || texts[i] === 'cookies' ){
        //eyes.push(new eye(random(0, 2000), random(100, 700)));

        // fill(110, 103, 240,5);
        // rect(50,250,1700,130,20);

        strokeWeight(4);
        //strokeColor("red");

        textSize(40);
        //noStroke();
        

        fill("white");

        text("You are the type of person who uses the internet without considering how public the information is.", 100, 300);
        
      }

      if(texts[i] === 'tv' || texts[i] === 'movie'){

        textSize(40);
        fill("white");

        text("You are the type of person who uses the internet gullibly, not realizing you might be getting scammed", 100, 400);
      
      }

      if(texts[i] === 'meme' || texts[i] === 'linkedin' || texts[i] === 'tweet'){

        textSize(40);

        fill("white"); 
        text("You are the type of person lets internet interactions impact your real life", 100, 500);


      }

      textSize(70);
      fill(129, 227, 170);
      text("And remember, they are always watching you.", 350, 950);


    }



  }

  


  
  




  
  
  
  


}

function CheckAll(array){

  for(i = 0; i < array.length; i++){
    if(array[i].blink === false){
      return false;
    }
  }
  eyeCounter = 0;
  return true;
  
}



function mouseClicked() {
  changeO = true

}


// class Flower {
//   constructor(x,y) {
//     this.x = x;
//     this.y = y;
//     this.opacity = 255;
  
//   }

//   display() {
//   //   fill(11, 77, 26);
//   //   rect(this.x-5, this.y, 10, 100);
  
//   // // Petals
//   // fill(255, 204, 0);
//   // translate(this.x /4, this.y/4);
//   // for (let i = 0; i < 10; i++) {
//   //   ellipse(this.x,this.y, 20, 30);
//   //   rotate(PI/5);
//   // }
  
//   // // Center
//   // fill(255, 0, 0);
//   // ellipse(0, 0, 50, 50);


//   fill(11, 77, 26, this.opacity);
//   rect(this.x-5, this.y, 10, 100);
  
//   fill(245, 209, 66, this.opacity);
//   ellipse(this.x,this.y+15,20,30);
//   ellipse(this.x,this.y-15,20,30);
  
//   ellipse(this.x+15,this.y,30,20);
//   ellipse(this.x-15,this.y,30,20);
  
//   circle(this.x+15,this.y-15,20);
//   circle(this.x-15,this.y-15,20);
//   circle(this.x-15,this.y+15,20);
//   circle(this.x+15,this.y+15,20);
  
  
  
//   fill(230, 39, 9, this.opacity);
//   circle(this.x,this.y,20);



//   }

//   flowerClicked(oValue){

//       this.y -= oValue/4;
//       this.opacity-= oValue *1.7;

//       if(this.opacity <= 0){
//         changeO = false;
//         flowerCounter --;
//         oValue = 0;
//         makeEye();
        
//       }
//     }
   



// }

// function makeEye(){
//   eyes.push(new eye(random(0, 2000), random(100, 700)));

// }

class eye{
  constructor(x,y){
    this.x = x;
    this.y = y;
    
   
    this.line = line(this.x, this.y, mouseX, mouseY);
    this.bTouch = false;
    this.blink = false;
    this.scary = false;
    
  }

  display(){

    
   

    // if(this.clicked === false){
    //   stroke(255, 8, 32);
    //   strokeWeight(3);
    //   this.line;

    // }
    if (this.blink === true){
      fill(0);
      ellipse(this.x,this.y,100,80);
     

    }
    else{
      fill(255, 255, 255);
    ellipse(this.x,this.y,100,80);
    fill(0, 0, 0);
    circle(this.x,this.y,50);
      strokeWeight(3);
      stroke(255, 8, 32);
      line(this.x, this.y, mouseX, mouseY);
    }

    if(this.scary === true){
      fill(255, 0, 0);
      circle(this.x, this.y, 80);

    }

      

  }

  checkClick(mX, mY){
    let d = dist(this.x, this.y, mX, mY);
    if(d < 100/2){
      this.bTouch = true;
        if(mouseIsPressed){
          this.blink = true;
          
        }
        
    }
    else
    {

      this.bTouch = false;
      
    }
  }



  // update(){
  //   this.x += random(-10, 10);
  //   this.y += random(-10, 10);
  // }

  

  

}