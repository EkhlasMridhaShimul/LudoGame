const moveUnit = 30;

var red1,
  red2,
  red3,
  red4,
  blue1,
  blue2,
  blue3,
  blue4,
  green1,
  green2,
  green3,
  green4,
  yellow1,
  yellow2,
  yellow3,
  yellow4;

class Pawns {
  element = null;
  positionX = "";
  positionY = "";
  event;
  startPosition = {
    corX: 0,
    corY: 0
  };

  constructor(elementID, positionX, positionY, startPosition) {
    this.element = document.getElementById(elementID);
    this.event = document.getElementById(elementID).onclick;
    this.positionX = positionX;
    this.positionY = positionY;
    this.startPosition = startPosition;
    this.resetPosition();
  }

  resetPosition() {
    this.element.style.cssText =
      "top:" + this.positionY + "px;left:" + this.positionX + "px";
  }

  onBoard() {
    this.element.style.cssText =
      "top:" +
      this.startPosition.corY +
      "px;left:" +
      this.startPosition.corX +
      "px";
  }

  moveNext() {
    let move = moveUnit + 65;
    console.log("move");
    this.element.style.cssText = "top:307px;left:" + move + "px";
  }

  onClick() {
    return this.event;
  }
}

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

function loadBoard() {
  red1 = new Pawns("red1", 80, 170, onBoardStartPosition.red);
  red2 = new Pawns("red2", 140, 170, onBoardStartPosition.red);
  red3 = new Pawns("red3", 80, 230, onBoardStartPosition.red);
  red4 = new Pawns("red4", 140, 230, onBoardStartPosition.red);

  green1 = new Pawns("green1", 365, 170, onBoardStartPosition.green);
  green2 = new Pawns("green2", 425, 170, onBoardStartPosition.green);
  green3 = new Pawns("green3", 365, 230, onBoardStartPosition.green);
  green4 = new Pawns("green4", 425, 230, onBoardStartPosition.green);

  blue1 = new Pawns("blue1", 80, 450, onBoardStartPosition.blue);
  blue2 = new Pawns("blue2", 140, 450, onBoardStartPosition.blue);
  blue3 = new Pawns("blue3", 80, 510, onBoardStartPosition.blue);
  blue4 = new Pawns("blue4", 140, 510, onBoardStartPosition.blue);

  yellow1 = new Pawns("yellow1", 365, 450, onBoardStartPosition.yellow);
  yellow2 = new Pawns("yellow2", 425, 450, onBoardStartPosition.yellow);
  yellow3 = new Pawns("yellow3", 365, 510, onBoardStartPosition.yellow);
  yellow4 = new Pawns("yellow4", 425, 510, onBoardStartPosition.yellow);
}

var onBoardStartPosition = {
  red: { corX: 65, corY: 307 },
  green: { corX: 285, corY: 147 },
  blue: { corX: 225, corY: 525 },
  yellow: { corX: 443, corY: 366 }
};
