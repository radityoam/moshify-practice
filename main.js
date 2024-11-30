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

function updateSeachTextVisibility() {
  const searchText = document.querySelector('.input-group__search');
  if (window.innerWidth < 678) {
    searchText.classList.add('hidden');
  } else {
    searchText.classList.remove('hidden');
  }
}

updateSeachTextVisibility()

window.addEventListener('resize', updateSeachTextVisibility);