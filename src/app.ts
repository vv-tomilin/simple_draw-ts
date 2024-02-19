import CanvasCreator from "./CanvasCreator";
import Toolbar from "./Toolbar";
import CanvasApp from "./CanvasApp";

import { BackgroundColor, ToolType } from "./types/commonTypes";

import "./styles/style.scss";

const tools: ToolType[] = [ToolType.RECTANGLE, ToolType.CIRCLE, ToolType.PENCIL];

document.addEventListener("DOMContentLoaded", () => {
  const app: HTMLDivElement = document.getElementById("app") as HTMLDivElement;
  const canvasBackgroundColor: BackgroundColor = "#FFFFF0";

  const canvas = new CanvasCreator(
    window.innerWidth - 15,
    window.innerHeight - 40,
    app,
    canvasBackgroundColor
  );
  const toolbar = new Toolbar(app, tools);

  toolbar.create();
  canvas.create();

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
