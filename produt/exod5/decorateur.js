class User {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`salut ${this.name}`);
    }
}
let u = new User("Golbert");
u.greet();
