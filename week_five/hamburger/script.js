var button = document.getElementById('btn');
var nav = document.getElementById('nav');

button.addEventListener('click', ()=> {
    nav.classList.toggle('active');
})