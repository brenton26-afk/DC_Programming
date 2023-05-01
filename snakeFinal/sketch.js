let snakeX = [];
let snakeY = [];

let snake = [];
let head = 350;

let snakeHead;

function preload() {
  snakeHead = loadImage("snakeHead.png");
}
let pillX = [400, 700, 1000, 1300, 1600, 1900];
let pillLen = [];
let gap = 220;

let playButton;
function setup() {
  createCanvas(800, 800);
  background(100);

  playButton = createButton("Play");
  playButton.size(100, 50);
  playButton.position(350, 375);
  playButton.mousePressed(change);

  startScreen();
}

let pillSpeed = 0;
let ease = pillSpeed / 10;
let canPlay = false;
let done = false;
function draw() {
  if (done == true) {
    background("red");
    push();
    textSize(50);
    fill("black");
    strokeWeight(0);
    text("YOU CRASHED AND DIED!", 85, 250);
    pop();
  }
  if (canPlay == true) {
    background(0, 0, 0);
    ease = pillSpeed / 10;

    // this creates the circles and displays them
    for (let i = 1; i <= snakeX.length - 1; i++) {
      strokeWeight(40);
      stroke(71, 248, 88);
      line(snakeX[i], snakeY[i], snakeX[i - 1], snakeY[i - 1]);
    }

    // for(let i = 1; i <= snakeX.length - 1; i++){
    //   push()
    //   fill("blue")
    //   noStroke();
    //   strokeWeight(1)
    //   circle(snakeX[i], snakeY[i], 10)
    //   noFill()
    //   pop()
    // }

    //pillars
    for (let i = 0; i <= pillX.length - 1; i++) {
      pillX[i] = pillX[i] - pillSpeed;
      if (pillX[i] <= -40) {
        pillX[i] = 1900;
      }
    }

    // the game is over
    for (let i = 0; i <= pillX.length - 1; i++) {
      for (let sn = snakeY.length - 1; sn >= 0; sn--) {
        if (
          pillX[i] + 40 >= snakeX[sn] &&
          pillX[i] <= snakeX[sn] &&
          pillX[i] >= snakeX[sn - 1]
        ) {
          if (
            snakeY[sn] - 20 <= pillLen[i] ||
            snakeY[sn] - 20 >= pillLen[i] + gap
          ) {
            pillSpeed = 0;
            clear();
            gameOver();
          }
        }
      }
    }

    /* Draws the head with no green in the mouth */
    noStroke();
    fill("black");
    if (snakeY.length > 0) {
      circle(242, snakeY[snakeY.length - 1], 30);
    }
    image(snakeHead, 220, snakeY[snakeY.length - 1] - 20, 40, 40); //-20 to the Y and X

    if (mouseX > 0.01 && mouseY > 0.01) {
      //this will only start moving the snake when the mouse is on the screen
      snakeY[snakeY.length - 1] =
        (mouseY - snakeY[snakeY.length - 1]) * ease + snakeY[snakeY.length - 1]; //head of the snake
      for (let i = snakeY.length - 2; i >= 0; i--) {
        //moves the body of the snake
        snakeY[i] = (snakeY[i + 1] - snakeY[i]) * ease + snakeY[i];
      }
    }
    fill("white");
    Pillars();

    timing(); //timer in the top right corner
    textSize(50);
    fill("red");
    if (mins == 0) {
      text(seconds, 725, 75);
    }else if (seconds < 10){
      text(mins + ": 0" + seconds, 675, 75);
    }else{
      text(mins + ": " + seconds, 675, 75);
    }
    noFill();
  }
}

/* Timer */
let start = 0;
let seconds = 0;
let mins = 0;
function timing() {
  if (millis() - start >= 500) {
    if (seconds < 59) {
      seconds++;
    } else if (seconds == 59) {
      mins++;
      if (mins > 0 && mins < 6) {
        pillSpeed = mins + 1;
      }
      seconds = 0;
    }
    start = millis();
  }
}

function startScreen() {
  background("lightgreen");
  textSize(60);
  text("SNAKE GAME!", 200, 200);
  textSize(25);
  text("PRESS PLAY TO START THE GAME.", 195, 300);
}
function Pillars() {
  for (let i = 0; i <= pillX.length - 1; i++) {
    rect(pillX[i], 0, 40, pillLen[i]);
    rect(pillX[i], pillLen[i] + gap, 40, 800 - pillLen[i] - gap);
  }
}
function gameOver() {
  clear();
  done = true;

  seconds = 0;
  mins = 0;
  start = 0;
  canPlay = false;
  playButton.show();
  head = 350;
  snakeX = [];
  snakeY = [];
}
function change() {
  if (canPlay == false) {
    done = false;
    clear();
    canPlay = true;
    playButton.hide();
    pillSpeed = 2;
    pillX = [400, 700, 1000, 1300, 1600, 1900];
    // create the circles as the snakes body
    for (let i = 55; i <= 235; i = i + 10) {
      append(snakeX, i);
      append(snakeY, head);
    }
    for (let i = 0; i <= pillX.length - 1; i++) {
      pillLen[i] = random(1, 799 - gap);
    }
  }
}

/* https://imgbin.com/free-png/snake-head */
