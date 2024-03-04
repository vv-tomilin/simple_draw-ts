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
    context.lineCap = "round"; // Закругляем концы линии
    context.beginPath();

    if (this.points.length > 1) {
      context.moveTo(this.points[0].x, this.points[0].y);

      for (let i = 1; i < this.points.length - 2; i++) {
        const xc = (this.points[i].x + this.points[i + 1].x) / 2;
        const yc = (this.points[i].y + this.points[i + 1].y) / 2;
        context.quadraticCurveTo(this.points[i].x, this.points[i].y, xc, yc);
      }

      // Используем последние две точки для отрисовки последнего сегмента
      context.quadraticCurveTo(
        this.points[this.points.length - 2].x,
        this.points[this.points.length - 2].y,
        this.points[this.points.length - 1].x,
        this.points[this.points.length - 1].y
      );
    } else if (this.points.length === 1) {
      // Если у нас только одна точка, рисуем круглую точку
      context.arc(
        this.points[0].x,
        this.points[0].y,
        this.setRadius(this.points[0].x, this.points[0].y),
        0,
        2 * Math.PI
      );
    }

    context.stroke();
  }

  addPoint(point: Point): void {
    this.points.push(point);
  }

  private setRadius(x: number, y: number): number {
    const dx = x - this.x;
    const dy = y - this.y;

    return Math.sqrt(dx * dx + dy * dy);
  }
}
