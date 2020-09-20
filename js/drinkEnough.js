const drinkEnough = () => {
  let drink = document.querySelector(".drink");
  let activeDrink = document.querySelector("#activeDrink");

  let drinkCount = 0;

  let intervalDrink =     setInterval(() => { console.log("Boire de l'eau")}, 1000);

  // --- Drink remind ---
  function waterTimer() {
    drinkCount++;
    intervalDrink
  }
  // --- Add element ---
  activeDrink.addEventListener("click", () => {
    if (activeDrink.value == "false") {
      activeDrink.setAttribute("value", "true");
      waterTimer();
    } else {
      activeDrink.setAttribute("value", "false");
      clearInterval(intervalDrink);
    }
    console.log("Drink = " + activeDrink.value);
  });

  //   drink.addEventListener("click", waterTimer);
  console.log("drinkEnough");
};

export default drinkEnough;
