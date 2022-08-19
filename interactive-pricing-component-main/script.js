const range = document.getElementById("range");
const price = document.querySelector(".price");
const views = document.querySelector(".pageviews");
const toggle = document.querySelector(".toggler");
const discount = document.querySelector(".checkbox");
const pageViews = ["10K", "50K", "100K", "500K", "1M"];
const perMonth = [8, 12, 16, 24, 36];
let isYearly = false;

range.addEventListener("input", () => {
  updatePrice();
  views.innerHTML = pageViews[range.value];
});

toggle.addEventListener("change", function () {
  if (isYearly == false) {
    isYearly = true;
  } else {
    isYearly = false;
  }
  updatePrice();
});

function updatePrice() {
  if (isYearly) {
    price.innerHTML = (perMonth[range.value] * 0.75).toFixed(2);
  } else {
    price.innerHTML = perMonth[range.value].toFixed(2);
  }
}

for (let e of document.querySelectorAll(
  'input[type="range"].slider-progress'
)) {
  e.style.setProperty("--value", e.value);
  e.style.setProperty("--min", e.min == "" ? "0" : e.min);
  e.style.setProperty("--max", e.max == "" ? "100" : e.max);
  e.addEventListener("input", () => e.style.setProperty("--value", e.value));
}
