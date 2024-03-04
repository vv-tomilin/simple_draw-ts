import CanvasCreator from "./components/CanvasCreator";
import Toolbar from "./components/Toolbar";
import CanvasApp from "./components/CanvasApp";
import Color from "./components/Colors/Color";

import { ToolType } from "./types/toolbarTypes";
import { ColorType } from "./types/colorTypes";
import { BackgroundColor } from "./types/commonTypes";

import "./styles/style.scss";
import WidthLine from "./components/WidthLine/WidthLine";

const tools: ToolType[] = [
  ToolType.RECTANGLE,
  ToolType.RECTANGLE_FILL_ONLY,
  ToolType.RECTANGLE_OUTLINE_FILL,
  ToolType.CIRCLE,
  ToolType.CIRCLE_FILL_ONLY,
  ToolType.CIRCLE_OUTLINE_FILL,
  ToolType.PENCIL,
];

const defaultColors: string[] = [
  "black",
  "white",
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "aqua",
  "violet",
  "magenta",
  "grey",
  "brown",
];

const widthList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50];

document.addEventListener("DOMContentLoaded", () => {
  const app: HTMLDivElement = document.getElementById("app") as HTMLDivElement;
  const canvasBackgroundColor: BackgroundColor = "#FFFFF0";

  const canvas = new CanvasCreator(
    window.innerWidth - 15,
    window.innerHeight - 100,
    app,
    canvasBackgroundColor
  );
  const toolbar = new Toolbar(app, tools);

  const colorFill = new Color(ColorType.BACKGROUND, toolbar.getToolbarContainer(), defaultColors);
  const colorBorder = new Color(ColorType.BORDER, toolbar.getToolbarContainer(), defaultColors);

  const width = new WidthLine(toolbar.getToolbarContainer(), widthList);

  toolbar.create();
  width.create();
  colorFill.create();
  colorBorder.create();
  canvas.create();

  const canvasElem = canvas.getCanvas();

  const canvasApp = new CanvasApp(canvasElem);

  canvasElem.addEventListener("mousedown", (event: MouseEvent) => {
    canvasApp.startDrawing(
      toolbar.getSelectedTool(),
      event.offsetX,
      event.offsetY,
      colorFill.getColor(),
      colorBorder.getColor(),
      width.getWidth()
    );
  });

  canvasElem.addEventListener("mouseup", () => {
    canvasApp.stopDrawing();
  });

  canvasElem.addEventListener("mousemove", (event: MouseEvent) => {
    canvasApp.continueDrawing(canvasApp.getCurrentShape(), event.offsetX, event.offsetY);
  });
});
