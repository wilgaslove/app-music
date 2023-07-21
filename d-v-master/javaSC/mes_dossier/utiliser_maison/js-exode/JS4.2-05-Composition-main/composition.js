'use strict'
class User {
    #job;
    #age;
    constructor(nom, firstname, job = null, age) {
        this.nom = nom;
        this.firstname = firstname;
        this.#job = job;
        this.#age = age;

       /* console.log(`Il s'appelle ${this.nom} ${this.firstname} et 
       travail à ${this.#job} et à ${this.#age}`);*/
    }
    //job 
    get job() {
        return this.#job = job;
    }

    set job(newJob) {
        this.#job = newJob;
    }

    //age
    get age() {
        return this.#age.verificatinAge();
    }

    set age(newage) {
        this.#age = newage;
    }
}



// let nomPrenomJob = new User("John", "Doe", "Higfive");
// console.log(nomPrenomJob);
// nomPrenomJob.job = "ONU";
// console.log(nomPrenomJob);

// nomPrenomJob.age = 50;
// console.log(nomPrenomJob);



class Age {
    #age;
    constructor(age) {
        this.#age = age;
        // console.log(`${this.#age}`);
    }

    get age() {
        return this.#age = age ;
    }

    set age(newage) {
        this.#age = newage;
    }

    verificatinAge() {
       
       if (typeof this.#age === "number" && this.#age >= 10 && this.#age <= 150 ) {
                this.#age = this.#age;
        } else {
            this.#age = null;
        }
        return this.#age;
    }
}



export {User};
export  {Age};