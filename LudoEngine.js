const moveUnit = 32;
var move = 0;
var start = 0;
var currentRoom = 0;

var players = ["blue", "red", "green", "yellow"];
var playerNumber = 0;
var currentPlayer = players[playerNumber];

var diceRolled = false;
var diceResult;

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

var redPawnsPath = [];
var bluePawnsPath = [];
var greenPawnsPath = [];
var yellowPawnsPath = [];

var Red = [];
var Green = [];
var Yellow = [];
var Blue = [];

function moveRight(pawn) {
  let positions = pawn.getCurrentPosition();
  let newPositions = { corX: positions.corX + moveUnit, corY: positions.corY };
  pawn.setPosition(newPositions);
}

function moveLeft(pawn) {
  let positions = pawn.getCurrentPosition();
  let newPositions = { corX: positions.corX - moveUnit, corY: positions.corY };
  pawn.setPosition(newPositions);
}

function moveUp(pawn) {
  let positions = pawn.getCurrentPosition();
  let newPosition = { corX: positions.corX, corY: positions.corY - moveUnit };
  pawn.setPosition(newPosition);
}

function moveDown(pawn) {
  let positions = pawn.getCurrentPosition();
  let newPosition = { corX: positions.corX, corY: positions.corY + moveUnit };
  pawn.setPosition(newPosition);
}

function moveUpRight(pawn) {
  moveUp(pawn);
  moveRight(pawn);
}

function moveLeftDown(pawn) {
  moveLeft(pawn);
  moveDown(pawn);
}

function moveUpLeft(pawn) {
  moveUp(pawn);
  moveLeft(pawn);
}

function moveRightDown(pawn) {
  moveRight(pawn);
  moveDown(pawn);
}

function moveLeftUp(pawn) {
  moveLeft(pawn);
  moveUp(pawn);
}

function moveDownRight(pawn) {
  moveDown(pawn);
  moveRight(pawn);
}

function moveDownLeft(pawn) {
  moveDown(pawn);
  moveLeft(pawn);
}

function moveRightUp(pawn) {
  moveRight(pawn);
  moveUp(pawn);
}

function pathGenerator(paths, number, pathStore) {
  for (let i = 0; i < number; ++i) {
    pathStore.push(paths);
  }
}

/** red's path */
pathGenerator(moveRight, 4, redPawnsPath);
pathGenerator(moveRightUp, 1, redPawnsPath);
pathGenerator(moveUp, 5, redPawnsPath);
pathGenerator(moveRight, 2, redPawnsPath);
pathGenerator(moveDown, 5, redPawnsPath);
pathGenerator(moveDownRight, 1, redPawnsPath);
pathGenerator(moveRight, 5, redPawnsPath);
pathGenerator(moveDown, 2, redPawnsPath);
pathGenerator(moveLeft, 5, redPawnsPath);
pathGenerator(moveLeftDown, 1, redPawnsPath);
pathGenerator(moveDown, 5, redPawnsPath);
pathGenerator(moveLeft, 2, redPawnsPath);
pathGenerator(moveUp, 5, redPawnsPath);
pathGenerator(moveUpLeft, 1, redPawnsPath);
pathGenerator(moveLeft, 5, redPawnsPath);
pathGenerator(moveUp, 1, redPawnsPath);
pathGenerator(moveRight, 6, redPawnsPath);

/** green's path */
pathGenerator(moveDown, 4, greenPawnsPath);
pathGenerator(moveDownRight, 1, greenPawnsPath);
pathGenerator(moveRight, 5, greenPawnsPath);
pathGenerator(moveDown, 2, greenPawnsPath);
pathGenerator(moveLeft, 5, greenPawnsPath);
pathGenerator(moveLeftDown, 1, greenPawnsPath);
pathGenerator(moveDown, 5, greenPawnsPath);
pathGenerator(moveLeft, 2, greenPawnsPath);
pathGenerator(moveUp, 5, greenPawnsPath);
pathGenerator(moveUpLeft, 1, greenPawnsPath);
pathGenerator(moveLeft, 5, greenPawnsPath);
pathGenerator(moveUp, 2, greenPawnsPath);
pathGenerator(moveRight, 5, greenPawnsPath);
pathGenerator(moveRightUp, 1, greenPawnsPath);
pathGenerator(moveUp, 5, greenPawnsPath);
pathGenerator(moveRight, 1, greenPawnsPath);
pathGenerator(moveDown, 6, greenPawnsPath);

