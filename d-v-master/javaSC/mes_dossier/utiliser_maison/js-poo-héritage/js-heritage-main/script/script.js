'use strict'
   
class User {
    funlName (name, firstName){
        return name + firstName;
    }
}


class Admin extends User {

    canEditArticles(){
        return true;
    }
}

let nomPrenom = new User();
nomPrenom.funlName("Wilgas", "ADJOVI");
console.log(nomPrenom.funlName("Willy ", "ADJOVI"));

let article = new Admin();
article.canEditArticles("true");
console.log(article.canEditArticles("true"));





