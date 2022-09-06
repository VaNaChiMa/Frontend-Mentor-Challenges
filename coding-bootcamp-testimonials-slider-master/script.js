const developers = [
  {
    name: "Tanya Sinclair",
    role: "UX Engineer",
    imgUrl: "images/image-tanya.jpg",
    text: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
  },
  {
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    imgUrl: "images/image-john.jpg",
    text: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
  },
];

const sliderImg = document.querySelector("slider__image");
const image = document.querySelector(".image");
const slideText = document.querySelector(".slideText");
const slideName = document.querySelector(".slideName");
const slideRole = document.querySelector(".slideRole");

const prev = document.querySelector(".left-arrow");
const next = document.querySelector(".right-arrow");

let counter = 0;

next.addEventListener("click", function () {
  counter = counter + 1;
  if (counter > developers.length - 1) {
    counter = 0;
    image.src = developers[counter].imgUrl;
    slideName.textContent = developers[counter].name;
    slideRole.textContent = developers[counter].role;
    slideText.textContent = `“ ${developers[counter].text} “`;
  } else {
    image.src = developers[counter].imgUrl;
    slideName.textContent = developers[counter].name;
    slideRole.textContent = developers[counter].role;
    slideText.textContent = `“ ${developers[counter].text} “`;
  }
  // console.log(`next ${counter}`);
});

prev.addEventListener("click", function () {
  counter = counter + 1;
  if (counter > developers.length - 1) {
    counter = 0;
    image.src = developers[counter].imgUrl;
    slideName.textContent = developers[counter].name;
    slideRole.textContent = developers[counter].role;
    slideText.textContent = `“ ${developers[counter].text} “`;
  } else {
    image.src = developers[counter].imgUrl;
    slideName.textContent = developers[counter].name;
    slideRole.textContent = developers[counter].role;
    slideText.textContent = `“ ${developers[counter].text} “`;
  }
  // console.log(`prev ${counter}`);
});
