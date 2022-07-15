const openMenu = document.querySelector('.logo1 .hamburger');
const closeMenu = document.querySelector('nav .cancel');
const nav = document.querySelector('nav');
const form = document.querySelector('#contact form');
const nameLabel = document.querySelector('#contact form .name');
const name = document.querySelector('#name');
const emailLabel = document.querySelector('#contact form .email');
const email = document.querySelector('#email');
const msgLabel = document.querySelector('#contact form .message');
const textarea = document.querySelector('#contact textarea');



openMenu.addEventListener('click', ()=> {
    nav.style.top = '0';
});

closeMenu.addEventListener('click', () => {
    nav.style.top = '-100vh';
});

form.addEventListener('keyup', (e) => {
    if(textarea.value.length > 0) {
        msgLabel.style.color = '#CA8A04';
        msgLabel.textContent = 'ENTER MESSAGE';
    } else {
        msgLabel.textContent = '';
    }

    if(name.value.length > 0){
        nameLabel.style.color = '#CA8A04';
    } else {
        nameLabel.style.color = '#000';
    }

    if(email.value.length > 0){
        emailLabel.style.color = '#CA8A04';
    } else {
        emailLabel.style.color = '#000';
    }
    
});

