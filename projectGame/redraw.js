let start;
let cSize = 15;
let cTime;

let xp = [];
let yp = [];

let showImg = false;
let afterImg = false;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  fill("red")
  
  
  if(showImg == true){
    circle(mouseX, mouseY, cSize)
  }
  
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



