# Supprimer des éléments à l'aide de splice()

Ok, nous avons donc appris à supprimer des éléments du début et de la fin des tableaux en utilisant `shift()` et `pop()`, 
mais que se passe-t-il si nous voulons supprimer un élément quelque part au milieu ? Ou supprimer plus d'un élément à la fois ? 
Eh bien, c'est là qu'intervient `splice(). `splice()` nous permet de faire exactement cela : supprimer n'importe quel nombre d'éléments consécutifs de n'importe où dans un tableau.

`splice()` peut prendre jusqu'à 3 paramètres, mais pour l'instant, nous allons nous concentrer uniquement sur les 2 premiers. 
Les deux premiers paramètres de `splice()` sont des entiers qui représentent des indices, ou des positions, d'éléments dans le tableau sur lequel `splice()` est appelé. 
Et rappelez-vous, les tableaux sont indexés à partir de zéro , donc pour indiquer le premier élément d'un tableau, nous utiliserions 0. Le premier paramètre de `splice()` représente 
l'index sur le tableau à partir duquel commencer à supprimer des éléments, tandis que le second paramètre indique le nombre d'éléments à supprimer. Par exemple:

```js
let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2);
```

Ici, nous supprimons 2 éléments, en commençant par le troisième élément (à l'index 2). `array` aura la valeur `['today', 'was', 'great']`.

`splice()` modifie non seulement le tableau sur lequel il est appelé, mais renvoie également un nouveau tableau contenant la valeur des éléments supprimés :

```js
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
```

`newArray` aura la valeur `['really', 'happy']`.

# Exercice

Nous avons initialisé un tableau `arr`. Utilisez `splice()` pour supprimer des éléments de `arr`, afin qu'il ne contienne que des éléments dont la somme correspond à la valeur de `10`.

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Votre code ici

// Votre code ici
console.log(arr);
```
