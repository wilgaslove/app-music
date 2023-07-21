//function decorateur(){

// }
// @decorateur// décorateur de classe
// class User {
//     private _fname: string;
//     constructor(fname: string){
//         this._fname  = fname;
//     }

//     @decorateur//dé
//     greed(): void {
//         return 
//     }

// @decorateur
// get():string {
//     return this._fname;
// }
// }



// Décorateur de classe

@sealed
class BugReport {
    type = "Rapport";
    title: string;
    constructor(t: string){
        this.title = t;
    }
}

function sealed(constructor: Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);

}

let obj = new BugReport("Pas d'accès internet");
obj.title;



