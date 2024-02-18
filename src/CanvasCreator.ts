import { BackgroundColor } from "./types/commonTypes";

export default class CanvasCreator {
  private canvas: HTMLCanvasElement = document.createElement("canvas") as HTMLCanvasElement;
  private width: number;
  private height: number;
  private appElement: HTMLDivElement;
  private background: string;

  constructor(
    width: number,
    height: number,
    appElement: HTMLDivElement,
    bacground: BackgroundColor
  ) {
    this.width = width;
    this.height = height;
    this.appElement = appElement;
    this.background = bacground;
  }

  create() {
    this.canvas.id = "canvas";
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.backgroundColor = this.background;
    this.appElement.appendChild(this.canvas);
  }

  getCanvas() {
    return this.canvas;
  }
}
