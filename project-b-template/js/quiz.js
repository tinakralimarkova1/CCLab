// document.getElementById('GoodResult').addEventListener('click', function() {
//     window.location.href = 'good.html'; 
//   });
  
  document.getElementById('submitButton').addEventListener('click', function() {
    if(totalScore>=0){
      window.location.href = 'good.html';
    }
    else{

      window.location.href = 'bad.html'; 
    }
    
    
  })


var totalScore = 0;

var text1 = document.getElementById('appritiationText');
var text2 = document.getElementById('angryFriend');
var text3 = document.getElementById('congrats');
var text4 = document.getElementById('tiktok');
var text5 = document.getElementById('familyVacation');
var text6 = document.getElementById('kangaroo');
var text7 = document.getElementById('meme');
var text8 = document.getElementById('map1');
var text9 = document.getElementById('concert');
var post1 = document.getElementById('dog');
var post2 = document.getElementById('house');

var email1 = document.getElementById('linkedIn');
var email2 = document.getElementById('elections');
var email3 = document.getElementById('tweet');
var email4 = document.getElementById('book');
var email5 = document.getElementById('zoom');
var email6 = document.getElementById('news');
var email7 = document.getElementById('tv');
var email8 = document.getElementById('cookies');




// for(let i = 0; i < checkArray.length; i++){
//   if(checkArray[i].checked === true){
//     AddMessage(checkArray[i],i);
//   }
// }

let dogPost = false;
let housePost = false;
let familyVacationPost = false;
let tiktokPost = false;

text1.addEventListener('change', function() {
  if (text1.checked) {
    totalScore += text1.value;
    AddMessage(text1, "Friend", "Thank you for the gift!!! I love it!");
  }
});

text2.addEventListener('change', function() {
  if (text2.checked) {
    totalScore += text2.value;
    AddMessage(text2, "Another Friend", "Can't believe you posted that, my coworkers saw it and made it into a meme. My boss was not happy.");
  }
});

text3.addEventListener('change', function() {
  if (text3.checked) {
    totalScore += text3.value;
    AddMessage(text3, "Other Friend", "I appriciate your friendshiip. Love you!");
  }
});

text4.addEventListener('change', function() {
  if (text4.checked) {
    totalScore += text4.value;
    AddMessage(text4, "Ex-coworker", "I know you don't work here anymore, but you just got a bunch of people fired. Hope you are happy \nwith your awareness raising.");
    tiktokPost = true;
    familyVacationPost = false;
    dogPost = false;
    housePost = false;
  
  }});

text5.addEventListener('change', function() {
  if (text5.checked) {
    totalScore += text5.value;
    AddMessage(text5, "Neighbor", "Hey, I came by your house to water your plants and the place was trashed. I think you got robbed...");
    familyVacationPost = true;
    tiktokPost = false;
    dogPost = false;
    housePost = false;
  }});

text6.addEventListener('change', function() {
  if (text6.checked) {
    totalScore += text6.value;
    AddMessage(text6, "New Friend", "That article was hilarous.");
}});

text7.addEventListener('change', function() {
  if (text7.checked) {
    totalScore += text7.value;
    AddMessage(text7, "Another Friend", "Is there a reason you liked a post that makes fun of my religion? I don't think we should be friends \nanymore.");
}});

text8.addEventListener('change', function() {
  if (text8.checked) { 
    totalScore += text8.value;
    AddMessage(text8, "Boss", "I have decided to give you a raise because of your impressive efforts and punctuality.");
  }
});
text9.addEventListener('change', function() {
  if (text8.checked) { 
    totalScore += text9.value;
    AddMessage(text9, "Old Friend", "That shirt is sick! Where did you get it from?");
  }
});

post1.addEventListener('change', function() {
  if (post1.checked) {
    totalScore += post1.value;
    dogPost = true;
    familyVacationPost = false;
    tiktokPost = false;
    housePost = false;
  }
});

post2.addEventListener('change', function() {
  if (post2.checked) {
    AddEmail(post2, "user_234523", "I know where you live.")
    totalScore += post2.value;
    housePost = true;
    familyVacationPost = false;
    dogPost = false;
    tiktokPost = false;
  }
});

email1.addEventListener('change', function() {
  if (email1.checked) {
    totalScore += email1.value;
    AddEmail(email1, "LinkedIn", "Alice got yet another promotion... What are you doing with your life?");
  }
}); 

email2.addEventListener('change', function() {
  if (email2.checked) {
    totalScore += email2.value;
    AddEmail(email2, "NewsNow!", "Elections coming up! Vote for your believes");  
  }
});

email3.addEventListener('change', function() {
  if (email3.checked) {
    totalScore += email3.value;
    AddEmail(email3, "user DontMessWithMe sent you a message", "Your way of thinking blows my mind. You say that #$%# again, ill leak your IP address.");  
  }
});

email4.addEventListener('change', function() {
  if (email4.checked) {
    totalScore += email4.value;
    AddEmail(email4, "BooksForAll", "user_11727 has recommended a book you might like!");  
  }
});

