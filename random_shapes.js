let xp = 200;
let yp = 200;

function setup() {
  createCanvas(400, 400);
  background(220);
  
  
  strokeWeight(5)
  fill("white");
  circle(xp - 97, yp - 50, 123);
  
  
  stroke("white")
  fill("red");
  circle(xp + 150, yp - 100, 300);
  
  
  fill("red");
  circle(xp - 5, yp + 135, 250);
  
  
  fill("darkred");
  circle(xp - 60, yp - 50, 50);
  
  
  fill("darkred");
  circle(xp + 35, yp - 75, 111);
  
  fill(220)
  triangle(150, 150, 350, 200, 300, 300);
  
  fill("darkorange");
  circle(xp + 100, yp + 25, 83);
  
  
  fill("darkred");
  circle(xp - 75, yp + 100, 80);
  
  
  fill("orange");
  circle(xp + 15, yp - 25, 20);
  arc(250, 135, 80, 80, 0, PI + HALF_PI + QUARTER_PI);
  arc(275, 250, 80, 80, 3, PI + PI + HALF_PI);
  
  fill("yellow");
  circle(xp - 45, yp + 45, 83);
  
  
  fill("yellow");
  circle(xp + 25, yp - 85, 50);
  
  
  fill("orange");
  circle(xp - 75, yp + 45, 43);
  
  
  
}
