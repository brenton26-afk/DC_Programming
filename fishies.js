

function setup() {
  createCanvas(400, 400);
}

let swimming = 450;

 function draw(){ 
  
  background("blue");
  noStroke()
  
  let xp = 100;
  let yp = 50;
   
   //make the body of the fish 100 wide and 25 high
   //the first point of the triangle is in the exact middle of the fish (x-cord, y-cord)
   //the second point is the x-cord plus 75 and y-cord minus 25
   //the third point is the same x-cord plus 75 and the same y-cord plus 25
  if(swimming <= -75){
    swimming = 450
  }
   fill("turquoise")
   fishie(swimming, 100, "yellow");
   fishie(swimming, 200, "red");
   fishie(swimming, 250, "turquoise");
   swimming = swimming - 1;
   swimming = swimming - 1;
   swimming = swimming - 1;
   swimming = swimming - 1;
   swimming = swimming - 1;
   
   
  fill("darkorange")
  triangle(xp, 
           yp, 
           xp + 75, 
           yp - 25, 
           xp + 75, 
           yp + 25)
  
  fill("orange")
  ellipse(xp, yp, 100, 25);
  
  fill("darkorange")
  triangle(xp + 100, 
           yp + 100, 
           xp + 75 + 100, 
           yp - 25 + 100, 
           xp + 75 + 100, 
           yp + 25 + 100)
  
  fill("orange")
  ellipse(xp + 100, yp + 100, 100, 25);
  
  fill("darkorange")
  triangle(xp + 200, 
           yp + 250, 
           xp + 75 + 200, 
           yp - 25 + 250, 
           xp + 75 + 200, 
           yp + 25 + 250)
  
  fill("orange")
  ellipse(xp + 200, yp + 250, 100, 25);
 
  




}

function fishie(xps, yps, color){
  triangle(xps, 
           yps, 
           xps + 75, 
           yps - 25, 
           xps + 75, 
           yps + 25);
  
  fill(color);
  ellipse(xps, yps, 100, 25);
}

