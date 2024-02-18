type BackgroundColor = string;

enum ToolType {
  RECTANGLE = "RECTANGLE",
  CIRCLE = "CIRCLE",
  PENCIL = "PENCIL",
}

enum ToolNameRU {
  RECTANGLE = "Прямоугольник",
  CIRCLE = "Круг",
  PENCIL = "Карандаш",
}

export type { BackgroundColor };
export { ToolType, ToolNameRU };
