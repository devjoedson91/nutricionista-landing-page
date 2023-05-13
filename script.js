// let count = 1;

// document.getElementById('radio-1').checked = true;

// setInterval(nextImage, 4000);

// function nextImage() {
//     count ++;

//     if (count > 4) count = 1;

//     document.getElementById('radio-'+count).checked = true;
// }

window.sr = ScrollReveal({reset: true});

sr.reveal('#ebooks-section-1', {duration: 2000});
sr.reveal('#ebooks-section-2', {duration: 2000});
sr.reveal('#professional-perfil', {duration: 2000});

const navButton = document.querySelector('.navButton');

const navMenu = document.querySelector('.nav-menu');

const iconButton = document.querySelector('.bi');

navButton.addEventListener('click', e => {

    navMenu.classList.toggle('active');

    if (iconButton.className.endsWith('bi-list')) {

        iconButton.classList.replace('bi-list', 'bi-x-lg');
    } else {
        iconButton.classList.replace('bi-x-lg', 'bi-list');
    }

});