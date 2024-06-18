const HandRight = document.getElementsByClassName("HandRight")[0];
const HandLeft = document.getElementsByClassName("HandLeft")[0];
const Images = Array.from(document.getElementsByClassName("Image")).map(ele => ele.src);
const startGame = document.querySelectorAll("#startGame > div");
const result = document.getElementById("result");

function GuessTheShape() {
    const target = Images[parseInt(Math.random() * Images.length)];
    HandRight.src = target;
    if (target.includes('Scissor.svg')) HandRight.style.transform = 'rotate(0deg) rotateY(0deg)';
    else HandRight.removeAttribute('style');
    return target;
};

function GetTheShape(img) {
    HandLeft.src = img;
    if (img.includes('Scissor.svg')) HandLeft.style.transform = 'rotate(180deg) rotateX(180deg)';
    else HandLeft.removeAttribute('style');
};

startGame.forEach(ele => {
    ele.onclick = () => {
        HandRight.src = "/images/Rock.svg";
        HandLeft.src = "/images/Rock.svg";
        GuessTheShape();
        GetTheShape(ele.firstElementChild.src);
    };
});