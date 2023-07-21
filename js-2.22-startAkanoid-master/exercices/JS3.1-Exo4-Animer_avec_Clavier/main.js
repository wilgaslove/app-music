'use strict';

// On défini le propriété de notre carré que l'on va dessiner dans un objet
let square = {
    color: "#FF0000",
    length: 20,
    x: 10,
    y: 10
};

// Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions
let canvas;
let dessinAnimer;


// Dès que le DOM est chargé on commence
document.addEventListener('DOMContentLoaded', function () {
    let canvas = document.getElementById("canvas");
    dessinAnimer = canvas.getContext('2d');

    displaySquare();
    document.addEventListener('keydown', moveSquare);




});

function moveSquare(event) {
    // on détecte la touche et la direction puis on change les coordonnées
    switch (event.key) {
        case 'ArrowRight':
            if (square.x + square.length < canvas.width) square.x++;
            break;
        case 'ArrowLeft':
            if (square.x > 0) square.x--;
            break;
        case 'ArrowUp':
            if (square.y > 0) square.y--;
            break;
        case 'ArrowDown':
            if (square.y + square.length < canvas.height) square.y++;
            break;
    }

    // On dessine notre carré 
    displaySquare();
}


function displaySquare() {
    // On vide le Canvas avant de redessiner
    dessinAnimer.clearRect(0, 0, canvas.width, canvas.height);

    // On dit au contexte que la couleur de remplissage est gris
    dessinAnimer.fillStyle = '#DDDDDD';
    // On rempli le Canvas de gris
    dessinAnimer.fillRect(0, 0, canvas.width, canvas.height);

    // On dit au contexte que la couleur de remplissage est rouge
    dessinAnimer.fillStyle = square.color;

    // On trace un nouveau carré rempli (fill) avec cette couleur
    dessinAnimer.fillRect(square.x, square.y, square.length, square.length);
}