/**yellow's path */
pathGenerator(moveLeft, 4, yellowPawnsPath);
pathGenerator(moveLeftDown, 1, yellowPawnsPath);
pathGenerator(moveDown, 5, yellowPawnsPath);
pathGenerator(moveLeft, 2, yellowPawnsPath);
pathGenerator(moveUp, 5, yellowPawnsPath);
pathGenerator(moveUpLeft, 1, yellowPawnsPath);
pathGenerator(moveLeft, 5, yellowPawnsPath);
pathGenerator(moveUp, 2, yellowPawnsPath);
pathGenerator(moveRight, 5, yellowPawnsPath);
pathGenerator(moveRightUp, 1, yellowPawnsPath);
pathGenerator(moveUp, 5, yellowPawnsPath);
pathGenerator(moveRight, 2, yellowPawnsPath);
pathGenerator(moveDown, 5, yellowPawnsPath);
pathGenerator(moveDownRight, 1, yellowPawnsPath);
pathGenerator(moveRight, 5, yellowPawnsPath);
pathGenerator(moveDown, 1, yellowPawnsPath);
pathGenerator(moveLeft, 6, yellowPawnsPath);

/**blue's path */
pathGenerator(moveUp, 4, bluePawnsPath);
pathGenerator(moveUpLeft, 1, bluePawnsPath);
pathGenerator(moveLeft, 5, bluePawnsPath);
pathGenerator(moveUp, 2, bluePawnsPath);
pathGenerator(moveRight, 5, bluePawnsPath);
pathGenerator(moveRightUp, 1, bluePawnsPath);
pathGenerator(moveUp, 5, bluePawnsPath);
pathGenerator(moveRight, 2, bluePawnsPath);
pathGenerator(moveDown, 5, bluePawnsPath);
pathGenerator(moveDownRight, 1, bluePawnsPath);
pathGenerator(moveRight, 5, bluePawnsPath);
pathGenerator(moveDown, 2, bluePawnsPath);
pathGenerator(moveLeft, 5, bluePawnsPath);
pathGenerator(moveLeftDown, 1, bluePawnsPath);
pathGenerator(moveDown, 5, bluePawnsPath);
pathGenerator(moveLeft, 1, bluePawnsPath);
pathGenerator(moveUp, 6, bluePawnsPath);

function loadBoard() {
  red1 = new Pawns("red1", 87, 170, pawnsStartPosition.red, redPawnsPath);
  red2 = new Pawns("red2", 145, 170, pawnsStartPosition.red, redPawnsPath);
  red3 = new Pawns("red3", 86, 215, pawnsStartPosition.red, redPawnsPath);
  red4 = new Pawns("red4", 145, 215, pawnsStartPosition.red, redPawnsPath);

  green1 = new Pawns(
    "green1",
    365,
    170,
    pawnsStartPosition.green,
    greenPawnsPath
  );
  green2 = new Pawns(
    "green2",
    425,
    170,
    pawnsStartPosition.green,
    greenPawnsPath
  );
  green3 = new Pawns(
    "green3",
    366,
    215,
    pawnsStartPosition.green,
    greenPawnsPath
  );
  green4 = new Pawns(
    "green4",
    425,
    215,
    pawnsStartPosition.green,
    greenPawnsPath
  );

  blue1 = new Pawns("blue1", 87, 451, pawnsStartPosition.blue, bluePawnsPath);
  blue2 = new Pawns("blue2", 145, 450, pawnsStartPosition.blue, bluePawnsPath);
  blue3 = new Pawns("blue3", 87, 495, pawnsStartPosition.blue, bluePawnsPath);
  blue4 = new Pawns("blue4", 145, 495, pawnsStartPosition.blue, bluePawnsPath);

  yellow1 = new Pawns(
    "yellow1",
    366,
    456,
    pawnsStartPosition.yellow,
    yellowPawnsPath
  );
  yellow2 = new Pawns(
    "yellow2",
    425,
    456,
    pawnsStartPosition.yellow,
    yellowPawnsPath
  );
  yellow3 = new Pawns(
    "yellow3",
    366,
    500,
    pawnsStartPosition.yellow,
    yellowPawnsPath
  );
  yellow4 = new Pawns(
    "yellow4",
    425,
    500,
    pawnsStartPosition.yellow,
    yellowPawnsPath
  );
}

