enum ToolType {
  RECTANGLE = "RECTANGLE",
  RECTANGLE_FILL_ONLY = "RECTANGLE_FILL_ONLY",
  RECTANGLE_OUTLINE_FILL = "RECTANGLE_OUTLINE_FILL",
  CIRCLE = "CIRCLE",
  CIRCLE_FILL_ONLY = "CIRCLE_FILL_ONLY",
  CIRCLE_OUTLINE_FILL = "CIRCLE_OUTLINE_FILL",
  PENCIL = "PENCIL",
}

enum ToolIcon {
  RECTANGLE = "/assets/icons/rectangle.svg",
  RECTANGLE_FILL_ONLY = "/assets/icons/rectangle_fill_only.svg",
  RECTANGLE_OUTLINE_FILL = "/assets/icons/rectangle_outline_fill.svg",
  CIRCLE = "/assets/icons/circle.svg",
  CIRCLE_FILL_ONLY = "/assets/icons/circle_fill_only.svg",
  CIRCLE_OUTLINE_FILL = "/assets/icons/circle_outline_fill.svg",
  PENCIL = "/assets/icons/pencil_1.svg",
}

enum ToolNameRU {
  RECTANGLE = "Прямоугольник без заливки",
  RECTANGLE_FILL_ONLY = "Прямоугольник с заливкой",
  RECTANGLE_OUTLINE_FILL = "Прямоугольник с границами и заливкой",
  CIRCLE = "Круг без заливки",
  CIRCLE_FILL_ONLY = "Круг с заливкой",
  CIRCLE_OUTLINE_FILL = "Круг с границами и заливкой",
  PENCIL = "Карандаш",
}

export { ToolType, ToolNameRU, ToolIcon };