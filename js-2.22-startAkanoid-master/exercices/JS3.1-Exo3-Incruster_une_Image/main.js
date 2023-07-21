'use strict';


document.addEventListener('DOMContentLoaded', function () {
    let canvas = document.getElementById("canvas");
    let incrusterImg = canvas.getContext('2d');

    let myImage = document.getElementById("source");

    myImage.onload = function () {
        //On place l'image
        myImage = document.getElementById("source");
        incrusterImg.drawImage(myImage, 50, 50, 550,300);
    }

})