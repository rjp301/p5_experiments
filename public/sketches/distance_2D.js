
let maxDistance;

function setup() {
  // Create the canvas
  const width = 720;
  const height = 400;
  maxDistance = dist(0, 0, width, height);

  createCanvas(width, height);
  noStroke();


}

function draw() {
  background(0);

  for (let i = 0; i <= width; i += 20) {
    for (let j = 0; j <= height; j += 20) {
      let size = dist(mouseX, mouseY, i, j);
      size = size / maxDistance * 100;
      ellipse(i, j, size, size);
    }
  }

  // put drawing code here
}
