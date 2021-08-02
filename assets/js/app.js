let viewModeBtn = document.getElementById('flexSwitchCheckDefault');

let root = document.documentElement;
console.dir(root);

let body = document.querySelector('body');
let nav = document.querySelector('nav');
let cards = document.querySelectorAll('.card');
let links = document.querySelectorAll('.link');

viewModeBtn.addEventListener('change', () => {
    swapBackGrounds();
    swapText();
})

function swapBackGrounds() {
    if (body.classList.contains('bg-dark')) {
        body.classList.remove('bg-dark');
        body.classList.add('bg-light');
        nav.classList.add('navbar-light');
        nav.classList.remove('navbar-dark');
        cards.forEach(card => {
            card.classList.remove('bg-dark');
            card.classList.add('bg-light');
        });
        links.forEach(link => {
            link.classList.remove('link-dark');
            link.classList.add('link-light');
        });
    } else {
        body.classList.add('bg-dark');
        body.classList.remove('bg-light');
        nav.classList.remove('navbar-light');
        nav.classList.add('navbar-dark');
        cards.forEach(card => {
            card.classList.add('bg-dark');
            card.classList.remove('bg-light');
        });
        links.forEach(link => {
            link.classList.add('link-dark');
            link.classList.remove('link-light');
        });
    }
}

function swapText() {
    if (body.classList.contains('text-white')) {
        body.classList.remove('text-white');
        body.classList.add('text-dark');
        root.style.setProperty('--primary', '#EC5B5B');
        root.style.setProperty('--secondary', '#0C8A8A');
    } else {
        body.classList.add('text-white');
        body.classList.remove('text-dark');
        root.style.setProperty('--primary', '#F5A9A9');
        root.style.setProperty('--secondary', '#10BCBC');
    }
}