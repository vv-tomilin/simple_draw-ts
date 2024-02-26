import Shape from "./Shape";

interface Point {
  x: number;
  y: number;
}

export default class Pencil extends Shape {
  private color: string;
  private lineWidth: number;

  private points!: Point[];

  constructor(x: number, y: number, color: string, lineWidth: number) {
    super(x, y);
    this.color = color;
    this.lineWidth = lineWidth;
    this.points = [{ x, y }];
  }

  draw(context: CanvasRenderingContext2D): void {
    context.strokeStyle = this.color;
    context.lineWidth = this.lineWidth;
    context.beginPath();
    context.moveTo(this.points[0].x, this.points[0].y);

    for (let i = 1; i < this.points.length; i++) {
      context.lineTo(this.points[i].x, this.points[i].y);
    }

    context.stroke();
  }

  addPoint(point: Point): void {
    this.points.push(point);
  }
}
