'use strict'
document.addEventListener("DOMContentLoaded", ()=>{
    let x = 3;
    /**
     * Fn qui vérifie si un number est positif ou négatif
     * @param {number} num 
     * @return true | false
     */
    
    function isPosition(num) {
      /* syntaxe SE5
       if (num >= 0) {
            return true;
        } else {
            return false;
        }*/ 

        //(condition) ? "valeur à retourner si vrai" : "valeur si faux"
        //syntaxe SE6
        let result = num >= 0? true : false;
        // return num >= 0? "num est positif" : "num est négatif";

        console.log(result);

    }
    console.log(isPosition());//appel  à la function isPositive()
    
    function positifNegatif(nums) {

        return  nums >= 3 ? `${nums} est positif` : `${nums} est négatif`;

    }
    console.log(positifNegatif(3.1));;




})