'use strict'
/*function factorialize(num){
    return (num === 0|| num === 1)? 1 : num * factorialize(num - 1);
}
console.log(factorialize(5));
factorialize(5);*/


function factorialize(num) {
    let result = 1;
    for(let x = 1; x<=num; x++){
        result *=x;
    }
    return result;
}
console.log(factorialize(5));
factorialize(5);