import { ToolType } from "../../types/commonTypes";
import Shape from "./Shape";

export default class Circle extends Shape {
  private radius: number;
  private toolType: ToolType;
  private fillColor: string;
  private borderColor: string;
  private lineWidth: number;

  constructor(
    x: number,
    y: number,
    type: ToolType,
    fillColor: string,
    borderColor: string,
    lineWidth: number
  ) {
    super(x, y);
    this.toolType = type;
    this.fillColor = fillColor;
    this.borderColor = borderColor;
    this.lineWidth = lineWidth;
    this.radius = 0;
  }

  draw(context: CanvasRenderingContext2D): void {
    if (this.toolType === ToolType.CIRCLE) {
      context.strokeStyle = this.borderColor;
      context.lineWidth = this.lineWidth;

      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      context.stroke();
      context.closePath();
    }

    if (this.toolType === ToolType.CIRCLE_FILL_ONLY) {
      context.fillStyle = this.fillColor;
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      context.fill();
      context.closePath();
    }

    if (this.toolType === ToolType.CIRCLE_OUTLINE_FILL) {
      context.fillStyle = this.fillColor;
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      context.fill();

      context.strokeStyle = this.borderColor;
      context.lineWidth = this.lineWidth;

      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      context.stroke();

      context.closePath();
    }
  }

  setRadius(x: number, y: number): void {
    const dx = x - this.x;
    const dy = y - this.y;
    this.radius = Math.sqrt(dx * dx + dy * dy);
  }
}
