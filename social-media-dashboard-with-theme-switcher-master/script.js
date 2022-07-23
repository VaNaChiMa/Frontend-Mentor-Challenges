const checkbox = document.getElementById("checkbox");
const h1 = document.querySelector(".title h1");
const numbers = document.querySelectorAll(".totalNumber");
const followers = document.querySelectorAll(".Followers");
const boards = document.querySelectorAll(".board");
const overviews = document.querySelectorAll(".overview");
const overviewTitle = document.querySelector(".overview_title h2");
const ball = document.querySelector(".ball");
const label = document.querySelector(".label");
const switcherLabel = document.querySelector(".toggle p");
const bgTop = document.querySelector(".bg-top");

checkbox.addEventListener("change", function () {
  document.body.classList.toggle("light");
  h1.classList.toggle("light");
  overviewTitle.classList.toggle("light");
  ball.classList.toggle("light");
  label.classList.toggle("light");
  bgTop.classList.toggle("light");

  if (switcherLabel.textContent === "Light mode") {
    switcherLabel.textContent = "Dark mode";
  } else {
    switcherLabel.textContent = "Light mode";
  }

  numbers.forEach(function (number) {
    number.classList.toggle("light");
  });
  followers.forEach(function (follower) {
    follower.classList.toggle("light");
  });
  boards.forEach(function (board) {
    board.classList.toggle("light");
  });
  overviews.forEach(function (overview) {
    overview.classList.toggle("light");
  });
});
