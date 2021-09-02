
var shareSocial = document.querySelector('.shareBtn');
var colorArrow = document.querySelector('.colorBtn');
var flexShow = document.querySelector('.shareSection');


shareSocial.addEventListener('click', () => {
    flexShow.classList.toggle('showShareSection');
    // colorArrow.setAttribute('src', 'images/icon-share.svg');
    if (flexShow.classList.contains('showShareSection')) {
        shareSocial.style.backgroundColor = 'hsl(214, 17%, 51%)';
        colorArrow.setAttribute('src', 'images/icon-share - light.svg');
    } else {
        shareSocial.style.backgroundColor = 'hsl(210, 46%, 95%)';
        colorArrow.setAttribute('src', 'images/icon-share.svg');
    }
})

if (colorArrow.setAttribute('src', 'images/icon-share - light.svg')) {
    shareSocial.style.backgroundColor = 'hsl(214, 17%, 51%)';
} else {
    shareSocial.style.backgroundColor = 'hsl(210, 46%, 95%)';
    colorArrow.setAttribute('src', 'images/icon-share.svg');
}

    

