import {
  ColorButtonStyleSelected,
  ColorGroupNameRU,
  ColorLabelStyle,
  ColorType,
} from "../../types/colorTypes";
import { BackgroundColor } from "../../types/commonTypes";

export default class Color {
  private type: string;
  private colorsList: BackgroundColor[];
  private containerElement: HTMLDivElement;
  private colorButtons: HTMLDivElement = document.createElement("div");
  private selectedColor: BackgroundColor | null = "black";

  constructor(type: string, containerElement: HTMLDivElement, colorsList: BackgroundColor[]) {
    this.colorsList = colorsList;
    this.containerElement = containerElement;
    this.type = type;
  }

  create() {
    const title = document.createElement("div");
    const colorButtonsBlock = document.createElement("div");

    colorButtonsBlock.classList.add("color");
    colorButtonsBlock.appendChild(title);

    colorButtonsBlock.classList.add("color__button-block");
    colorButtonsBlock.appendChild(this.colorButtons);

    this.containerElement.appendChild(colorButtonsBlock);
    this.appendColors(this.colorButtons);

    this.colorButtons.classList.add("color__button-block");

    switch (this.type) {
      case ColorType.BACKGROUND:
        title.innerText = ColorGroupNameRU.BACKGROUND;
        break;
      case ColorType.BORDER:
        title.innerText = ColorGroupNameRU.BORDER;
        break;
    }
  }

  getColor() {
    return this.selectedColor;
  }

  private appendColors(container: HTMLDivElement) {
    for (const color of this.colorsList) {
      const label: HTMLLabelElement = document.createElement("label") as HTMLLabelElement;
      const radioButton: HTMLInputElement = document.createElement("input") as HTMLInputElement;
      radioButton.type = "radio";

      //* устанавливаем цвет по умолчанию
      if (color === "black" && this.selectedColor === "black") {
        switch (this.type) {
          case ColorType.BACKGROUND:
            label.classList.add(ColorButtonStyleSelected.BACKGROUND);
            break;
          case ColorType.BORDER:
            label.classList.add(ColorButtonStyleSelected.BORDER);
            break;
        }
      }

      this.colorElementCreate(label, radioButton, color);

      label.appendChild(radioButton);

      switch (this.type) {
        case ColorType.BACKGROUND:
          radioButton.setAttribute("name", `color-${ColorType.BACKGROUND}`);
          break;
        case ColorType.BORDER:
          radioButton.setAttribute("name", `color-${ColorType.BORDER}`);
          break;
      }

      label.classList.add("color__label");

      radioButton.addEventListener("click", () => {
        this.selectedColor = radioButton.getAttribute("value");
        switch (this.type) {
          case ColorType.BACKGROUND:
            label.classList.add(ColorButtonStyleSelected.BACKGROUND);
            this.clearSelectedLabels(
              ColorLabelStyle.BACKGROUND,
              ColorButtonStyleSelected.BACKGROUND
            );
            break;
          case ColorType.BORDER:
            label.classList.add(ColorButtonStyleSelected.BORDER);
            this.clearSelectedLabels(ColorLabelStyle.BORDER, ColorButtonStyleSelected.BORDER);
            break;
        }
      });

      container.appendChild(label);
    }
  }

  private colorElementCreate(
    labelElement: HTMLLabelElement,
    radioButtonElement: HTMLInputElement,
    color: BackgroundColor
  ) {
    switch (this.type) {
      case ColorType.BACKGROUND:
        labelElement.classList.add(ColorLabelStyle.BACKGROUND);
        break;
      case ColorType.BORDER:
        labelElement.classList.add(ColorLabelStyle.BORDER);
    }
    labelElement.setAttribute("for", `${color}-${this.type}`);
    labelElement.dataset.color = color;

    const colorIcon = document.createElement("div");
    colorIcon.style.backgroundColor = color;
    colorIcon.classList.add("color__icon");

    labelElement.appendChild(colorIcon);
    radioButtonElement.setAttribute("value", color);
    radioButtonElement.id = `${color}-${this.type}`;
    radioButtonElement.classList.add("visually-hidden");
  }

  private clearSelectedLabels(labelSelector: string, labelSelectedStyle: string) {
    const selectedLabels = document.querySelectorAll(`.${labelSelector}`);

    console.log(this.type, labelSelector);

    for (const label of selectedLabels) {
      if (label.getAttribute("data-color") !== this.selectedColor) {
        label.classList.remove(labelSelectedStyle);
      }
    }
  }
}
