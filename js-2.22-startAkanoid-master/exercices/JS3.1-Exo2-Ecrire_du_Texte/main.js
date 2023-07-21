'use strict';

// Nous allons écrire "HELLO WORLD !" avec 3 couleurs différentes
document.addEventListener('DOMContentLoaded', function () {
    let canvas = document.getElementById("canvas");
    let text2D = canvas.getContext('2d');
    
    
    text2D.font = 'bold  30px Verdana';// definit le font 
    text2D.fillStyle = 'blue';//style de couleur
    text2D.fillText("HELLO ", 70 /*pX*/, 240/*pY*/);
    text2D.fillStyle = 'black';// definition de la couleur du deuxième mot ou texte à écrire.
    text2D.fillText("WORLD", /*pX*/70 + text2D.measureText('HELLO').width +5, 240/*pY*/);
    text2D.fillStyle = 'red'
    text2D.fillText("!", 70+text2D.measureText('WORLD').width +120, 240)

});