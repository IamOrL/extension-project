import clickCounter from "./clickCounter.js";
import drinkEnough from "./drinkEnough.js";

document.addEventListener("DOMContentLoaded", () => {
  let showInput = document.querySelector("#showInput");
  let inputContainer = document.querySelector(".input-container");

  activeClick.value = "false";
  activeDrink.value = "false";

  showInput.addEventListener("click", () => {
    if (showInput.value == "false") {
      showInput.setAttribute("value", "true");
      inputContainer.style.display = "block";
    } else {
      showInput.setAttribute("value", "false");
      inputContainer.style.display = "none";
    }
    console.log(showInput);
  });

  clickCounter();
  drinkEnough();
});
