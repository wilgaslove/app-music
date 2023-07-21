'use strict'
class User {
    #job;
    constructor(nom, firstname, job){
        this.nom = nom;
        this.firstname = firstname;
        this.#job = job;
        console.log(`Il s'appelle ${this.nom} ${this.firstname} et travail à ${this.#job}`);
    }

    get job(){
        return this.#job = job;
    }

    set job (newJob){
        this.#job = newJob;
    }
}

let nomPrenomJob = new User ("John", "Doe", "Higfive");
console.log(nomPrenomJob);
nomPrenomJob.job = "HZ";
console.log(nomPrenomJob);


