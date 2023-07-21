'use strict';

document.addEventListener('DOMContentLoaded',function(){
let canvas = document.getElementById("canvas");
   let rectangle2D = canvas.getContext('2d');

    rectangle2D.strokeStyle = "black";//couleur de bordure
    rectangle2D.strokeRect(/*X*/40, /*Y*/50, /*taille*/200, /*hauteur*/250); //dimension

    rectangle2D.strokeStyle = "green";
    rectangle2D.strokeRect(300, 50, 280, 250);


    rectangle2D.fillStyle = "red"; //definie la couleur du fond
    rectangle2D.fillRect(/*pX*/230, /*pY*/400, /*width*/200, /*heigth*/150);




});