const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');

const current_days = document.querySelectorAll('.current_day');
const previous_days = document.querySelectorAll('.previous_day');
const current_weeks = document.querySelectorAll('.current_week');
const previous_weeks = document.querySelectorAll('.previous_week');
const current_months = document.querySelectorAll('.current_month');
const previous_months = document.querySelectorAll('.previous_month');

daily.addEventListener('click', () => {
    current_days.forEach(current_day => {
        removeActiveClasses();
        current_day.classList.add('show');
    })
})

weekly.addEventListener('click', () => {
    current_days.forEach(current_day => {
        removeActiveClasses();
        current_day.classList.add('show');
    }) 
})

monthly.addEventListener('click', () => {
    current_days.forEach(current_day => {
        removeActiveClasses();
        current_day.classList.add('show');
    })
    
})

function removeActiveClasses() {
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