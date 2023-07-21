
/**
 * L'opérateur spread (...) en JS permet de copier rapidement tout ou une partie d'un tableau | objet dans un autre tableau|objet
 */

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2); // concatenation [1,2,3,4,5,6] syntaxe SE5
const arr4 = [...arr1, ...arr2] // concatenation [1,2,3,4,5,6] syntaxe SE6

console.log({ arr4, arr4 });
console.log(...arr1);
console.log(...arr2);


let a = "Amir";
let b = "Binjamin";

let obj = {
    a: a,
    b: b,

}//obj {a: "Amir", b: "Binjamin"}


//SE6
let obj2 = { a, b };

let arr = [[1, 2, 3], 4, 5, 6];
let arra = [...arr[0]]
console.log(arra);

let arrb = [...[1, 2, 3]]


//rest parameter. ça prends le reste du table
function add(a, b, ...args) {
    console.log(a);
    console.log(b);
    console.log(args);
}
add(2,3,4,5,6,7)
/**
 * a = 2
 * b = 3
 * args = [4,5,6,7]
 */











