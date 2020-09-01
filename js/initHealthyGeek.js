import clickCounter from "./clickCounter.js";
import drinkEnough from "./drinkEnough.js";

document.addEventListener("DOMContentLoaded", () => {
  let showInfo = document.querySelector("#showInput");

  showInfo.addEventListener("click", () => {
    console.log(showInfo);
    if (showInfo.value == "true") {
      showInfo.setAttribute("value", "false");
    } else {
      showInfo.setAttribute("value", "true");
    }
  });

  clickCounter();
  drinkEnough();
});
