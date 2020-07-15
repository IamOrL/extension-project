let counter = document.querySelector(".compteur");
let countResult = document.querySelector(".compteur");
let body = document.querySelector("body");
let html = document.querySelector("html");
let drink = document.querySelector(".drink");
let showInfo = document.querySelector("#showInput");
let activeClick = document.querySelector("#activeClick");
let activeDrink = document.querySelector("#activeDrink");

// --- Input Switch ---
showInfo.addEventListener("click", () => {
  console.log(showInfo);
  if (showInfo.value == "true") {
    showInfo.setAttribute("value", "false");
  } else {
    showInfo.setAttribute("value", "true");
  }
});
activeClick.addEventListener("click", () => {
  console.log(activeClick.value);
  if (activeClick.value == "true") {
    activeClick.setAttribute("value", "false");
  } else {
    activeClick.setAttribute("value", "true");
  }
});
activeDrink.addEventListener("click", () => {
  console.log(activeDrink.value);
  if (activeDrink.value == "true") {
    activeDrink.setAttribute("value", "false");
  } else {
    activeDrink.setAttribute("value", "true");
  }
});

// --- Count number of click ---
let nbr = 0;
let tenMore = 10;

function count() {
  nbr++;
  counter = nbr;
  console.log(nbr);
  countResult.textContent = nbr;

  if (nbr == tenMore) {
    console.log("tu es à " + tenMore + " click");
    tenMore = tenMore + 10;
  }
}

// // --- Drink remind ---
function waterTimer() {
  setInterval(() => {
    console.log("Boire de l'eau");
  }, 10000);
}

drink.addEventListener("click", waterTimer);

html.addEventListener("click", count);
