type BackgroundColor = string;

enum ToolType {
  RECTANGLE = "RECTANGLE",
  RECTANGLE_FILL_ONLY = "RECTANGLE_FILL_ONLY",
  RECTANGLE_OUTLINE_FILL = "RECTANGLE_OUTLINE_FILL",
  CIRCLE = "CIRCLE",
  PENCIL = "PENCIL",
}

enum ToolIcon {
  RECTANGLE = "/assets/icons/rectangle.svg",
  RECTANGLE_FILL_ONLY = "/assets/icons/rectangle_fill_only.svg",
  RECTANGLE_OUTLINE_FILL = "/assets/icons/rectangle_outline_fill.svg",
  CIRCLE = "/assets/icons/circle_1.svg",
  PENCIL = "/assets/icons/pencil_1.svg",
}

enum ToolNameRU {
  RECTANGLE = "Прямоугольник",
  RECTANGLE_FILL_ONLY = "Прямоугольник с заливкой",
  RECTANGLE_OUTLINE_FILL = "Прямоугольник с границами и заливкой",
  CIRCLE = "Круг",
  PENCIL = "Карандаш",
}

export type { BackgroundColor };
export { ToolType, ToolNameRU, ToolIcon };
