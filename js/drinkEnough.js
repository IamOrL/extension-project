const drinkEnough = () => {
  let drink = document.querySelector(".drink");
  let activeDrink = document.querySelector("#activeDrink");

  let drinkCount = 0;

  // --- Drink remind ---
  function waterTimer() {
    drinkCount++;
    setInterval(() => {
      console.log("Boire de l'eau");
    }, 10000);
  }
  // --- Add element ---
  activeDrink.addEventListener("click", () => {
    console.log(activeDrink.value);
    if (activeDrink.value == "true") {
      activeDrink.setAttribute("value", "false");
      waterTimer();
    } else {
      activeDrink.setAttribute("value", "true");
    }
  });

  //   drink.addEventListener("click", waterTimer);
  console.log("drinkEnough");
};

export default drinkEnough;
