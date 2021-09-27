const slides = document.querySelectorAll('.slide');

const slide_1 = document.querySelector('.slider_1');
const slide_2 = document.querySelector('.slider_2');

const prev = document.querySelector('.left-arrow');
const next = document.querySelector('.right-arrow');

let counter = 1;

next.addEventListener("click", function () {
  counter = counter + 1;

  if (counter > slides.length - 1) {
    counter = 0;
    slide_2.classList.add('active');
    slide_1.style.display = "none";
  } else {
    slide_2.classList.remove('active');
    slide_1.style.display = "flex";
  }

});

prev.addEventListener("click", function () {
  
  counter = counter - 1;

  if (counter < 1) {
    counter = slides.length;
    slide_2.classList.add('active');
    slide_1.style.display = "none";
  } else {
    slide_2.classList.remove('active');
    slide_1.style.display = "flex";
  }
  
});
