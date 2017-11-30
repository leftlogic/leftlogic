const colors = [
  '234,109,0',
  '219,64,0',
  '224,73,0',
  '224,78,0',
  '229,95,0',
  '228,100,0',
  '229,101,0',
];

const size = 10;

export default class Dot {
  constructor(ctx, x, y) {
    this.x = x;
    this.y = y;
    this.color = colors[(Math.random() * colors.length) | 0];

    this.level = 1;
    this.direction = 1;
    this.ctx = ctx;

    this.draw();
  }

  draw() {
    const { ctx, x, y, direction, color } = this;
    ctx.save();
    this.level += 0.1 * direction;
    if (this.level < 0.01) {
      this.level = 0;
    }
    ctx.fillStyle = `rgba(${color}, ${this.level})`;

    ctx.fillRect(
      ((x / size) | 0) * size,
      ((y / size) | 0) * size,
      size - 1,
      size - 1
    );
    ctx.restore();
  }
}
