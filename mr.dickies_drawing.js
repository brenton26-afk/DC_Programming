let img;

function preload(){
   img = loadImage('img/download.png');
}

function setup() {
  createCanvas(600, 400);
  background (0, 60, 200);
  //background(img)
 
  
  // Call several more sun beams
  // Modify your sunbeam function so they are
  // in different locations across the top of the screen
  sunBeam(0);
  sunBeam(50);
    fishie(100, 50, "orange");
  sunBeam(69);
  sunBeam(150);
  fishie(300, 200, "orange");
  sunBeam(136);
  image(img, 400, 150, 100, 100);
  sunBeam(186);
  

  
  sunBeam(200);
  
  drawSeagrass(50, "green");
  drawSeagrass(80, "red");
  drawSeagrass(220, "green");
  drawSeagrass(140, "yellow");
  drawSeagrass(450, "green");
  drawSeagrass(380, "turquoise");
  drawSeagrass(520, "green");
  drawSeagrass(100, "orange");

  
  
}

// Add a parameter to allow you to draw sun beams
// at different locations across the top of the screen
function sunBeam(xp){
  
  stroke(255, 100);
  strokeWeight(10);
  
  line(xp, 0, 130 + xp, 200);
  
}

function drawSeagrass(xPos, color){
  
  stroke(color);
  strokeWeight(5);
  fill(0, 0);
  
  arc (xPos, 400, 15, 40, HALF_PI, PI + HALF_PI);
  arc (xPos, 360, 15, 40, PI + HALF_PI, HALF_PI);
  arc (xPos, 320, 15, 40, HALF_PI, PI + HALF_PI);
  arc (xPos, 280, 15, 40, PI + HALF_PI, HALF_PI);  
  
}

function fishie(xps, yps, color){
   fill(color);
  strokeWeight(0);
  triangle(xps, 
           yps, 
           xps + 75, 
           yps - 25, 
           xps + 75, 
           yps + 25);
  
 
  ellipse(xps, yps, 100, 25);
  noFill();
}