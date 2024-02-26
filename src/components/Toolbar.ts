import { ToolType, ToolNameRU, ToolIcon } from "../types/commonTypes";

export default class Toolbar {
  private toolbarContainer: HTMLDivElement = document.createElement("div") as HTMLDivElement;
  private toolsList: ToolType[] = [];
  private appElement: HTMLDivElement;
  private selectedTool: string | null = null;

  constructor(appElement: HTMLDivElement, toolList: ToolType[]) {
    this.appElement = appElement;
    this.toolsList = toolList;
  }

  create() {
    this.toolbarContainer.classList.add("toolbar");

    this.appElement.appendChild(this.toolbarContainer);
    this.appendTools(this.toolbarContainer);
  }

  getSelectedTool() {
    return this.selectedTool;
  }

  private appendTools(container: HTMLDivElement) {
    for (const tool of this.toolsList) {
      const label: HTMLLabelElement = document.createElement("label") as HTMLLabelElement;
      const radioButton: HTMLInputElement = document.createElement("input") as HTMLInputElement;
      radioButton.type = "radio";

      switch (tool) {
        case ToolType.RECTANGLE:
          this.toolElementCreate(
            label,
            radioButton,
            ToolType.RECTANGLE,
            ToolNameRU.RECTANGLE,
            ToolIcon.RECTANGLE
          );
          break;
        case ToolType.CIRCLE:
          this.toolElementCreate(
            label,
            radioButton,
            ToolType.CIRCLE,
            ToolNameRU.CIRCLE,
            ToolIcon.CIRCLE
          );
          break;
        case ToolType.PENCIL:
          this.toolElementCreate(
            label,
            radioButton,
            ToolType.PENCIL,
            ToolNameRU.PENCIL,
            ToolIcon.PENCIL
          );
      }

      label.appendChild(radioButton);

      radioButton.setAttribute("name", "tool");

      radioButton.addEventListener("click", () => {
        this.selectedTool = radioButton.getAttribute("value");
        label.classList.add("toolbar__selected");
        this.clearSelectedLabels();
      });

      container.appendChild(label);
    }
  }

  private toolElementCreate(
    labelElement: HTMLLabelElement,
    radioButtonElement: HTMLInputElement,
    toolType: ToolType,
    toolNameRU: ToolNameRU,
    toolIcon: string
  ) {
    labelElement.classList.add("toolbar__label");
    labelElement.setAttribute("for", toolType.toLowerCase());
    labelElement.setAttribute("title", toolNameRU);

    const icon = document.createElement("img");
    icon.setAttribute("src", toolIcon);
    icon.setAttribute("width", "32");
    icon.setAttribute("width", "32");

    labelElement.appendChild(icon);

    radioButtonElement.setAttribute("value", toolType);
    radioButtonElement.id = toolType.toLowerCase();
    radioButtonElement.classList.add("visually-hidden");
  }

  private clearSelectedLabels() {
    const selectedLabels = document.querySelectorAll(".toolbar__label");

    for (const label of selectedLabels) {
      if (label.getAttribute("for")?.toUpperCase() !== this.selectedTool) {
        label.classList.remove("toolbar__selected");
      }
    }
  }
}
