let obj = {
    "fname": "John",
    "lname": "Doe"
}


console.log(obj);

//pour extraire uniquement lef sproduits dont l'option délivery est "special"
type MonType<T, U> = {
    x: T;
    y: U
}
const maVar: MonType<string, string> = {
    x: "Jhn",
    y: "23"
}


class Person<T, U>{
    constructor(
        public fname: T,
        public age: U
    ){}
}

const p1 = new Person<string, number>("John", 34);

const p2 = new Person<string, string>("John", "34");
console.log(p1);
console.log(p2);








