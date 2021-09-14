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
    changeColor.bind(null)();
})

for (const tip of [tip5, tip10, tip15, tip25, tip50]) {
    tip.addEventListener('click', function() {
            onTipPercentChange.bind(null, parseInt(tip.innerHTML))();
            tipCustom.style.display = "inline";
            setManual.style.display = "none";
            changeColor.bind(tip)();     
        }
    );
}

window.lastButtonClick = null;
function changeColor() {
    if (window.lastButtonClick) {
        window.lastButtonClick.classList.remove("activate")
    }
    if(window == this) {
        window.lastButtonClick = null;
    } else {
        window.lastButtonClick = this;
    }
    if (window.lastButtonClick) {
    window.lastButtonClick.classList.add("activate");
    }
}

setManual.addEventListener('input', function() {
    onTipPercentChange(setManual.value);
    changeColor.bind(null)();
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
    changeColor.bind(null)();
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
