let face;
let eye;
let neck;
let arm;
let middle;
let outline;

function robot(X, Y) {
  strokeWeight(10);
  good();
  //console.log(mouseX);
  //console.log(mouseY);
  //circle(mouseX, mouseY, 10)
  //260 75

  head(X, Y);
  eyes(X, Y);
  body(X, Y);

  fill("green");
  line(X + 100, Y, X + 125, Y - 25);
  circle(X + 125, Y - 25, 15);
  line(X, Y, X - 25, Y - 25);
  circle(X - 25, Y - 25, 15);

  arms(X, Y);

  //circle(X -)

  // angleMode(DEGREES)
  // noFill()
  // strokeWeight(10)
  // stroke(hand)
  // translate(335, 313)
  // //square(0,0, 25)
  // rotate(115)
  // angleMode(RADIANS)
  // arc(X - 150, Y - 75, 50, 50, 0, PI + HALF_PI);
  // //330, 300
  //   rotate(1)
  // arc(210, 5, 50, 50, -0.5, PI + QUARTER_PI);
  // stroke("black")
}

function eyes(xp, yp) {
  fill(eye);
  circle(xp + 75, yp + 25, 30);
  circle(xp + 25, yp + 25, 30);
}

function head(xp, yp) {
  fill(face);
  //150, 75
  square(xp, yp, 100);
  fill(neck);
  rect(xp + 25, yp + 100, 50, 50);
}

function body(xp, yp) {
  fill(middle);
  rect(xp - 25, yp + 125, 150, 200);
}

function arms(xp, yp) {
  //275
  //200
  fill(arm);

  angleMode(DEGREES);
  rotate(-5);
  //150, 75
  rect(xp + 107, yp + 148, 30, 125);
  rotate(10);
  rect(xp - 38, yp + 113, 30, 125);
}

function bad() {
  eye = "red";
  face = "black";
  neck = "gray";
  arm = "darkred";
  hand = "red";
  middle = "gray";
}

function good() {
  eye = "green";
  face = "lightgreen";
  arm = "turquoise";
  neck = "green";
  hand = "blue";
  middle = "lightblue";
}
