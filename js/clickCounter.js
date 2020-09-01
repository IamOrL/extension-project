const clickCounter = () => {
  let counter = document.querySelector(".compteur");
  let countResult = document.querySelector(".compteur");
  let activeClick = document.querySelector("#activeClick");
  let html = document.querySelector("html");

  // --- Count number of click ---
  let nbr = -1;
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

  // --- Add element ---
  activeClick.addEventListener("click", () => {
    console.log(activeClick.value);

    if (activeClick.value == "false") {
      activeClick.setAttribute("value", "true");
      html.addEventListener("click", count);
    } else {
      activeClick.setAttribute("value", "false");
      html.removeEventListener("click", count);
    }
  });
  //   html.addEventListener("click", count);
  console.log("clickCounter");
};

export default clickCounter;
