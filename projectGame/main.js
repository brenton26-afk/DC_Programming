let start;
let cSize = 200;
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
  
  //shows the "cursor" as you move the mouse across the canvas
  if(showImg == true){
    fill("red");
    circle(mouseX, mouseY, cSize)
  }
  
  //shows the path of the cursor during the mouse being dragged
  if(afterImg == true){
   
    for(let i = 0; i < xp.length; i++){
      let valY = yp[i];
      let valX = xp[i];
      
      //fills in the color
      if(xp[i] >= 400 && yp[i] >= 400){
        //bottom right
          cRed = map(valY, 0, 800, 0, 255);
          cGreen = map(valX, 0, 800, 0, 255);
          fill(cRed, 0, cGreen)
      }else if(xp[i] <= 400 && yp[i] >= 400){
        //bottom left
          cBlue = map(valY, 0, 800, 0, 255);
          cRed = map(valX, 400, 800, 0, 255);
          fill(cRed, cBlue, 0);
      }else if(xp[i] >= 400 && yp[i] <= 400){
        //top right
          cBlue = map(valY, 0, 400, 0, 255);
          cGreen = map(valX, 0, 800, 0, 255);
          fill(0, cBlue, cGreen);
      } else if(xp[i] <= 400 && yp[i] <= 400){
        //top left
          cBlue = map(valX, 0, 400, 0, 255);
          cRed = map(valY, 0, 800, 0, 255);
          cGreen = map(valX, 0, 800, 0, 255);
          fill(cRed, cBlue, cGreen);
      }
      //^color 
      noStroke()
      circle(xp[i], yp[i], cSize);
  }
      if(millis() - start >= 1000)
        {afterImg = false;
        xp = [];
        yp = [];}
  }
  
}




  //cRed = map(val, 0, 800, 0, 255);
  //cBlue = map(val, 0, 800, 0, 255);
  //cGreen = map(val, 0, 800, 0, 255);