const moveUnit = 30;
var red1 = null;

function shuffleDice() {
  let diceResult = Math.floor(Math.random() * 6 + 1);
  document.getElementById("dice").style.backgroundImage =
    "url(images/" + diceResult + ".jpg)";
  console.log("shuffled");
}

function resetDice() {
  document.getElementById("dice").style.backgroundImage =
    "url(images/dice.png)";
  console.log("reset");
}

class Red {
  element = null;
  positionX = "";
  positionY = "";
  constructor(elementID, positionX, positionY) {
    this.element = document.getElementById(elementID);
    this.positionX = positionX;
    this.positionY = positionY;
  }

  resetPosition() {
    this.element.style.cssText =
      "top:" + this.positionY + "px;left:" + this.positionX + "px";
  }

  onBoard() {
    this.element.style.cssText = "top:307px;left:65px";
  }

  moveNext() {
    let move = moveUnit + 65;
    console.log(move);
    this.element.style.cssText = "top:307px;left:" + move + "px";
  }
}

function resetButtons() {
  red1 = new Red("red1", 80, 170);
  red2 = new Red("red2", 140, 170);
  red3 = new Red("red3", 80, 230);
  red4 = new Red("red4", 140, 230);
  red1.resetPosition();
  red2.resetPosition();
  red3.resetPosition();
  red4.resetPosition();

  document.getElementById("green1").style.cssText = "top:170px;left:365px";
  document.getElementById("green2").style.cssText = "top:170px;left:425px";
  document.getElementById("green3").style.cssText = "top:230px;left:365px";
  document.getElementById("green4").style.cssText = "top:230px;left:425px";

  document.getElementById("blue1").style.cssText = "top:450px;left:80px";
  document.getElementById("blue2").style.cssText = "top:450px;left:140px";
  document.getElementById("blue3").style.cssText = "top:510px;left:80px";
  document.getElementById("blue4").style.cssText = "top:510px;left:140px";

  document.getElementById("yellow1").style.cssText = "top:450px;left:365px";
  document.getElementById("yellow2").style.cssText = "top:450px;left:425px";
  document.getElementById("yellow3").style.cssText = "top:510px;left:365px";
  document.getElementById("yellow4").style.cssText = "top:510px;left:425px";
}

buttonPositions = {
  red1X: 80,
  red1Y: 170,
  red2X: 140,
  red2Y: 170,
  red3X: 80,
  red3Y: 230,
  red4X: 140,
  red4Y: 230
};
