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

  if (randomValue < 0.15) {
    diceValue.innerHTML = "⚀";
    let rollObject = {
      roll: value,
      value: "⚀",
    };
    rollHistory.push(`<div>
      <p>roll:${rollObject.roll}</p>
      <p>${rollObject.value}</p>
    </div>`);
  } else if (randomValue > 0.15 && randomValue < 0.35) {
    diceValue.innerHTML = "⚁";
    let rollObject = {
      roll: value,
      value: "⚁",
    };
    rollHistory.push(`<div>
      <p>roll:${rollObject.roll}</p>
      <p>${rollObject.value}</p>
    </div>`);
  } else if (randomValue > 0.35 && randomValue < 0.55) {
    diceValue.innerHTML = "⚂";
    let rollObject = {
      roll: value,
      value: "⚂",
    };
    rollHistory.push(`<div>
      <p>roll:${rollObject.roll}</p>
      <p>${rollObject.value}</p>
    </div>`);
  } else if (randomValue > 0.55 && randomValue < 0.75) {
    diceValue.innerHTML = "⚃";
    let rollObject = {
      roll: value,
      value: "⚃",
    };
    rollHistory.push(`<div>
    <p>roll:${rollObject.roll}</p>
    <p>${rollObject.value}</p>
  </div>`);
  } else if (randomValue > 0.75 && randomValue < 0.85) {
    diceValue.innerHTML = "⚄";
    let rollObject = {
      roll: value,
      value: "⚄",
    };
    rollHistory.push(`<div>
      <p>roll:${rollObject.roll}</p>
      <p>${rollObject.value}</p>
    </div>`);
  } else {
    diceValue.innerHTML = "⚅";
    let rollObject = {
      roll: value,
      value: "⚅",
    };
    rollHistory.push(`<div>
      <p>roll:${rollObject.roll}</p>
      <p>${rollObject.value}</p>
    </div>`);
  }
  rollList.appendChild(newLi);
  newLi.innerHTML = rollHistory.join("");
  console.log(rollHistory);
});
