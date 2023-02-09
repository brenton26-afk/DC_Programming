let start;
let cSize = 15;
let cTime;

let xp = [];
let yp = [];

let showImg = false;
let afterImg = false;

let cRed = 0;
let cBlue = 0;
let cGreen = 0;


function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  
  let value = mouseY;
  cRed = map()
  
  
  fill(cRed, cBlue, cGreen)
  
  //shows the "cursor" as you move the mouse across the canvas
  if(showImg == true){
    circle(mouseX, mouseY, cSize)
  }
  
  //shows the path of the cursor during the mouse being dragged
  if(afterImg == true){
    
    for(let i = 0; i < xp.length; i++){
   
        circle(xp[i], yp[i], cSize);
      
  
    }
    
    if(millis() - start >= 1000){
      afterImg = false;
      xp = [];
      yp = [];
    }
  }
  
}



