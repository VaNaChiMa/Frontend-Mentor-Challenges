/* Hamburger */
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".links");
const buttons = document.querySelectorAll(".dropbtn");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("active");
  hamburger.classList.toggle("active");
});

/* Accordion */

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let sibling = this.nextElementSibling;
    sibling.classList.toggle("active");

    // if (this.firstElementChild.innerText === "+") {
    //   this.firstElementChild.innerText = "-";
    // } else {
    //   this.firstElementChild.innerText = "+";
    // }
  });
}
