const diceValue = document.getElementById("dice");
const rollDiceBtn = document.getElementById("roll-dice-btn");
const rollList = document.getElementById("roll-list");
let value = 0;
const increment = 1;
const newLi = document.createElement("li");

const rollHistory = [];

rollDiceBtn.addEventListener("click", () => {
  let randomValue = Math.random();
  value += increment;
  let result = "";
  if (randomValue < 0.15) {
    result = "⚀";
  } else if (randomValue > 0.15 && randomValue < 0.35) {
    result = "⚁";
  } else if (randomValue > 0.35 && randomValue < 0.55) {
    result = "⚂";
  } else if (randomValue > 0.55 && randomValue < 0.75) {
    result = "⚃";
  } else if (randomValue > 0.75 && randomValue < 0.85) {
    result = "⚄";
  } else {
    result = "⚅";
  }
  diceValue.innerHTML = result;
  rollHistory.push(`<div class="li-item">
      <p>roll ${value}: ${result}</p>
    </div>`);
  rollList.appendChild(newLi);
  newLi.innerHTML = rollHistory.join("");
  console.log(rollHistory);
});
