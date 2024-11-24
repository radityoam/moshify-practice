const collapsibles = document.querySelectorAll(".collapsible")
collapsibles.forEach((item) => {
    item.addEventListener("click", function (event) {
        if (event.target.closest(".nav__toggle")) {
            this.classList.toggle("collapsible--expanded");
        }
    });
});

const collapsible = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) => {
  item.addEventListener("click", function (event) {
    if (event.target.closest(".collapsible__header")) {
        this.classList.toggle("collapsible--expanded");
    }
  });
});