// Get elements

const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".modalBtn");
const closeBtn = document.querySelector(".closeBtn");


modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', clickOutside);

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function clickOutside(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
    
}