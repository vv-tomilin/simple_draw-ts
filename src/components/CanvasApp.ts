import Shape from "./Shapes/Shape";
import Rectangle from "./Shapes/Rectangle";
import Circle from "./Shapes/Circle";
import Pencil from "./Shapes/Pencil";
import { ToolType } from "../types/toolbarTypes";
import { BackgroundColor } from "../types/commonTypes";

export default class CanvasApp {
  private shapes: Shape[] = [];
  private isDrawing: boolean = false;
  private currentShape: Shape | null = null;
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d")!;
  }

  startDrawing(
    currentTool: string | null,
    x: number,
    y: number,
    fillColor: BackgroundColor | null,
    borderColor: BackgroundColor | null,
    lineWidth: number
  ): void {
    if (!this.isDrawing) {
      this.isDrawing = true;
    }

    switch (currentTool) {
      case "RECTANGLE":
        this.currentShape = new Rectangle(x, y, ToolType.RECTANGLE, "", fillColor!, lineWidth);
        break;
      case "RECTANGLE_FILL_ONLY":
        this.currentShape = new Rectangle(
          x,
          y,
          ToolType.RECTANGLE_FILL_ONLY,
          fillColor!,
          borderColor!,
          lineWidth
        );
        break;
      case "RECTANGLE_OUTLINE_FILL":
        this.currentShape = new Rectangle(
          x,
          y,
          ToolType.RECTANGLE_OUTLINE_FILL,
          fillColor!,
          borderColor!,
          lineWidth
        );
        break;
      case "CIRCLE":
        this.currentShape = new Circle(x, y, ToolType.CIRCLE, "", fillColor!, lineWidth);
        break;
      case "CIRCLE_FILL_ONLY":
        this.currentShape = new Circle(
          x,
          y,
          ToolType.CIRCLE_FILL_ONLY,
          fillColor!,
          borderColor!,
          lineWidth
        );
        break;
      case "CIRCLE_OUTLINE_FILL":
        this.currentShape = new Circle(
          x,
          y,
          ToolType.CIRCLE_OUTLINE_FILL,
          fillColor!,
          borderColor!,
          lineWidth
        );
        break;
      case "PENCIL":
        this.currentShape = new Pencil(x, y, fillColor!, lineWidth);
        break;
    }

    if (this.currentShape && this.context !== null) {
      this.currentShape.draw(this.context);
    }
  }

  continueDrawing(currentShape: Shape | null, x: number, y: number): void {
    if (this.isDrawing) {
      if (currentShape instanceof Rectangle) {
        currentShape.setDimensions(x, y);
      }

      if (currentShape instanceof Circle) {
        currentShape.setRadius(x, y);
      }

      if (currentShape instanceof Pencil) {
        currentShape.addPoint({ x, y });
      }

      if (this.currentShape && this.context !== null) {
        this.currentShape.draw(this.context);
      }
    }

    this.drawShapes();
  }

  stopDrawing(): void {
    if (this.isDrawing) {
      this.isDrawing = false;
    }

    if (this.currentShape !== null) {
      this.shapes.push(this.currentShape);
      this.currentShape = null;
    }

    console.log(this.shapes);
  }

  private drawShapes(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let shape of this.shapes) {
      shape.draw(this.context);
    }

    if (this.currentShape) {
      this.currentShape.draw(this.context);
    }
  }

  getCurrentShape(): Shape | null {
    return this.currentShape;
  }
}
