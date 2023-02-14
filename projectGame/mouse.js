function mouseDragged(){
  if(afterImg == false){
    showImg = true;
    append(xp, mouseX);
    append(yp, mouseY);
  }
}

function mouseReleased(){
  showImg = false;
  afterImg = true;
  start = millis();
  
}