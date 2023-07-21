'use strict'

import person from "./person.js"
import employer from "./employer.js"
import Programmer from "./programmer.js"

let p1 = new person("Thierry", 23);
const e1 = new employer("Jacques", 52, 50000);
const P = new Programmer("Warris", 52, 5000000, ["JS", "CSS", "HTML"]);


console.log(p1.name);
 console.log(p1); //{name: "Thierry", age: 23}
 console.log(e1);
 console.log(P);

