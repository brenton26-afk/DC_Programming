let robot, dino;
let button, stomped, winner, hit;
let intro
function preload() {
  robot = loadImage("pixil-frame-0 (1).png"); //https://www.istockphoto.com/illustrations/robot-illustrations
  dino = loadImage("pixil-frame-0.png"); //https://www.redbubble.com/shop/dino+clip+art
}

let floor = 600;
let dinoY = 600;
let dinoSpeed = 0;
let jumps = 0;
let dacc = 1.3;
let canJump = true;

let robotY = 600;
let robotSpeed = 0;
let racc = 1.3;
let rfloor = floor;
let down = 0
let fast = 1.4

let playGame = false;
let end = false;

let filler = "Hello World!";

/* Make the random platform locations */
let platX = [];

function setup() {
  createCanvas(1000, 800);
  background(240);
  for (let i = 0; i < 3; i++) {
    if(i == 2){
      platX[i] = random(250, 400);
    }else{
      platX[i] = random(100, 400);
    }
  }
  
  button = createButton("START GAME")
  button.position(width/2 - 10 - 20, height/2)
  button.size(100, 50)
  button.mousePressed(change)
  

  intro = createElement('h5', "Hello! You are a dino who does not like the scary robot. You have to get to the robot" + " \nto make it stop shooting deadly lazers at you. You are slow dino but you can jump like crazy! The closer you get to the robot the more scared you are, so be careful! Don't let it stomp on your head!")
  // intro.center()
  intro.position(50, 75)
  intro.style('color','black')
  intro.hide()

  stomped = createElement('h1', "It looks like you were stomped on the head by a robot!")
  stomped.center()
  stomped.position(150, 250)
  stomped.style('color', 'white')
  stomped.hide()
  
  hit = createElement('h1', "You were hit by the robots DEADLY lazer!!")
  hit.center()
  hit.position(200, 250)
  hit.style('color', 'white')
  hit.hide()
  
  winner = createElement('h1', "YOU WON! You somehow made it to the robot unharmed!")
  winner.center()
  winner.position(125, 250)
  winner.style('color', 'white')
  winner.hide()
  
}

let robotX = 800;
let dinoX = 50;

let start = 0;
let shoot = false;
let laX = robotX;
let timer = 1000;

let chance = 1
let diff = 0

let rjumps = 0

let rand = 0


function draw() {
if(playGame == false && end == false){
  startScreen()
}else if(playGame == true){
  button.hide()
  
  background(240);
  ground();
  platform();

  // console.log(dinoX)
  drawDino(dinoX, dinoY);
  circle(dinoX, dinoY, 10);

  moveDino();
  robotPlat();
  drawRobot(robotX, robotY);
  circle(robotX, robotY, 10);
  moveRobot();

  /* move whatever object */
  if (keyIsDown(RIGHT_ARROW)) {
    dinoX = dinoX + fast;
  }
  if (keyIsDown(LEFT_ARROW)) {
    dinoX = dinoX - 4;
  }
  fill("red");
  laY = robotY
  rect(laX, laY + 50, 20, 5);
  noFill();
  laX = laX - diff;
  diff = diff + 0.1
  if (laX <= 0) {
    if (millis() - start >= timer) {
      laX = robotX;
      diff = 0
      start = millis() + 5500;
      timer = random(250, 1500);
    }
  }
  
  if(millis() - rand >= random(250, 2000) && laX < 10 && rjumps == 0){
    rjumps++;
    chance = random(1, 5)
    // console.log(chance)
    if(chance > 4.3){
      down = 100
    }else{
      down = 0
    }
    robotSpeed = -20;
    rand = millis()
  }

  fill(0, 255, 0, 100)
  rect(dinoX + 90, dinoY + 35, 45, 20)    //dino head hitbox
  rect(dinoX + 25, dinoY + 35, 80, 80)    //dino body hitbox
  fill(255, 0, 0, 100)
  rect(robotX + 35, robotY + 105, 35, 10)    //robot foot hitbox
  rect(robotX + 25, robotY + 35, 55, 50)    //robot body hitbox
  noFill()
  if(dinoX + 90 + 45 >= robotX + 25 && dinoX + 90 <= robotX + 25 + 55 && dinoY + 35 > robotY + 35 && dinoY + 35 + 20 < robotY + 35 + 50){
    console.log("You win the game")
    win()
  }
  
  // console.log(dinoY + 35)
  if(dinoX + 90 + 45 >= robotX + 35 && dinoX + 90 <= robotX + 35+35 && dinoY + 35 >= robotY + 105 && dinoY + 35 <= robotY + 115){
    console.log("You are ded")
    stomped.show()
    ded()
  }
  
  if(laX <= dinoX+25+80 && laX > 10 && laX >= dinoX+25 && laY+50 <= dinoY+35+80 && laY+50 >= dinoY+35){
  console.log("HIT")
    hit.show();
    ded()
}
  
}
}


function keyPressed() {
  // console.log("KEY: " + keyCode)

  if (keyCode == 32 && canJump == true) {
    // console.log("It works");
    canJump = false;
    if (jumps < 4) {
      dinoSpeed = -20;
      jumps++;  
    }
  }
  
  if(keyCode == 40){
    floor = 600;
  }
}

function startScreen(){
  background("lightblue")
  textSize(35)
    text("Hello! You are a dino who does not like the scary robot. \nYou have to get to the robot to make it stop shooting \ndeadly lazers at you. You are slow dino but you can jump \nlike crazy! The closer you get to the robot the more scared \nyou are, so be careful! Don't let it stomp on your head!", 50, 125)
}

function change(){
  stomped.hide()
  winner.hide()
  hit.hide()
  dinoX = 0
  if(playGame == false){
    playGame = true;
  }
}