'use strict'
class person {
    #name;
    #age;

    constructor(name, age) {
        //console.log(`appelle du constructeur person. Création de la person ${name}`);
        //propriété privée
        this.#name = name;
        //propriété privée
        this.#age = age;

        //console.log(`peron ${name} crée avec sucès`);
    }

    //accesseur | getteur
    get name(){
        console.log("aplle du getteur");
        return this.#name;
    }

    //mutateur | setteur
    set name(newName){
        this.#name = newName;
    }
    
    //accesseur | getteur
    get age(){
        return this.#age
    }

    //mutateur | setteur
    set age(newage){
        this.#age = newage;
    }

    present() {
        console.log(`on m'appelle ${this.#name} et j'ai ${this.#age} ans`);
    }
}
export default person