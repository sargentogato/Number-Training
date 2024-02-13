import { numbers } from "./numbers.js";

const numberBox = document.getElementById("number");
const form = document.forms[0];
const btn = document.querySelectorAll("button, a");
const inputTag = document.getElementById("inputAnswer");
const modalText = document.getElementById("modalText");
let counter = 0;
let numberShowed = null;
let messageModal = "";

document.addEventListener("keypress", (e) => {
  if (checkIfIsNumber(e)) {
    e.preventDefault();
  }

  if (e.key === "Enter") {
    const inputAnswer = form[0].value;
    if (!inputAnswer && numberBox.innerText) {
      alert("Escriba un número en palabras");
      return;
    }

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
    const eventTriggered = e.target.id ? e.target.id : e.target.classList.value;

    if (eventTriggered === "btn") {
      generateNumber();
    } else if (eventTriggered === "btnModalNumbers") {
      displayListOfNumbers();
    } else if (
      eventTriggered === "showInstructions" ||
      eventTriggered === "close"
    ) {
      displayInstructions();
    }
  });
}

function generateNumber() {
  if (form[0].value !== "") {
    removeColor();
  }

  const numberToshow = Math.floor(1 + Math.random() * 99);
  numberBox.textContent = numberToshow;
  numberShowed = numberToshow;

  removePropertyTag();

  form.reset();
}

function checkIntro() {
  const answerData = form[0].value.toLowerCase();
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

function checkIfIsNumber(e) {
  return !isNaN(e.key);
}

function displayListOfNumbers() {
  if (document.querySelector(".numbersList")) {
    alert("La lista de números ya ha sido generada");
    return;
  }

  messageModal = modalText.innerText;
  modalText.innerHTML = "";

  const div = document.createElement("div");
  div.classList.add("numbersList");
  const storageElement = document.createDocumentFragment();

  Object.entries(numbers).forEach(([key, value]) => {
    const box = document.createElement("div");

    storageElement.appendChild(box);
    box.textContent = `${key}:${value}`;
  });

  div.appendChild(storageElement);
  modalText.appendChild(div);

  showsHiddeButton(modalText);
}

function showsHiddeButton() {
  const btn = document.getElementById("showInstructions");

  btn.classList.toggle("shows");
  btn.classList.toggle("hidden");
}

function displayInstructions() {
  if (modalText.querySelectorAll(".numbersList").length) {
    showsHiddeButton();
    modalText.innerHTML = "";
    modalText.innerHTML = messageModal;
  }
}
