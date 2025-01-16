import "./styles.css";
import circle from "./images/circle.svg";
import circleBlack from "./images/circleBlack.svg";

const arrowLeft = document.getElementById("imgArrowLeft");
const arrowRight = document.getElementById("imgArrowRight");

arrowRight.addEventListener("click", () => {
  let { chosenImg, dataIndex } = getActiveImageData();
  
  if (dataIndex <= 4) {
    updateCircleColorArrowRight();
    chosenImg.id = "three";
    if (chosenImg.style.transform) {
      chosenImg.style.transform = `translateX(${-1515}px)`;
    } else {
      chosenImg.style.transform = `translateX(${-815}px)`;
      setTimeout(() => {
        chosenImg.id = "one";
      }, 500);

      dataIndex = parseInt(dataIndex) + 1;
      const nextImg = document.querySelector(`[data-index="${dataIndex}"]`);
      nextImg.style.transform = `translateX(${-703}px)`;
      setTimeout(() => {
        nextImg.id = "midreset";
        nextImg.style.transform = "";
      }, 500);

      chosenImg.classList.remove("active");
      nextImg.classList.add("active");
    }
  } else {
    console.log("cant go further");
  }
});

arrowLeft.addEventListener("click", () => {
  let { chosenImg, dataIndex } = getActiveImageData();
  if (dataIndex >= 2) {
    updateCircleColorArrowLeft();
    chosenImg.id = "three";
    if (chosenImg.style.transform) {
      chosenImg.style.transform = `translateX(${1515}px)`;
    } else {
      chosenImg.style.transform = `translateX(${703}px)`;
      setTimeout(() => {
        chosenImg.id = "four";
      }, 500);

      dataIndex = parseInt(dataIndex) - 1;
      const nextImg = document.querySelector(`[data-index="${dataIndex}"]`);
      nextImg.style.transform = `translateX(${815}px)`;
      setTimeout(() => {
        nextImg.id = "midreset";
        nextImg.style.transform = "";
      }, 500);

      chosenImg.classList.remove("active");
      nextImg.classList.add("active");
    }
  } else {
    console.log("cant go further");
  }
});

function updateCircleColorArrowRight() {
  let { chosenImg, dataIndex } = getActiveImageData();
  //remove CircleFocus
  const circles = document.getElementsByClassName("circle");
  circles[dataIndex - 1].remove();
  const circleContainers = document.getElementsByClassName("circleContainers");
  const circleNoBlack = document.createElement("img");
  circleContainers[dataIndex - 1].appendChild(circleNoBlack);
  circleNoBlack.classList.add("circle");
  circleNoBlack.src = circle;

  //add CircleFocous
  circles[dataIndex].remove();
  const circleBlackIMG = document.createElement("img");
  circleContainers[dataIndex].appendChild(circleBlackIMG);
  circleBlackIMG.classList.add("circle");
  circleBlackIMG.src = circleBlack;
}

function updateCircleColorArrowLeft() {
  let { chosenImg, dataIndex } = getActiveImageData();
  //remove CircleFocus
  const circles = document.getElementsByClassName("circle");
  circles[dataIndex - 1].remove();
  const circleContainers = document.getElementsByClassName("circleContainers");
  const circleNoBlack = document.createElement("img");
  circleContainers[dataIndex - 1].appendChild(circleNoBlack);
  circleNoBlack.classList.add("circle");
  circleNoBlack.src = circle;

  //add CircleFocous
  circles[dataIndex - 2].remove();
  const circleBlackIMG = document.createElement("img");
  circleContainers[dataIndex - 2].appendChild(circleBlackIMG);
  circleBlackIMG.classList.add("circle");
  circleBlackIMG.src = circleBlack;
}

function getActiveImageData() {
  const chosenImg = document.querySelector(".active");
  let dataIndex = parseInt(chosenImg.dataset.index);
  return { chosenImg, dataIndex };
}
