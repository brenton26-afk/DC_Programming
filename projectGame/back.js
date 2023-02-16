function hills(X, Y){
  fill("white")
  stroke(1)
  rect(X, Y , 100, 300);
}

function isHit(X, Y){
  if(X > 200 && X < 300 && Y < 300 && Y > 0){
    console.log(X + " and " + Y)
    return true;
  } else{
    //console.log(X)
    return false;
    
  }
  //clear();
 // background(0);
  //text("Done", 400, 400)
  
}

function ResetB(){
  background(220)
  //hills(200, 0)
}