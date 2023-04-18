function drawDino(x, y) {
  image(dino, x, y, 150, 150);
}

function moveDino() {
  dinoY = dinoY + dinoSpeed;
  dinoSpeed = dinoSpeed + dacc;

  if (dinoY > floor - 115) {
    dinoSpeed = 0;
    dinoY = floor - 115;
    jumps = 0;
    canJump = true;
  }

  if(dinoY <= 405 && dinoY >= 205){
    fast = 4;
  }else if(dinoY < 205 && dinoX <= 650){
    fast = 8
  }else{
    fast = 1.4
  }
  
  if (
    dinoY <= 405 &&
    dinoY >= 375 &&
    dinoX > platX[0] - 75 &&
    dinoX < platX[0] + 40
  ) {
    floor = 520;
    //console.log("plat")
  } else if (
    dinoY <= 305 &&
    dinoY >= 295 &&
    dinoX > platX[1] - 75 &&
    dinoX < platX[1] + 40
  ) {
    floor = 420;
  } else if (
    dinoY <= 205 &&
    dinoY >= 95 &&
    dinoX > platX[2] - 75 &&
    dinoX < platX[2] + 40
  ) {
    floor = 320;
  } else if(dinoY <= 135 &&
    dinoY >= 25 &&
    dinoX > 550 - 90 &&
    dinoX < 550 + 80){
    floor = 250
  } else {
    floor = 600;
  }
}

function drawRobot(x, y) {
  image(robot, x, y, 100, 150);
}

function ground() {
  fill(0);
  rect(0, 600, width, height - 600);
}

function platform() {
  fill("red");
  rect(platX[0], 520, 100, 10);
  rect(platX[1], 420, 100, 10);
  rect(platX[2], 320, 100, 10);
  rect(550, 250, 150, 10)
}

function robotPlat() {
  push();
  translate(robotX, 0);
  fill("green");
  rect(0, 520, 100, 10);
  rect(0, 420, 100, 10);
  rect(0, 320, 100, 10);
  rect(0, 220, 100, 10);
  noFill();
  pop();
}

function moveRobot() {
  robotY = robotY + robotSpeed;
  robotSpeed = robotSpeed + racc;

  if (robotY > rfloor - 120) {
    robotSpeed = 0;
    robotY = rfloor - 120;
    rjumps = 0
  }

  // if(chance > 9.8){
  //   robotSpeed = -20
  //   rfloor = 520
  // }
  
  if (robotY <= 405 && robotY >= 375) {
    rfloor = 520 + down;
  } else if(robotY <= 305 && robotY >= 295){
    rfloor = 420 + down;
  } else if(robotY <= 205 && robotY >= 195){
    rfloor = 320 + down;
  } else if(robotY <= 105 && robotY >= 0){
    rfloor = 220 + down;
  } else{
    rfloor = 600;
  }
  
}

function ded(){
  end = true
  playGame = false;
  background('darkred')
  button.show()
}

function win(){
  background('lightgreen')
  playGame = false
  end = true
  winner.show()
  button.show()
}
