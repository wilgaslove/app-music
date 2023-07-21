'use strict'
import person from "./person.js"

//Employee étend (hérite des propriétés et méthides) de Person
/**
 * on dit désormais que Employee hérite de person (parent ou superClass)
 * on dit également que Employee est un enfant de person
 * on dit égelement que person est un Parent dfe Employee
 */


class employer extends person {
    #salary;
    constructor(name, age, salary) {
        //console.log(`appelle du constructeur employer. Création de la employer ${#name}`);

        //Appelle du constructeur du parent avec deux arguments
        super(name, age);
        this.#salary = salary;
      //  console.log(`employer créé avec succès ${#name}`);
    }
    get salary(){
        return this.#salary
    }

    set salary(newSalary){
        this.#salary = newSalary;
    }
}

export default employer;