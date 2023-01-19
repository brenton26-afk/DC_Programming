function setup() {
  createCanvas(400, 400);
}


let face
let eye
let neck
let arm
let middle
let outline


function draw() {
   if(mouseX > 200){
    background("darkorange")
    bad()
  }else{
    background("yellow")
    good()
  }
  //console.log(mouseX);
  //console.log(mouseY);
  circle(mouseX, mouseY, 10)
  //260 75
  

  head()
  eyes()
  body()
  
 
  fill("green")
  line(250, 75, 275, 50)
  circle(275, 50, 15)
  line(150, 75, 125, 50)
  circle(125, 50, 15)

  arms()
  
  angleMode(DEGREES)
  noFill()
  strokeWeight(10)
  stroke(hand)
  translate(335, 313)
  //square(0,0, 25)
  rotate(115)
  angleMode(RADIANS)
  arc(0, 0, 50, 50, 0, PI + HALF_PI);
  //330, 300
    rotate(1)
  arc(210, 5, 50, 50, -0.5, PI + QUARTER_PI);
  stroke("black")
  

  
  
}




function eyes(){
  fill(eye)
  circle(225, 100, 30)
  circle(175, 100, 30)
  
}

function head(){
  fill(face)
  square(150, 75, 100)
  fill(neck)
  rect(175, 175, 50, 50)
  
}

function body(){
  fill(middle)
  rect(125 , 200, 150, 200)
}


function arms(){
  //275
  //200
  fill(arm)
  
  angleMode(DEGREES)
  rotate(-5)
  rect(257, 223, 30, 125)
  rotate(10)
  rect(112, 188, 30, 125)
}


function bad(){
  eye = "red"
  face = "black"
  neck = "gray"
  arm = "darkred"
  hand = "red"
  middle = "gray"
}

function good(){
  eye = "green"
  face = "lightgreen"
  arm = "turquoise"
  neck = "green"
  hand = "blue"
  middle = "lightblue"
}

