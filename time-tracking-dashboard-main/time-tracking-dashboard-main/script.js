const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');

const current_days = document.querySelectorAll('.current_day');
const previous_days = document.querySelectorAll('.previous_day');
const current_weeks = document.querySelectorAll('.current_week');
const previous_weeks = document.querySelectorAll('.previous_week');
const current_months = document.querySelectorAll('.current_month');
const previous_months = document.querySelectorAll('.previous_month');

// daily.addEventListener('mouseover', () => {
//     daily.style.color = "#fff";
// })

// daily.addEventListener('mouseout', () => {
//     daily.style.color = "#fff";
// })

daily.addEventListener('click', () => {
    removeActiveClasses();
    current_days.forEach(current_day => {
        current_day.classList.add('show');
    })
    previous_days.forEach(previous_day => {
        previous_day.classList.add('show');
    })
    daily.style.color = "#fff";

})

weekly.addEventListener('click', () => {
    removeActiveClasses();
    current_weeks.forEach(current_week => {
        current_week.classList.add('show');
    })
    previous_weeks.forEach(previous_week => {
        previous_week.classList.add('show');
    })
    weekly.style.color = "#fff"
})

monthly.addEventListener('click', () => {
    removeActiveClasses();
    current_months.forEach(current_month => {
        current_month.classList.add('show');
    })
    previous_months.forEach(previous_month => {
        previous_month.classList.add('show');
    })
    monthly.style.color = "#fff"
    
})

function removeActiveClasses() {
    daily.style.color = "hsl(235, 45%, 61%)";
    weekly.style.color = "hsl(235, 45%, 61%)";
    monthly.style.color = "hsl(235, 45%, 61%)";

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