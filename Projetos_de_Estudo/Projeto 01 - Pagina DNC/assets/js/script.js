var cardLeo = document.getElementById('card-leo');
var cardBruna = document.getElementById('card-bruna');
var cardSam = document.getElementById('card-sam');
var left = document.getElementById('left');
var right = document.getElementById('right');
var carousel = document.getElementById('cards');

function rollRight() {
    cardBruna.style = 'display:none';
    cardLeo.style = 'display:flex';
    cardSam.style = 'display:flex';
    right.style = 'display:none';
    left.style = 'display:flex';
    carousel.style = 'margin-right:100px; margin-left:0';
}

function rollLeft() {
    cardBruna.style = 'display:flex';
    cardLeo.style = 'display:flex';
    cardSam.style = 'display:none';
    right.style = 'display:flex';
    left.style = 'display:none';
    carousel.style = 'margin-right:0; margin-left:100px';
}