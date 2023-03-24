let robot, dino;
function preload(){
  robot = loadImage('pixil-frame-0 (1).png');    //https://www.istockphoto.com/illustrations/robot-illustrations
  dino = loadImage('pixil-frame-0.png');    //https://www.redbubble.com/shop/dino+clip+art
}

let dx, dy;    //dino x and y position
let rx, ry;    //robot x and y position

let floor = 600;
let dinoY = 0;

function setup() {
  createCanvas(800, 800);
  background(240);
}

let robotX = 600;
let dinoX = 50;

function draw(){
  background(240)
  ground();
  
  drawDino( dinoX, floor);
  drawRobot( robotX, floor);
  
  if(keyIsDown(RIGHT_ARROW)){
    dinoX = dinoX + 3
  }
  if(keyIsDown(LEFT_ARROW)){
    dinoX = dinoX - 3;
  }    
  
}

function mouseClicked(){
  //console.log(get(mouseX, mouseY))
}

function keyPressed(){
  console.log("KEY: " + keyCode)
  
  if(keyCode == 32){
    console.log("It works" + true)
  }
  
}
