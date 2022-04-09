// https://www.youtube.com/watch?v=QHEQuoIKgNE

class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 10;
  }

  render() {
    stroke(255);
    strokeWeight(2);
    noFill();
    circle(this.x, this.y, this.r * 2);
  }

  grow() {
    if (!this.touchEdges() && !this.touchOthers(circles)) this.r += 1;

  }

  touchEdges() {
    return (
      this.x + this.r >= width ||
      this.x - this.r <= 0 ||
      this.y + this.r >= height ||
      this.y - this.r <= 0
    );
  }

  touchOthers(circles) {
    for (let c of circles) {
      const d = dist(this.x, this.y, c.x, c.y);
      if (d <= this.r + c.r) return true;
    }
    return false;
  }

  within(x, y) {
    const d = dist(this.x, this.y, x, y);
    return d < this.r;
  }
}




let circles = [];
let width = 800;
let height = 600;

function newCircle() {
  const x = random(width);
  const y = random(height);
  const result = new Circle(x, y);

  if (circles.length === 0) return result;

  for (let c of circles) {
    if (!c.within(x, y)) {
      return result;
    }
  }
}

function setup() {
  createCanvas(width, height);
}

function draw() {
  background(0);
  
  const newC = newCircle();
  if (newC) circles.push(newC);

  for (let c of circles) {
    c.render();
    c.grow();
  }

}