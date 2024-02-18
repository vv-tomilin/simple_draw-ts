import Shape from "./Shapes/Shape";
import Rectangle from "./Shapes/Rectangle";

export default class CanvasApp {
  private shapes: Shape[] = [];
  private isDrawing: boolean = false;
  private currentShape: Shape | null = null;
  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  startDrawing(currentTool: string | null, x: number, y: number): void {
    if (!this.isDrawing) {
      this.isDrawing = true;
    }

    if (currentTool === "RECTANGLE") {
      this.currentShape = new Rectangle(x, y);
    }

    const context = this.canvas.getContext("2d");

    if (this.currentShape && context !== null) {
      this.currentShape.draw(context);
    }
  }

  continueDrawing(currentShape: Shape | null, x: number, y: number): void {
    if (this.isDrawing) {
      const context = this.canvas.getContext("2d");

      //* Очищаем canvas перед каждым новым кадром
      context?.clearRect(0, 0, this.canvas.width, this.canvas.height);

      if (currentShape instanceof Rectangle) {
        currentShape.setDimensions(x, y);
      }

      if (this.currentShape && context !== null) {
        this.currentShape.draw(context);
      }
    }
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

  getCurrentShape(): Shape | null {
    return this.currentShape;
  }
}
