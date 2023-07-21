


// let peron1 = {
//     firstname: "John",
//     lastname: "Doe",

//     courir : function() {
//         console.log("Je cours 🚲 2009 !");
//     }
//     // fullName = function(){
//     //     return `Moi c'est ${person1.firstname} ${person1.lastname}`
//     // }
// }
// peron1.courir(); //appelle de la méthode "courir"

// //console.log(person1.fullName());

// //Syntaxe ES6 (Ecma Script 6 | JavaScript 2015)
// let person2 = {
//     firstname: "John",
//     lastname: "Doe",

//     courir : function() {
//         console.log("Je cours 🚲 2015 !");
//     }
// }


// person2.firstname = "Gabriel"
// person2.age = 24;

// console.log(person2.age);
// console.log(person2.firstname);
// person2.courir(); //appelle de la méthode "courir"


// // person2.fullName = function(){
// //     return `on m'appelle ${person2.firstname} ${person2.lastname}`
// // }
// console.log(person2);
//les fn dans un objet sont appelées méthode.
// les variables sont appelées des propriétés


//les class en js sont sorties à partir de 2015

class Person  {

    constructor(fname, lname){
        this.firstname = fname
        this.lastname = lname
    }

    courir() {
        console.log("Je cours 🏍 2009!");
    }

    fullName(){
        console.log(`on m'appelle ${this.firstname} ${this.lastname}`); 
    }
}

//instanciation de l'objet "toto" de la classe "Person"
let toto = new Person ("toto", "goliath");
toto.fullName();
console.log(toto);

