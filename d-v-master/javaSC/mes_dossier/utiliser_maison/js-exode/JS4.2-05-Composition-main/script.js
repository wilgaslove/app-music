'use strict'
import { User } from "./composition.js"
import { Age } from "./composition.js"

 let nomPrenomJob = new User("John", "Doe", "Higfive", new Age(4));
console.log(nomPrenomJob);

console.log(nomPrenomJob.age);
