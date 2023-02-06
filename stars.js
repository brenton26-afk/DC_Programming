

function setup() {
  createCanvas(400, 400);
  //background("black");
  //back()
  
  
}

let done = false;

function draw() {
    
  //fly(150, 300);
  //fly(200, 100);
  
  if(done == false){
    back()
  }
 

}

function back(){
  background("black");
  fill("yellow")
  for(let i = 0; i < random(25, 50); i++){
    star(random(1, 400), random(1, 400), 5, 20, 5);
  }
  noFill()
  done = true;
}

function fly(xPos, yPos){
  
  fill("white")
  let yP = yPos;
  let xP = xPos;
  

    
 
  
  triangle(xP, yP,
           xP + 35, yP - 25,
           xP + 35, yP + 25);
  rect(xP + 35, yP - 25, 100, 50);
  
  fill("gray")
  circle(xPos + 60, yPos, 30)
  
  fill("orange");
  triangle(xPos + 135, yPos - 25, 
           xPos + 170, yPos - 20,
           xPos + 135, yPos)
  
  triangle(xPos + 135, yPos - 15, 
           xPos + 170, yPos - 15,
           xPos + 135, yPos - 20)
  
  triangle(xPos + 135, yPos + 5, 
           xPos + 170, yPos + 5,
           xPos + 135, yPos + 20)
  
  triangle(xPos + 135, yPos + 10, 
           xPos + 170, yPos + 5,
           xPos + 135, yPos - 10)
  
  triangle(xPos + 135, yPos + 5, 
           xPos + 170, yPos - 5,
           xPos + 135, yPos - 10)
  
  triangle(xPos + 135, yPos , 
           xPos + 170, yPos,
           xPos + 135, yPos + 20)
  
  triangle(xPos + 135, yPos + 5, 
           xPos + 170, yPos + 14,
           xPos + 135, yPos + 25)
  
  noFill()
    
  

}

function mouseDragged(){
  clear()
  back() 
  fly(mouseX, mouseY);
  
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
 // console.log(cos(angle))
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    //console.log("First vertex: " + sx + ", " + sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
    //console.log("Second vertex: " + sx + ", " + sy);
}
  endShape(CLOSE);
}