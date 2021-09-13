const bill = document.querySelector('#bill');
const nrOfPeople = document.querySelector('#nrOfPeople');
const tip5 = document.querySelector('#tip5');
const tip10 = document.querySelector('#tip10');
const tip15 = document.querySelector('#tip15');
const tip25 = document.querySelector('#tip25');
const tip50 = document.querySelector('#tip50');
const tipCustom = document.querySelector('#custom');
const errorMsg = document.querySelector('.people__text p');
const setManual = document.querySelector('.setManual');

const tipAmount = document.querySelector('.tipAmount__sum_display');
const total = document.querySelector('.total__sum_display');
const reset = document.querySelector('.reset');


/* RESET */
reset.addEventListener('click', function() {
    bill.value = "";
    nrOfPeople.value = "";
    tipAmount.innerHTML = "0.00";
    total.innerHTML = "0.00";
    errorMsg.classList.remove('errorMsg');
    nrOfPeople.classList.remove('errorBorder');
    setManual.style.display = "none";
    tipCustom.style.display = "inline";
})

tip5.addEventListener('click', function() {
    let tip = (5/100) * (Number(bill.value) / Number(nrOfPeople.value));
    let totalBill = (Number(bill.value) / Number(nrOfPeople.value) + tip);
    tipAmount.innerHTML = Math.round((tip + Number.EPSILON) * 100) / 100;
    total.innerHTML = Math.round((totalBill + Number.EPSILON) * 100) / 100;
    faceControl()
})

tip10.addEventListener('click', function() {
    let tip = (10/100) * (Number(bill.value) / Number(nrOfPeople.value));
    let totalBill = (Number(bill.value) / Number(nrOfPeople.value) + tip);
    tipAmount.innerHTML = Math.round((tip + Number.EPSILON) * 100) / 100;
    total.innerHTML = Math.round((totalBill + Number.EPSILON) * 100) / 100;
    faceControl()
})

tip15.addEventListener('click', function() {
    let tip = (15/100) * (Number(bill.value) / Number(nrOfPeople.value));
    let totalBill = (Number(bill.value) / Number(nrOfPeople.value) + tip);
    tipAmount.innerHTML = Math.round((tip + Number.EPSILON) * 100) / 100;
    total.innerHTML = Math.round((totalBill + Number.EPSILON) * 100) / 100;
    faceControl()
})

tip25.addEventListener('click', function() {
    let tip = (25/100) * (Number(bill.value) / Number(nrOfPeople.value));
    let totalBill = (Number(bill.value) / Number(nrOfPeople.value) + tip);
    tipAmount.innerHTML = Math.round((tip + Number.EPSILON) * 100) / 100;
    total.innerHTML = Math.round((totalBill + Number.EPSILON) * 100) / 100;
    faceControl()
})

tip50.addEventListener('click', function() {
    let tip = (50/100) * (Number(bill.value) / Number(nrOfPeople.value));
    let totalBill = (Number(bill.value) / Number(nrOfPeople.value) + tip);
    tipAmount.innerHTML = Math.round((tip + Number.EPSILON) * 100) / 100;
    total.innerHTML = Math.round((totalBill + Number.EPSILON) * 100) / 100;
    faceControl()
})

function faceControl() {
    if (nrOfPeople.value === "") {
        errorMsg.classList.add('errorMsg');
        nrOfPeople.classList.add('errorBorder');
        tipAmount.innerHTML = "0.00";
        total.innerHTML = "0.00";
    } 
    setTimeout(() => {
        errorMsg.classList.remove('errorMsg');
        nrOfPeople.classList.remove('errorBorder');
    }, 3000)
    
}

tipCustom.addEventListener('click', function() {
    tipCustom.style.display = "none";
    setManual.style.display = "inline";
})

setManual.addEventListener('input', function() {
    let tip = (Number(setManual.value)/100) * (Number(bill.value) / Number(nrOfPeople.value));
    let totalBill = (Number(bill.value) / Number(nrOfPeople.value) + tip);
    tipAmount.innerHTML = Math.round((tip + Number.EPSILON) * 100) / 100;
    total.innerHTML = Math.round((totalBill + Number.EPSILON) * 100) / 100;
    faceControl()
})