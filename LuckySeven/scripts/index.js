const onPlayHandler = () => {
  // Validate Input
  const start = document.getElementById("startingBet");
  const startingBet = Number(start.value);
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.parentElement.classList.add("hidden");
  let remainingFunds = startingBet;
  let rollCount = 0,
    rollCountAtMax = 0,
    max = startingBet;
  try {
    if (remainingFunds <= 0) {
      remainingFunds.value = "";
      throw "Sorry, you cannot play with negative funds";
    }

    if (remainingFunds === "") {
      throw "Please enter the amount you would like to bet";
    }

    // Play the Game
    while (remainingFunds > 0) {
      const roll1 = rollDice();
      const roll2 = rollDice();
      rollCount++;
      if (roll1 + roll2 === 7) {
        remainingFunds = remainingFunds + 4;
      } else {
        remainingFunds--;
      }

      if (remainingFunds > max) {
        max = remainingFunds;
        rollCountAtMax = rollCount;
      }
      //   console.log("playing...", remainingFunds);
    }
    // Display the Results
    const results = document.getElementById("results");
    document.getElementById("table-startingBet").innerHTML =
      startingBet + ".00";
    document.getElementById("table-totalRolls").innerHTML = rollCount;
    document.getElementById("table-highestAmount").innerHTML = max + ".00";
    document.getElementById("table-rollCountAtMax").innerHTML = rollCountAtMax;
    document.getElementById("play-button").innerHTML = "Play Again ?";

    results.classList.remove("hidden");
  } catch (err) {
    // Figure out how to display the error message
    console.log("Error: ", err);
    start.value = "";
    errorMessage.innerHTML = err;
    errorMessage.parentElement.classList.remove("hidden");
  }
};

const rollDice = () => {
  return Math.floor(Math.random() * 6) + 1;
};
