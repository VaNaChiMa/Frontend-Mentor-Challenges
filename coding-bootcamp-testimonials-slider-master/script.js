const slides = document.querySelectorAll(".slide");

const slide_1 = document.querySelector(".slider_1");
const slide_2 = document.querySelector(".slider_2");

const prev = document.querySelectorAll(".left-arrow");
const next = document.querySelectorAll(".right-arrow");

let counter = 1;

next.forEach(function (item) {
  item.addEventListener("click", function () {
    counter = counter + 1;
    console.log(`next ${counter}`);
    if (counter > slides.length - 1) {
      counter = 0;
      slide_2.classList.add("active");
      slide_1.style.display = "none";
    } else {
      slide_2.classList.remove("active");
      slide_1.style.display = "flex";
    }
  });
});

prev.forEach(function (item) {
  item.addEventListener("click", function () {
    counter = counter - 1;
    console.log(`prev ${counter}`);
    if (counter < 1) {
      counter = slides.length;
      slide_2.classList.add("active");
      slide_1.style.display = "none";
    } else {
      slide_2.classList.remove("active");
      slide_1.style.display = "flex";
    }
  });
});
