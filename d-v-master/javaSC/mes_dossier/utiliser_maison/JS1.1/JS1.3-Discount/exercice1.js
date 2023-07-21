// Votre code ici

const array = [5, 10]
function doubleArray(array) {
  for (let i = 0; i < array.length; i++) {
       array[i] *=2;
    
  }
    return array
}

console.log(doubleArray(array));
