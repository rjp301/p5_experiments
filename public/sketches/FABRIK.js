
/**
 * Simple 2D point
 */
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distOther(other) {
    const dx = other.x - this.x;
    const dy = other.y - this.y;
    return Math.sqrt(dx ** 2 + dy ** 2);
  }
}

/**
 * Calculate position of points to maintain length
 * @param {Point} head Leading point of stick
 * @param {Point} tail Trailing point of stick
 * @param {Point} tgt Target
 */
function reach(head, tail, tgt) {
  const c_dist = tail.distOther(head);
  const s_dist = tail.distOther(tgt);
  const scale = c_dist / s_dist;

  const newTail = new Point(
    tgt.x + (tail.x - tgt.x) * scale,
    tgt.y + (tail.y - tgt.y) * scale
  );

  return [tgt, newTail];
}


const segments = [10, 30, 50, 70, 90].map(i => new Point(i, 50));

function setup() {
  createCanvas(600,600);
  fill(255);
  
}

function draw() {
  background(51);
  let tgt = new Point(mouseX, mouseY);
  for (let i = 0; i < segments.length - 1; i++) {
    const r = reach(segments[i], segments[i + 1], tgt);
    segments[i] = r[0];
    tgt = r[1];
  }
  segments[segments.length - 1] = tgt;

  segments.forEach(i => {
    circle(i.x, i.y, 10);
  });
    
}