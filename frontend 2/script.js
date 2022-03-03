//nav menu
// kruisje animatie en open menu
console.log("hallo");
var deButton = document.querySelector("nav button");

deButton.addEventListener("click", openMenu);

function openMenu() {
  var deHeader = document.querySelector("body > header");
  deHeader.classList.toggle("menuOpen");
}

// console.log("hallo");
// const deButton = document.querySelector("nav button");

// deButton.addEventListener("click", openMenu);

// const openMenu = () => {
//   const deHeader = document.querySelector("body > header");
//   deHeader.classList.toggle("menuOpen");
// }