email5.addEventListener('change', function() {
  if (email5.checked) {
    totalScore += email5.value;
    AddEmail(email5, "CCL&Co", "Dear applicant, we are happy to offer you a position at CCL&Co.");  
  }
});

email6.addEventListener('change', function() {
  if (email6.checked) {
    totalScore += email6.value;
    AddEmail(email6, "MustKnowNews", "An increase in concern regarding student loans has led to governmental actions.");  
  }
});

email7.addEventListener('change', function() {
  if (email7.checked) {
    totalScore += email7.value;
    AddEmail(email7, "tv!", "tbd");  
  }
});

email8.addEventListener('change', function() {
  if (email8.checked) {
    totalScore += email8.value;
    AddEmail(email8, "Account Security", "Suspicious log in from Hai Phong, Vietnam. Please check your account.");  
  }
});













let checkArray = [text1, text2, text3];
let textContent = ['hiiiiii', 'byeeee',"Did you see Linkeidn?"];
let names = ["Friend 1", "Friend 2", "Friend 3"];
let messages = [];
let moving = false;
let moveVar = 0;
let moverVa2 = 0;
let emails = [];
function setup() {
  let messageCanvas = createCanvas(750, 900);
  messageCanvas.parent("media");
}

function draw() {
  background("purple");
  
  //messages
  noStroke();
  fill(149, 184, 191);
  rect(5,5,740,190,10);

  //posts
  push();
  translate(0,200);
  fill("white");
  rect(5,5,500,390,10);
  rect(520,5,220,390,10);
  beginShape();
  fill("purple");
  vertex(550, 70);
  bezierVertex(550 - 30 / 2, 70 - 30 / 2, 550 - 30, 70 + 30 / 3, 550, 70 + 30);
  bezierVertex(550 + 30, 70 + 30 / 3, 550 + 30 / 2, 70 - 30 / 2, 550, 70);
  endShape(CLOSE);
  
  if(dogPost === true){
    dog();
    
  }
  if(housePost === true){
    
    house();
  }
  if(tiktokPost === true){
    
    tiktok();
  }
  if(familyVacationPost === true){
    
    familyPic();
  }
  
  fill('purple');
  textSize(20);
  text("Likes: 58", 580,90);
  
 
  ellipse(550,140,40,30);
  triangle(550,150,565,145,570,160);
  text("Comments: 12",580,150);

  




  pop();

  

  //messages
  
  for (let i = 0; i < messages.length; i++) {
      messages[i].display();
  }
  if(messages.length >1 && messages[0].y1 <= 95){
    moveVar++;
    console.log(messages.length)
    messages[0].moveDown(moveVar);
  }
  else{
    moveVar = 0;
  }

  if(messages.length >2 ){
    messages.splice(0,1);
  }


  // emails
  push();
  translate(0,600);
  fill(209, 206, 240);
  rect(5,5,740,290,10);
  
  fill(122, 121, 140, 80);
  rect(90,15,650,70,10);

  
  //email icon
  push();
  fill("red");
  square(15,20,60);
  
  fill("white");
  triangle(20,25,70,25,45,50);
  triangle(20,30,40,50,20,70);
  triangle(70,30,50,50,70,70);
  triangle(20,75,40,55,60,75);
  triangle(30,75,50,55,70,75);
  
  
  
  pop();
  pop();
  textSize(30);
  fill(255);
  text("Search in Inbox...", 100,640);





  for (let i = 0; i < emails.length; i++) {
    emails[i].display();
  }
  if(emails.length >1 && emails[0].y1 <= 95){
    moveVar2++;
    console.log(emails.length)
    emails[0].moveDown(moveVar2);
  }
  else{
    moveVar2 = 0;
  }

  if(emails.length >2 ){
    emails.splice(0,1);
  }
  






  
   

}

    
  
  
  function AddMessage(input, name, textContent){
    if(input.checked === true){
      
      messages.push(new Message(name, textContent))  
      console.log(input);
    }
  }

  /// emails 





  function AddEmail(input, sender, emailContent){
    if(input.checked === true){
      
      emails.push(new Email(sender, emailContent))  
      console.log(input);
    }
    
  
  



}




class Email{
  
  constructor(Sender, EmailMessage) 
  {
    this.EmailMessage = EmailMessage;
    this.Sender = Sender;
    this.y1 = 12;
    
  }
  
  display()
  {
    
    fill("white");
    rect(10,this.y1 +685,730,85,10);

    fill("black");
    textSize(20);
    text(this.Sender, 100, this.y1+710);

    fill("red")
    circle(50,this.y1+728,70)
    
    fill("white")
    circle(50,this.y1+728,60)


    textSize(16);
    textAlign(LEFT, TOP);
    fill("black");
    text(this.EmailMessage, 100, this.y1+735);

    

    //////
    // fill("white");
    // rect(10,12+85,730,85,10);
    
    // fill("red")
    // circle(50,140,70)
    
    // fill("white")
    // circle(50,140,60)
    

    // fill("black");
    // textSize(20);
    // text("hello", 100, 12+10 + 85);

    
    // textSize(16);
    // textAlign(LEFT, TOP);
    // fill("black");
    // text("hello there", 100, 12+35 + 85);
    
  }
  
