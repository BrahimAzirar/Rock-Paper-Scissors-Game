const HandRight = document.getElementsByClassName("HandRight")[0];
const HandLeft = document.getElementsByClassName("HandLeft")[0];
const Images = Array.from(document.getElementsByClassName("Image")).map(
  (ele) => ele.src
);
const startGame = document.querySelectorAll("#startGame > div");
const result = document.getElementById("result");

function GuessTheShape() {
  const target = Images[parseInt(Math.random() * Images.length)];
  HandRight.src = target;
  if (target.includes("Scissor.svg"))
    HandRight.style.transform = "rotate(0deg) rotateY(0deg)";
  else HandRight.removeAttribute("style");

  return target;
}

function GetTheShape(img) {
  HandLeft.src = img;
  if (img.includes("Scissor.svg"))
    HandLeft.style.transform = "rotate(180deg) rotateX(180deg)";
  else HandLeft.removeAttribute("style");
}

startGame.forEach((ele) => {
  ele.onclick = () => {
    const shape = ele.firstElementChild.src;
    const hand_left = shape.split("/")[shape.split("/").length - 1].split(".")[0];

    HandRight.src = "/images/Rock.svg";
    HandLeft.src = "/images/Rock.svg";
    HandRight.removeAttribute("style");
    HandLeft.removeAttribute("style");
    HandRight.parentElement.classList.add("HandRightAnimition");
    HandLeft.parentElement.classList.add("HandLeftAnimition");
  
    setTimeout(() => {
      HandRight.parentElement.classList.remove("HandRightAnimition");
      HandLeft.parentElement.classList.remove("HandLeftAnimition");
      GetTheShape(shape);

      const geussShape = GuessTheShape();
      const hand_right = geussShape.split("/")[geussShape.split("/").length - 1].split(".")[0];

      if (hand_left == "Paper" && hand_right == "Rock") result.textContent = "You win :)";
      else if (hand_left == "Rock" && hand_right == "Scissor") result.textContent = "You win :)";
      else if (hand_left == "Scissor" && hand_right == "Paper") result.textContent = "You win :)";

      else if (hand_left == "Rock" && hand_right == "Paper") result.textContent = "You lose :(";
      else if (hand_left == "Scissor" && hand_right == "Rock") result.textContent = "You lose :(";
      else if (hand_left == "Paper" && hand_right == "Scissor") result.textContent = "You lose :(";

      else result.textContent = "Draw !!";
    }, 1800);
  };
});
