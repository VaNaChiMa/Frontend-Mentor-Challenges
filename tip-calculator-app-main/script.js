const bill = document.querySelector('#bill');
const nrOfPeople = document.querySelector('#nrOfPeople');
const tip5 = document.querySelector('#tip5');
const tip10 = document.querySelector('#tip10');
const tip15 = document.querySelector('#tip15');
const tip25 = document.querySelector('#tip25');
const tip50 = document.querySelector('#tip50');
const tips = document.querySelectorAll('.yourRate')
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
    setManual.value = "";
})

tip5.addEventListener('click', function() {
    onTipPercentChange.bind(null, 5);
    changeColor();
}

);

// tip5.addEventListener('click', () => {
//     tip5.classList.add('activate');
// })
tip10.addEventListener('click', onTipPercentChange.bind(null, 10));
tip15.addEventListener('click', onTipPercentChange.bind(null, 15));
tip25.addEventListener('click', onTipPercentChange.bind(null, 25));
tip50.addEventListener('click', onTipPercentChange.bind(null, 50));

function changeColor() {
    tips.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.currentTarget.style.backgroundColor = "#9fe8df";
            e.currentTarget.style.color = "hsl(183, 100%, 15%)";
            setTimeout(() => {
                item.currentTarget.style.backgroundColor = 'hsl(183, 100%, 15%)'
                item.currentTarget.style.color = 'white'
            }, 2000) 
        })
    })
}

setManual.addEventListener('input', function() {
    onTipPercentChange(setManual.value);
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

function onTipPercentChange(tipPercent) {
    const calc = calcTipAmount(tipPercent, bill.value, nrOfPeople.value);
    tipAmount.innerHTML = calc.tipAmount;
    total.innerHTML = calc.total;
    faceControl();
}

function calcTipAmount(tipPercent, bill, nrOfPeople) {
    bill = Number(bill);
    nrOfPeople = Number(nrOfPeople);
    let tip = (tipPercent / 100) * (bill / nrOfPeople);
    let totalBill = (bill / nrOfPeople + tip);
    return {
        tipAmount: round100(tip),
        total: round100(totalBill)
    };
}

function round100(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}
