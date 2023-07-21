
let app = new Vue({
    el:'#app',
    data:{
        Bonjour: "bonjour chère Parents d'élève",
        rang : "2ème",
        not :" Note de votre enfant [15, 18, 19, 20]",

        obj:{
            nom: "Martin",
            taille: 3, 
        },

        mge: 'Vous avez affiché cette page le ' + new Date().toLocaleString(),

        seen: 2,

        age: 20,
        notes: [17, 18, 19, 20, 20],
    }
})



