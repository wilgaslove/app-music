'use strict'

const note = [17, 14, 12, 13];

//syntaxe ES5
const nicole1 = note[0];
const erfero1 = note[1];
const oderic1 = note[2];
const martin1 = note[3];

//syntaxe ES6
const notes = [17, 14, 12, 13];
const [nicole, erfero, oderic, martin ] = notes;
console.log(nicole);//17
console.log(erfero);//14
console.log(oderic);//12
console.log(martin);//13


const person = {
    firstname1: "John",
    lastname1: "Doe",
    age1: 24
}
// syntaxe ES5
//const firstname1 = person.firstname1;
//const lastname1 = person.lastname1;
//const age1 = person.age1;
            
//ES6
const {firstname, lastname, age} = person;//{lastname:"...", age:"..."}
console.log(age);
console.log(lastname);



