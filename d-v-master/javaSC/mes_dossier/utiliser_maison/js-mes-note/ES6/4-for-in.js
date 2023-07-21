'use strict';

const students = [
    "Oswald",
    "Emile",
    "Martin",
    "Alid",
    "Gabriel",
    "Warris",
    "Odéric",
    "Euloge",
    "Johannes",
    "Théophile",
    "Le roux",
    "Chacréde",
    "Axel",
    "Délano",
    "Régis",
    "Possidius",
    "Faris",
    "Nicole",
    "Sam-Rod",
    "Erféro",
    "WilgasLove"
]

for (let i = 0; i<students.length; i++){
    console.log(students[i]);
}

/* for ...in : permet de parcourir les propriétés d'un objet ou les indices tableau
for (let indice in tableau){}
for (let propriete in objet) {} */

for (let i  in students){
    console.log(i);
};

let obj = {
    fname: "John",
    lname: "Doe",
    age: 98
};


for (let prop in obj){
    console.log(obj[prop]);
}

for (let character of "bonjour"){
    console.log(character);
}


