// Hamburger menu
var deButton = document.querySelector(".Hamburger nav button");

deButton.addEventListener("click", openMenu);

function openMenu() {
  var deHeader = document.querySelector("body > header");
  deHeader.classList.toggle("menuOpen");
}


// Reviews
//De id's oproepen
const reviews = document.getElementsByClassName("reviewtje");
const reviewsLabel = document.querySelectorAll(".submit-review-label");

console.log(document.getElementById("review-submit"));
console.log(document.getElementById("submit-text"));

//Na het klikken verschijnt de pop-up, zodra iemand klikt op de knop word het zichtbaar met initial
document.getElementById("review-submit").addEventListener("click", () => {
  document.getElementById("submit-text").style.display = "initial";
});

// Vervolgens display none in css toegepast.