var button = document.getElementById('btn');
var container = document.getElementById('container');

button.addEventListener('click', createNotification);

function createNotification() {
    const note = document.createElement('div');
    note.classList.add('toast');
    note.innerText = 'Thank you for clicking me!';

    container.appendChild(note);
    setTimeout(()=> {
        note.remove();
    }, 3000);
}