let start;
function setup() {
  createCanvas(400, 400);
  start = millis();
}

let blue = 0;
let interval = 500;

function draw() {
  background(220);
  
  
  //console.log(start)
  
  if(millis() - start >= interval){
    fill(random(0, 255), blue, random(0, 255))
    start = millis()
  }
  circle(200, 200, 200)
  
  if(blue >= 150){
    blue = 0;
  }
  blue = blue + 5;
  
}