function theCursor(xP, yP, size, color){
  fill(color);
  circle(xP, yP, size);
}

function thePath(){
  for(let i = 0; i < xp.length; i++){
      let valY = yp[i];
      let valX = xp[i];
      
      //fills in the color
      if(xp[i] >= 400 && yp[i] >= 400){
        //bottom right
          cRed = map(valY, 0, 800, 0, 255);
          cGreen = map(valX, 0, 800, 0, 255);
          fill(cRed, 0, cGreen)
      }else if(xp[i] <= 400 && yp[i] >= 400){
        //bottom left
          cBlue = map(valY, 0, 800, 0, 255);
          cRed = map(valX, 400, 800, 0, 255);
          fill(cRed, cBlue, 0);
      }else if(xp[i] >= 400 && yp[i] <= 400){
        //top right
          cBlue = map(valY, 0, 400, 0, 255);
          cGreen = map(valX, 0, 800, 0, 255);
          fill(0, cBlue, cGreen);
      } else if(xp[i] <= 400 && yp[i] <= 400){
        //top left
          cBlue = map(valX, 0, 400, 0, 255);
          cRed = map(valY, 0, 800, 0, 255);
          cGreen = map(valX, 0, 800, 0, 255);
          fill(cRed, cBlue, cGreen);
      }
      //^color 
      noStroke()
      //if(isHit(xp[i], yp[i]) == false){
        circle(xp[i], yp[i], cSize);
      //}
    
      
  }
      
  
      if(millis() - start >= 1000)
        {afterImg = false;
        xp = [];
        yp = [];
        }
}