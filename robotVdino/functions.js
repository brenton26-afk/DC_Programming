function drawDino( x, y){
  dx = x;
  dy = y - 115 + dinoY;
  image(dino, dx, dy, 150, 150);
}

function drawRobot( x, y){
  rx = x;
  ry = y - 120;
  image(robot, rx, ry, 100, 150);
}

function ground(){
  fill(0)
  rect(0, floor, width, height - 600)
}

function jumped(){
  
 
}