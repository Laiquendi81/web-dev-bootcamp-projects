
function playGame() {
    var diceOnePics = new Array("images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png");
    var randomOneNum = Math.floor(Math.random() * diceOnePics.length);
    document.getElementById("img1").src = diceOnePics[randomOneNum];

    var diceTwoPics = new Array("images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png");
    var randomTwoNum = Math.floor(Math.random() * diceTwoPics.length);
    document.getElementById("img2").src = diceTwoPics[randomTwoNum];

    if(randomOneNum > randomTwoNum) {
        document.getElementById('title').innerText = "Player 1 Wins!"
    } else if (randomTwoNum > randomOneNum) {
        document.getElementById('title').innerText = "Player 2 Wins!"
    } else {
        document.getElementById('title').innerText = "Draw!"
    }
}

playGame();


// function diceOne() {
//     var diceOnePics = new Array("images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png");
//     var randomNum = Math.floor(Math.random() * diceOnePics.length);
//     document.getElementById("img1").src = diceOnePics[randomNum];
//     return diceOnePics[randomNum];
// }

// function diceTwo() {
//     var diceTwoPics = new Array("images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png");
//     var randomNum = Math.floor(Math.random() * diceTwoPics.length);
//     document.getElementById("img2").src = diceTwoPics[randomNum];
//     return diceTwoPics[randomNum];
// }

// diceOne();
// diceTwo();





