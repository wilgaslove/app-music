'use strict'
class User {
    constructor(name, firstName, _job = null) {
        this.name = name;
        this.firstName = firstName;
        this._job = job;
        console.log(`Il s'appelle  ${this.name} ${this.firstName} et travail à ${this._job}`);
    }

    get job() {
        return this._job = job;
    }

    set job(newJob) {
        this._job = newJob;
    }
}

let nomPrenomJob = new User("John", "Doe", "ORTB");
let nouveau = new User("Willy", "ADJOVI", "HIGFIVE")
let valeurDefaut = new User("Charles", "du Bois")

class Admin extends User {

    canEditArticles() {
        return true;
    }
}



let article = new Admin("Jean", "MOULIN", "VIPP");
//article.canEditArticles();
console.log(article.canEditArticles());





