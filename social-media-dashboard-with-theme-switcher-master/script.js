const checkbox = document.getElementById("checkbox");
const h1 = document.querySelector(".title h1");
const numbers = document.querySelector(".totalNumber");

checkbox.addEventListener("change", function () {
  document.body.classList.toggle("light");
  h1.classList.toggle("light");
  numbers.classList.toggle("light");
});
