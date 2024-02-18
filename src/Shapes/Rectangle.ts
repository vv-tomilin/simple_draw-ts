import Shape from "./Shape";

export default class Rectangle extends Shape {
  private width: number;
  private height: number;

  constructor(x: number, y: number) {
    super(x, y);
    this.width = 0;
    this.height = 0;
  }

  draw(context: CanvasRenderingContext2D): void {
    context?.fillRect(this.x, this.y, this.width, this.height);
  }

  setDimensions(x: number, y: number): void {
    this.width = x - this.x;
    this.height = y - this.y;
  }
}
