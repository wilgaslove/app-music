class Music {
    play() {
        return `${this.makeSound()}`;
    }
}
class Guitar extends Music {
    constructor(instruMusic) {
        super();
        this.instruMusic = instruMusic;
    }
    makeSound() {
        return this.instruMusic;
    }
}
const myInstrument = new Guitar("piano");
console.log(myInstrument.makeSound());
