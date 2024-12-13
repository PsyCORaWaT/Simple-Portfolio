
let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.nav-list');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navList.classList.toggle('open')
}

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{
    delay:200,
    origin: 'top'
})

sr.reveal('.main-img',{
    delay:450,
    origin: 'right'
})

sr.reveal('.icons',{
    delay:200,
    origin: 'left'
})

