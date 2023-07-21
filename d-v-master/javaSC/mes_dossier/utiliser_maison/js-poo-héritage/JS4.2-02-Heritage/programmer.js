'use strict'

import employer from "./employer.js";

class Programmer extends employer {

    #language;
    constructor(name, age, salary, language) {
        //console.log(`Appelle du constructeur Programmer. Création de la Programmer ${name}`);
        super(name, age, salary);
        this.#language = language;

        // console.log(`Programmer ${name} crée avec sucès`);

    }

    present() {
        console.log(`on m'appelle ${this.name} et j'ai ${this.age} ans`);
    }

    
    get language(){
        return this.#language
    }

    
    set language(newLanguage){
       this.#language = newLanguage;
    }
}

export default Programmer;
