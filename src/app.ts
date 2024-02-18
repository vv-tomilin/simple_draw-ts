import CanvasCreator from "./CanvasCreator";
import Toolbar from "./Toolbar";
import CanvasApp from "./CanvasApp";

import { BackgroundColor, ToolType } from "./types/commonTypes";

const tools: ToolType[] = [ToolType.RECTANGLE, ToolType.CIRCLE];

document.addEventListener("DOMContentLoaded", () => {
  const app: HTMLDivElement = document.getElementById("app") as HTMLDivElement;
  const canvasBackgroundColor: BackgroundColor = "aqua";

  const canvas = new CanvasCreator(800, 500, app, canvasBackgroundColor);
  const toolbar = new Toolbar(app, tools);

  canvas.create();
  toolbar.create();

  const canvasElem = canvas.getCanvas();

  const canvasApp = new CanvasApp(canvasElem);

  canvasElem.addEventListener("mousedown", (event: MouseEvent) => {
    canvasApp.startDrawing(toolbar.getSelectedTool(), event.offsetX, event.offsetY);
  });

  canvasElem.addEventListener("mouseup", () => {
    canvasApp.stopDrawing();
  });

  canvasElem.addEventListener("mousemove", (event: MouseEvent) => {
    canvasApp.continueDrawing(canvasApp.getCurrentShape(), event.offsetX, event.offsetY);
  });
});
