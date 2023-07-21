'use strict'

 class User {
    #age;
    #job;
   
    constructor(name,firstName,age,job=null){
      // job = null est optionnel donc par defaut au car ou l'utilisateur n'a rien renseigné à ce niveau
        this.name = name;
        this.firstName = firstName;
        this.#age = age; // {Age:age , verifAge: fonction}
        this.#job = job;

    }

    // getter et setter de job
      get job () {
          return this.#job;
      }
  
      set job (newJob){
          this.#job = newJob;
      }

    // getter et setter de age

    get age () {
        return this.#age.verifAge();
    }

    set (newAge){
        this.#age = newAge;
    }

 }

 

 class Age {

    #age

    constructor (age) {

        this.#age = age;

    }

    // getter et setter de age

    get age () {
        return this.#age;
    }


    set (newAge){
        this.#age = newAge;
    }

    verifAge(){
       if(typeof this.#age === "number" && this.#age >= 10 && this.#age <= 150) {

        this.#age = this.#age;

       }else {
        this.#age = null;
       }
       return this.#age;
    }
 }

 let myAge = new User("alid","AS",new Age('20') , "AIR FORCE");
 console.log(myAge.age);