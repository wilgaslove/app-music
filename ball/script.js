document.addEventListener("DOMContentLoaded", function () {
    let maVariable = {
        ball: document.getElementById("ball"),
        ballDirectionX: 1,
        ballPosX: 0,
        speed: 3,
        windowWidth: window.innerWidth,
    }
    
    let maVariable2 = {
        ball: document.getElementById("ball"),
        ballDirectionY: 1,
        ballPosY: 0,
        speed: 3,
        windowHeight: window.innerHeight,
    }
    let limitRightX = maVariable.windowWidth - ball.offsetWidth;
    let limitTopY = maVariable2.windowHeight - ball.offsetHeight;


    function animateBall() {
        maVariable.ballPosX += maVariable.ballDirectionX * maVariable.speed;
        maVariable2.ballPosY += maVariable2.ballDirectionY * maVariable2.speed;
        if (maVariable.ballPosX >= limitRightX) {
            maVariable.ballPosX = limitRightX;
            maVariable.ballDirectionX = -1;
        } else if (maVariable.ballPosX <= 0) {
            maVariable.ballPosX = 0;
            maVariable.ballDirectionX = 1;
        }

        if (maVariable2.ballPosY >= limitTopY) {
            maVariable2.ballPosY = limitTopY;
            maVariable2.ballDirectionY = -1;
        } else if (maVariable2.ballPosY <= 0) {
            maVariable2.ballPosY = 0;
            maVariable2.ballDirectionY = 1;
        }

        ball.style.transform = "translateX(" + maVariable.ballPosX + "px) translateY(" + maVariable2.ballPosY + "px)";
        requestAnimationFrame(animateBall)
    }

    animateBall();

    

})