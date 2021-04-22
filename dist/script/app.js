import { numbers } from "./numbers.js";
const numberBox = document.getElementById("number");
const modalBtnNumber;
const form = document.forms[0];
let numberShowed = null;
const btn = document.querySelector("button");
let counter = 0;

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (counter === 1) {
      btn.click();
      counter = 0;
    } else {
      counter = 1;
      checkIntro();
    }
  }
});

btn.addEventListener("click", (e) => {
  const numberToshow = Math.floor(1 + Math.random() * 99);
  numberBox.textContent = numberToshow;
  numberShowed = numberToshow;
  if (form[0].value !== "") {
    removeColor();
  }

  form.reset();
});

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
    console.log(input);
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
