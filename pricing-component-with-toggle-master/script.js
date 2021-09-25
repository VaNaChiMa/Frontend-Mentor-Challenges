const control = document.querySelector('#toggle');
const price = document.querySelector('.plans');
console.log(price);

control.addEventListener('change', (e) => {
    price.classList.toggle('show-annually');
});