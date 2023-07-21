# Ajouter des éléments à un tableau avec push() et unshift()

La longueur d'un tableau, comme les types de données qu'il peut contenir, n'est pas fixe. Les tableaux peuvent être définis avec une longueur de n'importe quel nombre d'éléments, et des éléments peuvent être ajoutés ou supprimés au fil du temps ; en d'autres termes, les tableaux sont modifiables . Dans ce défi, nous examinerons deux méthodes avec lesquelles nous pouvons modifier un tableau par programmation : `Array.push()` et `Array.unshift()`.

Les deux méthodes prennent un ou plusieurs éléments comme paramètres et ajoutent ces éléments au tableau sur lequel la méthode est appelée ; la méthode `push()` ajoute des éléments à la fin d'un tableau et `unshift()` ajoute des éléments au début. Considérer ce qui suit:

```js
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
```

`romanNumerals` aura la valeur `['XIX', 'XX', 'XXI', 'XXII']`.

```js
romanNumerals.push(twentyThree);
```
`romanNumerals` aura la valeur `['XIX', 'XX', 'XXI', 'XXII', 'XXIII']`. Notez que nous pouvons également passer des variables, ce qui nous permet encore plus de flexibilité dans la modification dynamique des données de notre tableau.

Nous avons défini une fonction, mixedNumbers, à laquelle nous transmettons un tableau en tant qu'argument. Modifiez la fonction en utilisant `push()` et `unshift()` pour ajouter `'I', 2, 'three'` au début du tableau et `7, 'VIII', 9` à la fin afin que le tableau renvoyé contienne des représentations des nombres 1-9 dans l'ordre.

```js
function mixedNumbers(arr) {
  // Votre code ici
  // Votre code ici
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
```
