
'use strict';

var simonArray = [];
var i = 0;

$('.start').click(function(event) {
    simonArray = [];
    getRandomButton();
    startGame();
});

$('.button').click(function(event) {
    var playerSelection = event.currentTarget.attributes[1].value;
    var playerChoice = $(this).attr('data-num');
    console.log("The player chose to click on button" +  playerChoice);
    compareResults(playerChoice);
});

function startGame() {
    var i = 0;
    var intervalId = setInterval(function() {
        animateButton(simonArray[i]);
        i += 1;
        if(i >= simonArray.length) {
            clearInterval(intervalId);
        }
    },750);
}

function getRandomButton() {
    var randomNumber = Math.floor((Math.random() * 4) + 1);
    simonArray.push(randomNumber);
    console.log("The following value is the simonArray.")
    console.log(simonArray);
}

function animateButton(num) {
    $('[data-num = "' + num + '"]').fadeOut();
    setTimeout(function() {
        $('[data-num = "' + num + '"]').fadeIn();
    },250);

}

function compareResults(playerChoice) {
    console.log("The player clicked the buttom with the data-num " + playerChoice);
    if (simonArray[i] != playerChoice) {
        gameOver();
    } else if(simonArray[i] == playerChoice && simonArray.length - 1 == i) {
        i = 0;
        simonTurn();
    } else if(simonArray[i] == playerChoice) {
        i += 1;
    }
}

function simonTurn() {
    getRandomButton();
    startGame();
    $('.start').text('Start Game: ' + simonArray.length);
}

function gameOver() {
    simonArray = [];
    alert('Game Over!');
    location.reload(); 
}