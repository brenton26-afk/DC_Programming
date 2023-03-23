let robot, dino;
function preload(){
  robot = loadImage('robot.jpg');
  dino = loadImage('dino.jpg');
}

let back = 220;
let dx, dy;    //dino x and y position
let rx, ry;    //robot x and y position
function setup() {
  createCanvas(800, 800);
  background(back);
  ground()

}


function draw(){
  
  drawDino( 50, 50);
  drawRobot( 200, 200);
}

function ground(){
  fill(0)
  rect(0, 600, width, height - 600)
}

function drawDino( x, y){
  dx = x;
  dy = y;
  // image(dino, 100, 100, 75, 100)
  
  push();
  translate(dx, dy);
  dino.loadPixels();
  for (let i = 0; i < dino.width; i++) {
    for (let j = 0; j < dino.height; j++) {   
      let c = dino.get(i, j)      
      if(c[0] <= 255 && c[0] >= 200){
        dino.set(i, j, back)
      }
      
    }
  }
  dino.updatePixels();
  pop();
  image(dino, dx, dy, 150, 150);
}

function drawRobot( x, y){
  rx = x;
  ry = y;
  // image(dino, 100, 100, 75, 100)
  
  push();
  translate(rx, ry);
  robot.loadPixels();
  for (let i = 0; i < robot.width; i++) {
    for (let j = 0; j < robot.height; j++) {   
      let c = robot.get(i, j)
      if(c[0] <= 130 && c[0] >= 70 && c[1] <= 180 && c[1] >= 130 && c[2] <= 205 && c[2] >= 150){
        robot.set(i, j, back)
      }
      
    }
  }
  robot.updatePixels();
  pop();
  image(robot, rx, ry, 100, 150);
}

function mouseClicked(){
  console.log(get(mouseX, mouseY))
}
