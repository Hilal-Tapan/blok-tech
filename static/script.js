// Hamburger menu
console.log("hallo");
var deButton = document.querySelector(".Hamburger nav button");

deButton.addEventListener("click", openMenu);

function openMenu() {
  var deHeader = document.querySelector("body > header");
  deHeader.classList.toggle("menuOpen");
}


// Reviews
const reviews = document.getElementsByClassName("reviewtje");
const reviewsLabel = document.querySelectorAll(".submit-review-label");

// for (let i = 0; i < reviews.length; i++) {
//   reviews[i].addEventListener("submit", addReviewText);
// }

reviewsLabel.forEach((review) => {
  review.style.display = "none";
});

console.log(document.getElementById("review-submit"));
console.log(document.getElementById("submit-text"));

document.getElementById("review-submit").addEventListener("click", () => {
  document.getElementById("submit-text").style.display = "initial";
});

// display none in css

// function addReviewText() {
//   document.getElementById("submit-text").style.display = "initial";
// }
