const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');
const timeBtns = document.querySelectorAll('.timeBtn')

const current_days = document.querySelectorAll('.current_day');
const previous_days = document.querySelectorAll('.previous_day');
const current_weeks = document.querySelectorAll('.current_week');
const previous_weeks = document.querySelectorAll('.previous_week');
const current_months = document.querySelectorAll('.current_month');
const previous_months = document.querySelectorAll('.previous_month');


weekly.classList.add("active")

daily.addEventListener('click', () => {
    removeActiveClasses();

    timeBtns.forEach(timeBtn => {
        timeBtn.classList.remove("active")
    })

    daily.classList.add("active")


    current_days.forEach(current_day => {
        current_day.classList.add('show');
    })
    previous_days.forEach(previous_day => {
        previous_day.classList.add('show');
    })


    // weekly.classList.add("start");

})

weekly.addEventListener('click', () => {
    removeActiveClasses();

    timeBtns.forEach(timeBtn => {
        timeBtn.classList.remove("active")
    })

    weekly.classList.add("active")


    current_weeks.forEach(current_week => {
        current_week.classList.add('show');
    })
    previous_weeks.forEach(previous_week => {
        previous_week.classList.add('show');
    })
    
})

monthly.addEventListener('click', () => {
    removeActiveClasses();

    timeBtns.forEach(timeBtn => {
        timeBtn.classList.remove("active")
    })

    monthly.classList.add("active")


    current_months.forEach(current_month => {
        current_month.classList.add('show');
    })
    previous_months.forEach(previous_month => {
        previous_month.classList.add('show');
    })
    

})

function removeActiveClasses() {
    // daily.style.color = "hsl(235, 45%, 61%)";
    // weekly.style.color = "hsl(235, 45%, 61%)";
    // monthly.style.color = "hsl(235, 45%, 61%)";

    current_days.forEach(current_day => {
        current_day.classList.remove('show')
    })
    previous_days.forEach(previous_day => {
        previous_day.classList.remove('show')
    })
    current_weeks.forEach(current_week => {
        current_week.classList.remove('show')
    })
    previous_weeks.forEach(previous_week => {
        previous_week.classList.remove('show')
    })
    current_months.forEach(current_month => {
        current_month.classList.remove('show')
    })
    previous_months.forEach(current_month => {
        current_month.classList.remove('show')
    })
}