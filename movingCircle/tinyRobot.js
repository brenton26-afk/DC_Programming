function tinyRobot(X, Y, S) {
  let circleSize = S;
  let squareRatio = 0.5;
  let x = X;
  let y = Y;
  let circleRadius = circleSize / 2;
  let squareSize = circleRadius * squareRatio;
  let squareY = y - circleRadius + squareSize / 2;

  let eyeRatio = 0.3;
  let eyeSize = squareSize * eyeRatio;

  let neckRatio = 0.2;
  let neckHeight = squareSize * neckRatio;

  stroke(0);
  strokeWeight(1);

  push();

  fill("red");
  ellipse(x, y, circleSize);
  noFill();

  rectMode(CENTER);

  fill("white");
  square(x, squareY + squareSize / 2, squareSize);
  noFill();

  fill("black");
  circle(x - squareSize / 4, squareY + squareSize / 2, eyeSize); // left eye
  circle(x + squareSize / 4, squareY + squareSize / 2, eyeSize); // right eye

  // make the neck
  strokeWeight(0.5);
  fill("white");
  rect(x, squareY + squareSize + neckHeight / 2, squareSize * 0.8, neckHeight); // neck
  noFill();

  let bodyRatio = 2.5; // ratio of body to circle
  let bodyWidth = (circleSize * 1.5) / 4;
  let bodyHeight = bodyWidth * 0.7 * 2;
  let bodyY = y + circleRadius - neckHeight - bodyHeight / 2;

  fill("white");
  rect(x, bodyY, bodyWidth, bodyHeight);

  // arms
  rect(x + bodyWidth / 2, bodyY - 5, bodyWidth / 4.5, bodyHeight - 10);
  rect(x - bodyWidth / 2, bodyY - 5, bodyWidth / 4.5, bodyHeight - 10);

  pop();
}
