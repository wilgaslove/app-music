class Product {
    constructor(name) {
        this._ref = 1000;
        this._name = name;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
let bike = new Product('Super Bike');
console.log(bike.name);
let bit = new Product('Sucre Roux');
console.log(bit.name);



