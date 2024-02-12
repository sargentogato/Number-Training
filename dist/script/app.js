import { numbers } from "./numbers.js";

const numberBox = document.getElementById("number");
const form = document.forms[0];
const btn = document.querySelectorAll("button");
const inputTag = document.getElementById("inputAnswer");

// const modalText = document.getElementById("modalText");
// const fragment = document.createDocumentFragment();
let counter = 0;
let numberShowed = null;

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (counter === 1) {
      generateNumber();
      counter = 0;
    } else {
      counter = 1;
      checkIntro();
    }
  }
});

for (const node of btn) {
  node.addEventListener("click", (e) => {
    const eventTriggered = e.target.id;
    if (eventTriggered === "btn") {
      generateNumber();
    } else if (eventTriggered === "btnModalNumbers") {
      alert("Proceso en Construcción");
    }
  });
}

function generateNumber() {
  const numberToshow = Math.floor(1 + Math.random() * 99);
  numberBox.textContent = numberToshow;
  numberShowed = numberToshow;
  if (form[0].value !== "") {
    removeColor();
  }

  removePropertyTag();

  form.reset();
}

function checkIntro() {
  const answerData = form[0].value;
  const compareData = numbers[numberShowed];
  if (answerData === compareData) {
    form[1].value = compareData;
    addColor("colorSuccess");
  } else {
    form[1].value = compareData;
    addColor("colorAlert");
  }
}

function addColor(color) {
  for (const input of form) {
    input.classList.add(color);
  }
}

function removeColor() {
  for (const input of form) {
    if (input.classList.contains("colorSuccess")) {
      input.classList.remove("colorSuccess");
    } else {
      input.classList.remove("colorAlert");
    }
  }
}

function removePropertyTag() {
  inputTag.removeAttribute("readonly");
}
