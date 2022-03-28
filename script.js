const redDiv = document.createElement("div");
const blueDiv = document.createElement("div");
const greenDiv = document.createElement("div");
const orangeDiv = document.createElement("div");
const boxReceiver = document.createElement("section");
const boxContainer = document.createElement("section");
const inicialButton = document.createElement("button");

const body = document.getElementsByTagName("body")[0];

redDiv.id = "divided-red";
blueDiv.id = "divided-blue";
greenDiv.id = "divided-green";
orangeDiv.id = "divided-orange";

boxReceiver.className = "receiver";
boxContainer.className = "container";
inicialButton.className = "first-click";

redDiv.innerText = "red";
blueDiv.innerText = "blue";
greenDiv.innerText = "green";
orangeDiv.innerText = "orange";
inicialButton.innerText = "É assim! Clica em mim!";

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
  if (element.className !== "onBox") {
    boxContainer.appendChild(element);
    element.className = "onBox";
  } else {
    element.className = "";
    boxReceiver.appendChild(element);
  }
};

inicialButton.addEventListener("click", startClick);
