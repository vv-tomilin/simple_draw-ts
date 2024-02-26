import { ToolType } from "../../types/commonTypes";
import Shape from "./Shape";

export default class Rectangle extends Shape {
  private width: number;
  private height: number;
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
    this.width = 0;
    this.height = 0;
  }

  draw(context: CanvasRenderingContext2D): void {
    if (this.toolType === ToolType.RECTANGLE) {
      context.strokeStyle = this.borderColor;
      context.lineWidth = this.lineWidth;
      context.strokeRect(this.x, this.y, this.width, this.height);
    }

    if (this.toolType === ToolType.RECTANGLE_FILL_ONLY) {
      context.fillStyle = this.fillColor;
      context.fillRect(this.x, this.y, this.width, this.height);
    }

    if (this.toolType === ToolType.RECTANGLE_OUTLINE_FILL) {
      context.fillStyle = this.fillColor;
      context.fillRect(this.x, this.y, this.width, this.height);

      context.strokeStyle = this.borderColor;
      context.lineWidth = this.lineWidth;
      context.strokeRect(this.x, this.y, this.width, this.height);
    }
  }

  setDimensions(x: number, y: number): void {
    this.width = x - this.x;
    this.height = y - this.y;
  }
}
