const inicialButton = document.createElement("button");
const redDiv = document.createElement("div");
const blueDiv = document.createElement("div");
const greenDiv = document.createElement("div");
const orangeDiv = document.createElement("div");
const boxContainer = document.createElement("section");
const boxReceiver = document.createElement("section");

const body = document.getElementsByTagName("body")[0];

inicialButton.className = "first-click";
inicialButton.innerText = "É assim! Clica em mim!";
redDiv.innerText = "red";
blueDiv.innerText = "blue";
greenDiv.innerText = "green";
orangeDiv.innerText = "orange";
redDiv.className = "divided-red";
blueDiv.className = "divided-blue";
greenDiv.className = "divided-green";
orangeDiv.className = "divided-orange";
boxContainer.className = "container";
boxReceiver.className = "receiver";

body.appendChild(inicialButton);

const startClick = () => {
  body.innerHTML = "";
  body.appendChild(boxReceiver);
  boxReceiver.appendChild(redDiv);
  boxReceiver.appendChild(blueDiv);
  boxReceiver.appendChild(greenDiv);
  boxReceiver.appendChild(orangeDiv);
  body.appendChild(boxContainer);

  const divs = document.querySelectorAll("div");

  divs.forEach((element) => {
    element.addEventListener("click", () => appendToContainer(element));
  });
};

const appendToContainer = (element) => {
  if (element.id !== "onBox") {
    boxContainer.appendChild(element);
    element.id = "onBox";
  } else {
    element.id = "";
    boxReceiver.appendChild(element);
  }
};
inicialButton.addEventListener("click", startClick);
