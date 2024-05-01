var cardLeo = document.getElementById('card-leo');
var cardBruna = document.getElementById('card-bruna');
var cardSam = document.getElementById('card-sam');
// var left = document.getElementById('left');
// var right = document.getElementById('right');

function rollRight() {
    cardBruna.style = 'display:none';
    cardLeo.style = 'display:flex';
    cardSam.style = 'display:flex';
    // right.style = 'display:none';
    // left.style = 'display:flex';
}

function rollLeft() {
    cardBruna.style = 'display:flex';
    cardLeo.style = 'display:flex';
    cardSam.style = 'display:none';
    // right.style = 'display:flex';
    // left.style = 'display:none';
}