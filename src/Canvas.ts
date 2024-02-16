export default class Canvas {
  private element: HTMLDivElement;

  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("canvas");
    document.body.appendChild(this.element);
  }

  
}
