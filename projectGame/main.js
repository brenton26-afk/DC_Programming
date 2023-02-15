let start;
let cSize = 50;
let cTime;

let xp = [];
let yp = [];

let showImg = false;
let afterImg = false;

let cRed = 255;
let cBlue = 255;
let cGreen = 255;



function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  //hills(200, 0);
  //shows the "cursor" as you move the mouse across the canvas
  if(showImg == true){
    theCursor(mouseX, mouseY, cSize, "red");
  }
  
  //shows the path of the cursor during the mouse being dragged
  if(afterImg == true){
    thePath();
  }
}




  //cRed = map(val, 0, 800, 0, 255);
  //cBlue = map(val, 0, 800, 0, 255);
  //cGreen = map(val, 0, 800, 0, 255);