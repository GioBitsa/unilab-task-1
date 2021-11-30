

const openBar = document.getElementById('bar');
const closeBar = document.getElementById('bar-close');
const menu = document.getElementById('menu');

openBar.addEventListener('click', () => {

    menu.classList.add('open');
    
})

closeBar.addEventListener('click', () => {

    menu.classList.remove('open');
    
})