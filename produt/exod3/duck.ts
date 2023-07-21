interface Duck {
    name: string,
    swin(name: string) : string,
}


class Thing implements Duck {
   
   
    name: string;
    swin():string {
        return "Nage comme un canard"
    }
}

let duck = new Thing ();
console.log();



