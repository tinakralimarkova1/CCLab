/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new Kifla(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class Kifla {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    //..
    //..
    //..
    this.move = 100
    this.right = true
    this.righthand = 80
    this.lefthand = 80
    this.rotate_right = 0
    this.rotate_left =0
    this.eye = 0
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour

    if(this.move >= 110){
      this.right = false
    }
    if(this.move <= 90 ){
      this.right = true
    }

    if (this.right == true){
      this.move += 1
      this.righthand--
      this.lefthand ++
      this.rotate_right -= 0.005
      this.rotate_left += 0.005
      this.eye ++
      
      
    }
    if (this.right == false){
      this.move -= 1
      this.righthand++
      this.lefthand--
      this.rotate_right += 0.005
      this.rotate_left -= 0.005
      this.eye--
      
    }

    

    
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
      //x = 30
      noStroke()
  
      
      
      //hands
      
      
      
      
      
      //legs
      push()
      rotate(this.rotate_right)
      fill(201, 44, 154)
      rectMode(CENTER)
      rect(90,148,10,50)
      pop()
      
      push()
      fill(201, 44, 154)
      rotate(this.rotate_left)
      rectMode(CENTER)
      rect(110,148,10,50)
      pop()
      
      //shoes
      push()
      rotate(this.rotate_right)
      fill(19, 112, 10)
      rectMode(CENTER)
      rect(85,170,20,10)
      pop()
      
      push()
      fill(19, 112, 10)
      rotate(this.rotate_left)
      rectMode(CENTER)
      rect(115,170,20,10)
      pop()
      //hands
      fill(92, 162, 237)
      rect(55,this.righthand,30,10)
      rect(115,this.lefthand,30,10)
      
      fill(235, 221, 190)
      circle(55,this.righthand +5,12)
      circle(145,this.lefthand + 5,12)
      
      //body
      
      fill(92, 162, 237)
      rectMode(CENTER)
      rect(100,100,40,60,10,10,0,0)
      //head
      fill(235, 221, 190)
      circle(this.move,60,30)
      //hair
        fill(176, 25, 25)
        arc(this.move,60,40,40,PI,0)
        fill(224, 128, 128)
        arc(this.move,70,10,10,0,PI)

      //face 
      push()
      fill("white")
      circle(this.move,62,10 + this.eye)
      fill(random(255),random(255),random(255))
      circle(this.move,62,5 + this.eye)
      pop()

      






    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/