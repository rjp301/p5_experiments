class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(other) {
    return new Vector(this.x + other.x, this.y + other.y);
  }
}


class Point {
  constructor() {
    this.position = new Vector();
    this.prevPosition = new Vector();
    this.locked = false;
  }

}

class Line {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
    this.length = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
  }
}

let points = [
  new Point(10, 10),
  new Point(20, 10),
  new Point(30, 10),
  new Point(40, 10),
  new Point(50, 10)
];

function setup() {
  createCanvas(600,600);
  background(0);
}

function draw() {

}