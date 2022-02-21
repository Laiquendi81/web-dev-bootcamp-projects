const typewriter = function(txtElement, words, wait = 3000) {

    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//Type method
typewriter.prototype.type = function() {
    //Current index of word
    const current = this.wordIndex % this.words.length;
    //Get text of current word
    const fullTxt = this.words[current];

    //check if in deleting state
    if(this.isDeleting) {
        //Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);

    } else {
        //Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);

    }

    //Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //Initial Type speed
    let typeSpeed = 200;

    if(this.isDeleting) {
        typeSpeed /= 2;
    }

    //Is word complete

    if(!this.isDeleting && this.txt === fullTxt) {
        //Create pause at end
        typeSpeed = this.wait
        //set delete to true
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        //mvoe to nect word
        this.wordIndex++;
        //pause before start typing next word
        typeSpeed = 500;
    }


    setTimeout(() => this.type(), typeSpeed);
}


//Init of DOM load
document.addEventListener('DOMContentLoaded', init);

//Init app
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //init typewriter
    new typewriter(txtElement, words, wait);
}