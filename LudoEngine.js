function shuffleDice() {
  let diceResult = Math.floor(Math.random() * 6 + 1);
  document.getElementById("dice").style.backgroundImage =
    "url(images/" + diceResult + ".jpg)";
}
