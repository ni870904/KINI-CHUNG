class Particle {
  constructor(x, y, bx, by) {
    this.x = x;
    this.y = y;
    this.basex = bx;
    this.basey = by;
    this.bases = 16;
    this.size = 16;
  }
  show() {
    fill(246, 2, 243);
    // ellipse(this.x, this.y, this.size, this.size);
		textSize(this.size/2);
		text("●",this.x,this.y)
  }
  move() {
      let d = dist(this.x, this.y, mouseX, mouseY);
      if (d < 100) {
        this.x -= (mouseX - this.basex) / 12;
        this.y -= (mouseY - this.basey) / 2;
        this.size -= (mouseY - this.bases) / 200;
      } else {
        this.x -= (this.x - this.basex) / 12;
        this.y -= (this.y - this.basey) / 12;
        this.size -= (this.size - this.bases) / 10;

      }
  }
}