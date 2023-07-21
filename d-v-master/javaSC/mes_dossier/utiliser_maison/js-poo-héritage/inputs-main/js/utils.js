
'use strict'
//importation de l'élément par défaut du fichier request.js
//quand on importe par défaut, cela n'est pas d'acolade {};
import Request from "./request.js";

export function dealWithForm() {
    const button = document.getElementById("button");
    button.addEventListener("click", (event) => {
        event.preventDefault();
        let fname = document.getElementById("fname");
        let lname = document.getElementById("lname");
        let tabInput = [];
        tabInput.push(fname);
        tabInput.push(lname);

        const request = new Request();
        request.getInputs(tabInput)
    });
    
}

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply (a, b) {
    return a*b;
}

export  {add, subtract, multiply}