abstract class Music {
  //protected _instrument: string;
    public abstract makeSound(): string;

    public play(): string {
        return`${this.makeSound()}`;
    }
}

class Guitar extends Music {
    public constructor(protected readonly instruMusic: string) {
        super();
    }

    public makeSound(): string {
        return this.instruMusic;
    }
}

const myInstrument = new Guitar("piano");

console.log(myInstrument.makeSound());
