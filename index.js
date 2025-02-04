const body = document.querySelector("body");

const array = [
  "(",
  ")",
  "%",
  "AC",
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
];
const container = document.createElement("div");
const border = document.createElement("div");
border.className = "durs";
body.appendChild(border);

for (let i = 0; i < array.length; i++) {
  createElement("div", container, "btn", array[i]);
  // const div = document.createElement("div");

  // div.innerText = array[i];

  // div.className = "btn";

  // container.appendChild(div);
}

function createElement(elementName, appendElement, className, innerText) {
  const element = document.createElement(elementName);

  element.innerText = innerText;

  element.className = className;

  appendElement.appendChild(element);
}

container.className = "container";

body.appendChild(container);
