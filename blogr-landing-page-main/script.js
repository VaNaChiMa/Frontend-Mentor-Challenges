const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".links");
const header = document.querySelector("header");

hamburger.addEventListener("click", () => {
  navigation.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// const myAcordion = document.querySelectorAll(".dropbtn");

// for (var i = 0; i < myAcordion.length; i++) {
//   myAcordion[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }

//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }
