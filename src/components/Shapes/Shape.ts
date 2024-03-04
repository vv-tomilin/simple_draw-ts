export default class Shape {
  private static counter: number = 0;
  private id: number;
  protected x: number;
  protected y: number;

  constructor(x: number, y: number) {
    this.id = Shape.counter++;
    this.x = x;
    this.y = y;
  }

  draw(context: CanvasRenderingContext2D): void {
    console.log(`Drawing shape ${this.id} at ${this.x} and ${this.y}`);
  }
}