var TrackPawns = {
  red: [],
  green: [],
  blue: [],
  yellow: []
};

class Pawns {
  element = null;
  elementName = "";
  positionX = "";
  positionY = "";
  roomNumber = 0;
  travellingPaths = [];
  startPosition = {
    corX: 0,
    corY: 0
  };
  pawnsOnBoard = false;

  finishedJourney = false;

  constructor(
    elementID = "",
    positionX,
    positionY,
    startPosition,
    travellingPaths
  ) {
    this.element = document.getElementById(elementID);
    this.elementName = elementID.substring(0, elementID.length - 1);
    this.positionX = positionX;
    this.positionY = positionY;
    this.startPosition = startPosition;
    this.travellingPaths = travellingPaths;
    this.resetPosition();
  }

  getCurrentPosition() {
    let corX = this.element.offsetLeft;
    let corY = this.element.offsetTop;
    return { corX: corX, corY: corY };
  }

  trvel() {
    this.travellingPaths[this.roomNumber](this);
  }

  getPlayer() {
    return this.elementName;
  }

  setPosition(positions) {
    this.element.style.cssText =
      "top:" + positions.corY + "px;left:" + positions.corX + "px";
  }

  resetPosition() {
    this.element.style.cssText =
      "top:" + this.positionY + "px;left:" + this.positionX + "px";
    this.pawnsOnBoard = false;
  }

  onBoard() {
    this.element.style.cssText =
      "top:" +
      this.startPosition.corY +
      "px;left:" +
      this.startPosition.corX +
      "px";
    this.pawnsOnBoard = true;
  }
}

function movePawn(pawn) {
  if (
    diceRolled &&
    currentPlayer == pawn.getPlayer() &&
    pawn.finishedJourney != true
  ) {
    if (!pawn.pawnsOnBoard && diceResult == 6) {
      pawn.onBoard();
      TrackPawns[currentPlayer].push(pawn);
      resetDice();
      diceRolled = false;
    } else if (pawn.pawnsOnBoard && diceResult == 6) {
      currentRoom = pawn.roomNumber;
      for (; pawn.roomNumber < currentRoom + diceResult; ++pawn.roomNumber) {
        pawn.trvel();
      }
      diceRolled = false;
      checkPawnStatus(pawn);
      resetDice();
    } else if (pawn.pawnsOnBoard) {
      for (; pawn.roomNumber < currentRoom + diceResult; ++pawn.roomNumber) {
        pawn.trvel();
      }
      diceRolled = false;
      checkPawnStatus(pawn);
      resetDice();
      nextPlayer();
    }
  }
}

function checkPawnStatus(pawn) {
  if (pawn.roomNumber == 56) {
    pawn.finishedJourney = true;
  }
}

function nextPlayer() {
  ++playerNumber;
  if (playerNumber > 3) {
    playerNumber = 0;
    currentPlayer = players[playerNumber];
  } else {
    currentPlayer = players[playerNumber];
  }
  document.getElementById("player").innerText = currentPlayer;
  document.getElementById("player").style.backgroundColor = currentPlayer;
}

function rollDice() {
  if (diceRolled == false) {
    diceResult = Math.floor(Math.random() * 6 + 1);
    document.getElementById("dice").style.backgroundImage =
      "url(images/" + diceResult + ".jpg)";
    diceRolled = true;
    if (diceResult != 6 && TrackPawns[currentPlayer].length == 0) {
      setTimeout(() => {
        resetDice();
        diceRolled = false;
        nextPlayer();
      }, 2000);
    }
  }
}

function resetDice() {
  document.getElementById("dice").style.backgroundImage =
    "url(images/dice.png)";
}

var pawnsStartPosition = {
  red: { corX: 65, corY: 307 },
  green: { corX: 285, corY: 147 },
  blue: { corX: 225, corY: 525 },
  yellow: { corX: 443, corY: 366 }
};
