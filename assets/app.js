const diceValue = document.getElementById("dice");
const rollDiceBtn = document.getElementById("roll-dice-btn");

rollDiceBtn.addEventListener("click", () => {
  let randomValue = Math.random();

  if (randomValue < 0.15) {
    diceValue.innerHTML = "⚀";
  } else if (randomValue > 0.15 && randomValue < 0.35) {
    diceValue.innerHTML = "⚁";
  } else if (randomValue > 0.35 && randomValue < 0.55) {
    diceValue.innerHTML = "⚂";
  } else if (randomValue > 0.55 && randomValue < 0.75) {
    diceValue.innerHTML = "⚃";
  } else if (randomValue > 0.75 && randomValue < 0.85) {
    diceValue.innerHTML = "⚄";
  } else {
    diceValue.innerHTML = "⚅";
  }
});
