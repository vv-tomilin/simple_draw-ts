type BackgroundColor = string;

enum ToolType {
  RECTANGLE = "RECTANGLE",
  CIRCLE = "CIRCLE",
  PENCIL = "PENCIL",
}

enum ToolIcon {
  RECTANGLE = require("../assets/icons/rectangle_1.svg"),
  CIRCLE = "../assets/icons/circle_1.svg",
  PENCIL = "../assets/icons/pencil_1.svg",
}

enum ToolNameRU {
  RECTANGLE = "Прямоугольник",
  CIRCLE = "Круг",
  PENCIL = "Карандаш",
}

export type { BackgroundColor };
export { ToolType, ToolNameRU, ToolIcon };
