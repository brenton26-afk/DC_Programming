let images = [];
let img = 0;
let file;
let pics = 3;

function preload(){
  //images[0] = loadImage('download.png')
  for(let i = 0; i < pics; i++){
   file = "img" + i + ".png";
   images[i] = loadImage(file);
  }
}



let openGallery = false;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220)
  
  if(openGallery == false){
    startScreen();
  }
  //console.log(images[0])
  if(openGallery == true){
    background(images[img])
    fill("grey")
    circle(700, 700, 100)    //next
    circle(100, 700, 100)    //back
    fill("white")
    textSize(25)
    text("Next", 675, 710)
    text("Back", 75, 710)
  }
  
}


function startScreen(){
  background("blue")
  textSize(70)
  text("Photo Gallery", 200, 400)
  rect(325, 425, 150, 50)
  textSize(20)
  text("Start Looking!", 340, 455)
}

function mousePressed(){
  if(mouseX >= 325 && mouseX <= 475 && mouseY >= 425 && mouseY <= 475){
    openGallery = true;
  }
  if(openGallery == true){
    if(mouseX >= 650 && mouseX <= 750 && mouseY >= 650 && mouseY <= 750){
      if(img == pics - 1){
        img = 0
      }else{
        img++;
      }
    }
    if(mouseX >= 50 && mouseX <= 150 && mouseY >= 650 && mouseY <= 750){
      if(img == 0){
        img = images.length;
      }
    }
  }
}