const slides = document.querySelectorAll('.slide');

const slide_1 = document.querySelector('.slider_1');
const slide_2 = document.querySelector('.slider_2');

const prev = document.querySelector('.left-arrow');
const next = document.querySelector('.right-arrow');

let counter = 0;
console.log(slides)


next.addEventListener("click", function () {
  // slide_2.classList.add('active');
  // slide_1.style.display = "none";

  counter = counter + 1;

  if (counter > slides.length) {
    counter = 0;
  }

  console.log(counter);
});

prev.addEventListener("click", function () {
  // slide_2.classList.add('active');
  // slide_1.style.display = "none";

  counter = counter - 1;

  if (counter < 0) {
    counter = slides.length;
  }
});
