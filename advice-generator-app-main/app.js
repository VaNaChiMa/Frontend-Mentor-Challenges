const adviceEl = document.getElementById("advice");
const adviceBtn = document.getElementById("dice");
const adviceId = document.querySelector(".adviceId");

adviceBtn.addEventListener("click", generateAdvice);

generateAdvice();

// Using Async/await

async function generateAdvice() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://api.adviceslip.com/advice", config);

  const data = await res.json();

  adviceEl.innerHTML = `"${data.slip.advice}"`;
  adviceId.innerHTML = data.slip.id;
}

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com/", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
