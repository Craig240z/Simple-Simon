
'use strict';

var simonSequence = [];
var i = 0;

$('.start').click(function(event) {
    simonSequence = [];
    getRandomButton();
    startGame();
});

$('.button').click(function(event) {
    var userSelection = event.currentTarget.attributes[1].value;
    console.log("The user chose to click on button" +  userSelection);
    var userChoice = $(this).attr('data-num');
    compareResults(userChoice);
});

function startGame() {
    var i = 0;
    var intervalId = setInterval(function() {
        animateButton(simonSequence[i]);
        i += 1;
        if(i >= simonSequence.length) {
            clearInterval(intervalId);
        }
    },1000);
}

function getRandomButton() {
    var randomNumber = Math.floor((Math.random() * 4) + 1);
    simonSequence.push(randomNumber);
    console.log("The following value is the simonSequence array.")
    console.log(simonSequence);
}

function animateButton(num) {
    $('[data-num = "' + num + '"]').fadeOut();
    setTimeout(function() {
        $('[data-num = "' + num + '"]').fadeIn();
    },750);

}

function compareResults(userChoice) {
    console.log("The user clicked the buttom with the data-num " + userChoice);
    if (simonSequence[i] != userChoice) {
        gameOver();
    } else if(simonSequence[i] == userChoice && simonSequence.length - 1 == i) {
        i = 0;
        simonTurn();
    } else if(simonSequence[i] == userChoice) {
        i += 1;
    }
}

function simonTurn() {
    getRandomButton();
    startGame();
    $('.start').text('Start Game: ' + simonSequence.length);
}

function gameOver() {
    simonSequence = [];
    alert('Game Over!');
    location.reload(); 
}