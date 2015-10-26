
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
    playerSequence.push(userSelection);
    console.log(userSelection);
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
    console.log(simonSequence);
}

function animateButton(num) {
    $('[data-num = "' + num + '"]').fadeOut();
    setTimeout(function() {
        $('[data-num = "' + num + '"]').fadeIn();
    },750);

}

function compareResults(userChoice) {
    console.log(userChoice);
    if (simonSequence[i] != userChoice) {
        gameOver();
    } else if(simonSequence[i] == userChoice && simonSequence.length - 1 == i) {
        i = 0;
        copy();
    } else if(simonSequence[i] == userChoice) {
        i += 1;
    }
}

function copy() {
    getRandomButton();
    startGame();
    $('.start').text('Start Game: ' + simonSequence.length);
}

function gameOver() {
    simonSequence = [];
    playerSequence = [];
    alert('Game Over!');
    location.reload(); 
}