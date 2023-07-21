//il y a plusieurs type de décorateur. les décorateus d'objet


function decorer(obj: User, method: string, descripteur: PropertyDescriptor) {
    console.log("Appelle du décorateur");
    console.log(descripteur);

    descripteur.value();
}

class User {
    constructor(
        private name: string = "Valeur par défaut"
    ) { }

    @decorer
    greet() {
        console.log(`salut ${this.name} 🏍`);
    }
}

let u = new User("Golbert");
u.greet();


//Une classe en typeScript:

function logClass(target: any) {
    //target fait référence à la qui est déco
    console.log(`classe ${target.name} a été décorée.`);
}

@logClass
class Maclass {
    constructor() {
        console.log("Instance de MaClasse créée");
    }
}




// Ex:
/**
 * NB: le décorateur ne s'applique que sur une classe ou dans une classe.
 * 1. classe: 
 * 2. propriété
 * 3. méthode
 * 4. accesseur (getter & setter)
 * 5. paramètres d'une méthode
 */



// function classDecorateur() {
    
// };
// @classDecorateur
// @class Use {
//     constructor(){
//         console.log("construteur de Use...");
        
//     }
// }



function decorateur (target: Function) {
    console.log("apple du codécorateur");
}


@decorateur
class User1 {
    constructor(){
        console.log("constrcteur de User1");
        
    }
}

