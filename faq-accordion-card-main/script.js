

const accordion = document.querySelectorAll('.accordion');
      window.currentIsActive = null;

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        if (window.currentIsActive && window.currentIsActive != this) {
            window.currentIsActive.classList.remove('active');
            window.currentIsActive.nextElementSibling.style.display = 'none';
        }

        window.currentIsActive = this;

        
        let panel = this.nextElementSibling;
        this.classList.toggle('active');

        if (panel.style.display === 'block') {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    })

}
