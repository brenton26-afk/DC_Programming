//change difficulty of the game
  let theTime = 500;
  let csize = 125;
  let diff = 100;

function setup() {
  createCanvas(800, 800);
}

  let numx;
  let numy;
  let xPos = 100;
  let yPos = 100;
  let reStart = false;
  let score = 0;
  let lives = 3;
  let ins = csize/2;
  let start = 0;
  let direction = 0;
  let xbutton = 350;
  let ybutton = 500;
  let canGameStart = false;

  let gameMode = "Easy"
  
  let cy = 510
  let c1x = 310
  let c2x = 390
  let c3x = 470
  let cs = 70


function draw() {
  //background(220);
  if(canGameStart == false){
    startScreen();
  }else if (canGameStart == true){
    timer(theTime);  
  }
  
  //gameTime();
  
  //console.log("timer ran")
  
  if(lives <= 0){
    gameOver()
  }
  
  // console.log("X: " + mouseX)
  // console.log("Y: " + mouseY)
  
}

function mouseClicked(){
  console.log("Click")
  
  //score and lives counter
  if(mouseY <= yPos + ins && mouseY >= yPos - ins && mouseX >= xPos - ins && mouseX <= xPos + ins){
    score = score + 1;
  }else if(canGameStart == true){
    lives = lives - 1;
  }
  
  //restart button
  if(mouseX >= xbutton && mouseX <= xbutton + 100 && mouseY >= ybutton && mouseY <= ybutton + 50 && reStart == true){
    score = 0
    lives = 3
    console.log("works")
    //gameTime()
  }
  
  //quit button
  if(mouseX >= xbutton && mouseX <= xbutton + 100 && mouseY >= 700 && mouseY <= 750){
    canGameStart = false;
    lives = 3
    score = 0
  }
  
  //starting page
  if(canGameStart == false){
    
    //start button
    if(mouseX >= 310 && mouseX <= 490 && mouseY >= 330 && mouseY <= 380){
      canGameStart = true;
    }
    
    
    //game modes for the acutal game
    if(mouseX >= c1x - cs/2 && mouseX <= c1x + cs/2 && mouseY >= cy - cs/2 && mouseY <= cy + cs/2){
      gameMode = "Easy"
      theTime = 250
      cize = 100
    }
    if(mouseX >= c2x - cs/2 && mouseX <= c2x + cs/2 && mouseY >= cy - cs/2 && mouseY <= cy + cs/2){
      gameMode = "Medium"
      theTime = 100
      csize = 100
      diff = 50
    }
    if(mouseX >= c3x - cs/2 && mouseX <= c3x + cs/2 && mouseY >= cy - cs/2 && mouseY <= cy + cs/2){
      gameMode = "Hard"
      theTime = 30
      csize = 75
      diff = 50
    }
    
  }
  
}

function gameOver(){
  background("red")
  fill("white")
  textSize(100)
  text("GAME OVER", 90, 400)
  reStart = true;
  fill("white")
  
  rect(xbutton, ybutton, 100, 50)
  
  fill("black")
  textSize(20)
  text("Restart", 369, 530)
  
  textSize(20)
  text("Your Score: " + score, 345, 485)
  
  fill("white")
  rect(350, 700, 100, 50)
  fill("black")
  text("I QUIT", 370, 730)
}

function gameTime(){
  background(220)
  textSize(50)
  text(lives, 50, 75)
  text("Score: " + score, 600, 75)
  fill("red")
  
  numx = random(0,10)
  if(numx < 5 && xPos <= 800 - ins){
    
    direction = random(0, diff)
    if(xPos + direction <= 800 - ins){
      xPos = xPos + direction;
    }
    
  } else if(numx >= 5 && xPos >= ins){
    
    direction = random(0, diff)
    if(xPos - direction >= ins){
      xPos = xPos - direction;
    }
    
  }
  
  numy = random(0,10)
  if(numy < 5 && yPos <= 800 - ins){

    direction = random(0, diff)
    if(yPos + direction <= 800 - ins){
      yPos = yPos + direction;
    }
    
  } else if(numy >= 5 && yPos >= ins){
 
    direction = random(0, diff)
    if(yPos - direction >= ins){
      yPos = yPos - direction;
    }
    
  }
  
  circle(xPos, yPos, csize)
  
}

function timer(runT){
  
  //console.log("timer is running")
  //console.log("time: " + start)
  //console.log(millis() - start)
  if(millis() - start >= runT){
    //console.log("here")
    gameTime()
    start = millis()
  }
}

function startScreen(){
  background("lightblue")
  fill("black")
  textSize(75)
  text("Start Game", 210, 225)
  
  fill("lightgray")
  rect(310, 330, 180, 50)
  
  fill("black")
  textSize(30)
  text("Start", 365, 365)
  
  text("Difficulty: " + gameMode, 290, 450)
  

  
  fill("lightgray")
  circle(c1x, cy, cs)
  circle(c2x, cy, cs)
  circle(c3x, cy, cs)
  
  fill("black")
  textSize(20);
  text("Easy", 290, 515)
  textSize(15)
  text("Medium", 365, 515)
  textSize(20)
  text("Hard", 450, 515)
  
}