  moveDown(mover)
  {
    if(this.y1 <= 95){
      this.y1+= mover
      
      }
    
    
  }

  getTextY(){
    return this.y1
  }
}

// email 

class Message{
  
  constructor(Name, TextMessage) 
  {
    this.TextMessage = TextMessage;
    this.Name = Name;
    this.y1 = 12;
    
  }
  
  display()
  {
    fill("white");
    rect(10,this.y1,730,85,10);

    fill("black");
    textSize(20);
    text(this.Name, 20, this.y1+10);


    textSize(16);
    textAlign(LEFT, TOP);
    fill("black");
    text(this.TextMessage, 20, this.y1+35);
    
    
    
  }
  
  moveDown(mover)
  {
    if(this.y1 <= 95){
      this.y1+= mover
      
      }
    
    
  }

  getTextY(){
    return this.y1
  }
}










// posts
function dog(){
  
  fill(22, 125, 57);
  rect(10,10,490,380,10);
  
  fill(73, 194, 227);
  rect(10,10,490,200,10,10,0,0);
  push();
  translate(50,0);
  fill(186, 149, 86);
  ellipse(200, 300, 120, 150);
  
  fill(107, 78, 28);
  rect(210,260,20,70,20);
  
  fill(107, 78, 28);
  ellipse(220,320,30);
  
  fill(107, 78, 28);
  rect(170,260,20,70,20);
  
  fill(107, 78, 28);
  ellipse(180,320,30);
  
  ellipse(170,370,50,30);
  ellipse(235,370,50,30);
  
  // Draw head
  fill(186, 149, 86);
  ellipse(200, 200, 100, 100);
  
  // Draw ears
  fill(186, 149, 86);
  triangle(150, 170, 180, 130, 200, 170);
  triangle(250, 170, 220, 130, 200, 170);
  
  // Draw eyes
  fill(255);
  ellipse(180, 190, 20, 20);
  ellipse(220, 190, 20, 20);
  fill(0);
  ellipse(180, 190, 10, 10);
  ellipse(220, 190, 10, 10);
  
  // Draw nose
  fill(0);
  ellipse(200, 210, 10, 10);
  
  // Draw mouth
  noFill();
  stroke(0);
  arc(200, 220, 40, 20, 0, PI);
  
  fill("black");
  noStroke();
  textSize(16);
  text("username: Look at this cutie!",475,40);
  
  pop();
  
}

function house(){
  fill(22, 125, 57);
  rect(10,10,490,380,10);
  
  fill(73, 194, 227);
  rect(10,10,490,200,10,10,0,0);
  
  push();
  translate(0,-100);
  scale(1.3);
  
  fill(217, 171, 115);
  rect(100, 200, 200, 150);
  
  // Draw roof
  fill(200, 50, 50);
  triangle(80, 200, 320, 200, 200, 100);
  
  // Draw door
  fill(100, 60, 0);
  rect(175, 270, 50, 80);
  
  // Draw windows
  fill(181, 235, 231);
  rect(130, 220, 40, 40);
  rect(230, 220, 40, 40);
  
  fill("black");
  noStroke();
  textSize(12);
  text("username: Long awaited \nhouse tour!",410,100);
  
  pop();

}

function tiktok(){
  fill(181, 184, 235);
  rect(10,10,490,380,10);
  
  fill("black");
  rect(220,120,90,70,20,20,0,0,);
  
  fill(59, 144, 163);
  rect(210,230,110,160,20,20,0,0);
  
  fill(232, 214, 183);
  ellipse(265,170,80,100);
  rect(255,200,20,30);
  
  fill("black");
  circle(250,170,10);
  circle(280,170,10);
  
  fill('red');
  arc(265, 200, 40, 20, 0, PI);
  
  fill(0);
  rect(220,120,90,30,20,20,0,0,);
  
  
  fill(255);
  ellipse(110,100,180,100);
  
  triangle(140,120,170,120,200,180);
  
  fill(0);
  textSize(12);
  text("Storytime about the crazy\nthings that happen at your\nfavorite fastfood restaurant", 40,85);
  
  
  
  
  
}

function familyPic(){
  
  fill(250, 237, 152);
  rect(10,10,490,380,10);
  
  fill("blue");
  rect(10,100,490,160);
  
  fill(73, 194, 227);
  rect(10,10,490,200,10,10,0,0);
  
  fill(255, 255, 0); // Yellow color
  ellipse(250,100, 100, 100); // Sun's main circle
  
  fill(0);
  textSize(15);
  text("username: Whole fam pulled\nup to Mexico!",530,30);
  
  
  
}


    
    
    
  
  
  
  
  
  










  