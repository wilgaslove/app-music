/* Exercice - Move Your Div

Déplacer une div sur quatre points cardinaux quand on clique un bouton.  
Quand la div revient à son point d'origine, un modal s'affiche.  
Le modal disparait lorsqu'on recommence le cycle.  
Un deuxième bouton doit servir à masquer le modal.

*/

document.addEventListener("DOMContentLoaded",
  function () {
    let clickCount = 0;
    const divModal = document.querySelector(".modal");
    const divRed = document.querySelector(".red");
    const body = document.querySelector("body");
    const hideModal = document.getElementById("hideModal");
    const moveYourDiv = document.getElementById('moveDiv');
    moveYourDiv.addEventListener("click",
      function () {
        clickCount++;
        console.log(clickCount);
        switch (clickCount) {
          case 1:
            divRed.style.left = "760px";
            divRed.style.display = "none";
            body.classList.remove("modal-active");
            break;

            case 2:
              divRed.style.top = "300px";
              divRed.style.left = "760px";
            break;
            case 3:
              
        }
      })



  })


