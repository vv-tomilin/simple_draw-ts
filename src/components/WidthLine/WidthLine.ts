export default class WidthLine {
  private widthlist: number[];
  private containerElement: HTMLDivElement;
  private selectedWidth: number;
  private currentShowWidth: HTMLDivElement = document.createElement("div");
  private isOpenList: boolean;

  constructor(containerElement: HTMLDivElement, widthList: number[]) {
    this.widthlist = widthList;
    this.containerElement = containerElement;
    this.selectedWidth = 1;
    this.isOpenList = false;
  }

  create() {
    const blocksContainer: HTMLDivElement = document.createElement("div");
    const title: HTMLImageElement = document.createElement("img");
    const input: HTMLInputElement = document.createElement("input");
    const widthListContainer: HTMLDivElement = document.createElement("div");
    const listOpenButton: HTMLDivElement = document.createElement("div");

    input.type = "number";
    input.setAttribute("placeholder", this.selectedWidth.toString());
    input.classList.add("width__set-width");
    input.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        const target = event.target as HTMLInputElement;

        this.selectedWidth = Number(target.value);
        this.currentShowWidth.innerText = this.selectedWidth.toString();

        target.value = "";

        input.setAttribute("placeholder", this.selectedWidth.toString());
      }
    });

    listOpenButton.classList.add("width__wrapper");
    listOpenButton.classList.add("width__wrapper--close");

    if (!this.isOpenList) {
      widthListContainer.classList.remove("width__list");
      widthListContainer.classList.add("visually-hidden");
    }

    listOpenButton.addEventListener("click", () => {
      this.isOpenList = !this.isOpenList;

      if (this.isOpenList) {
        listOpenButton.classList.add("width__wrapper--open");
        listOpenButton.classList.remove("width__wrapper--close");

        widthListContainer.classList.remove("visually-hidden");
        widthListContainer.classList.add("width__list");
      } else {
        listOpenButton.classList.add("width__wrapper--close");
        listOpenButton.classList.remove("width__wrapper--open");

        this.closeWidthList(widthListContainer);
      }
    });

    this.currentShowWidth.classList.add("width__show-width");
    this.currentShowWidth.innerText = this.selectedWidth.toString();

    title.setAttribute("src", "../../assets/icons/width_line.svg");
    title.setAttribute("width", "22");
    title.setAttribute("height", "22");

    blocksContainer.classList.add("width");
    blocksContainer.appendChild(title);
    blocksContainer.appendChild(this.currentShowWidth);
    blocksContainer.appendChild(listOpenButton);
    blocksContainer.appendChild(input);

    this.setWidthItems(widthListContainer, input);
    widthListContainer.classList.add("width__list");
    blocksContainer.appendChild(widthListContainer);

    this.containerElement.appendChild(blocksContainer);
  }

  getWidth(): number {
    return this.selectedWidth;
  }

  private closeWidthList(widthListElement: HTMLDivElement) {
    widthListElement.classList.remove("width__list");
    widthListElement.classList.add("visually-hidden");
  }

  private setWidthItems(container: HTMLDivElement, inputElement: HTMLInputElement) {
    for (const width of this.widthlist) {
      const label: HTMLLabelElement = document.createElement("label");
      const radioButton: HTMLInputElement = document.createElement("input");
      radioButton.type = "radio";

      this.witdthElementCreate(label, radioButton, width);

      label.appendChild(radioButton);

      radioButton.setAttribute("name", "width");

      radioButton.addEventListener("click", () => {
        this.selectedWidth = Number(radioButton.getAttribute("value"));
        this.currentShowWidth.innerText = this.selectedWidth.toString();
        inputElement.setAttribute("placeholder", this.selectedWidth.toString());
        this.isOpenList = false;
        this.closeWidthList(container);
      });

      container.appendChild(label);
    }
  }

  private witdthElementCreate(
    labelElement: HTMLLabelElement,
    radioButtonElement: HTMLInputElement,
    labelWidth: number
  ) {
    const widthElement: HTMLDivElement = document.createElement("div");
    widthElement.innerText = labelWidth.toString();

    labelElement.classList.add("width__label");
    labelElement.setAttribute("for", `label-width-${labelWidth.toString()}`);

    radioButtonElement.setAttribute("value", labelWidth.toString());
    radioButtonElement.id = `label-width-${labelWidth.toString()}`;
    radioButtonElement.classList.add("visually-hidden");

    labelElement.appendChild(widthElement);
  }
}
