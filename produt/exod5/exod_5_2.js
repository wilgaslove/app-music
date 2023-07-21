let obj = {
    "fname": "John",
    "lname": "Doe"
};
console.log(obj);
const maVar = {
    x: "Jhn",
    y: "23"
};
class Person {
    constructor(fname, age) {
        this.fname = fname;
        this.age = age;
    }
}
const p1 = new Person("John", 34);
const p2 = new Person("John", "34");
console.log(p1);
console.log(p2);



