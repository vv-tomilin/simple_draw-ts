import Shape from "./Shape";

export default class Circle extends Shape {
  private radius: number;

  constructor(x: number, y: number) {
    super(x, y);
    this.radius = 0;
  }

  draw(context: CanvasRenderingContext2D): void {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  }

  setRadius(x: number, y: number): void {
    const dx = x - this.x;
    const dy = y - this.y;
    this.radius = Math.sqrt(dx * dx + dy * dy);
  }
}
