var audio = new Audio("./assets/sounds/enterGame.wav");
var mainAudio = new Audio("./assets/sounds/mainMusic.mp3");
var viking = document.getElementById("viking");
var troll = document.getElementById("troll");

var vikingX = 0;
var vikingY = 0;

var vikingIdleAnimationId = 0;
var AttackId = 0;
var vikingFWalkId = 0;
var vikingBWalkId = 0;

var trollX = 0;
var trollY = 0;

var trollIdleAnimationId = 0;

function buttonClick() {
    audio.play();
    mainMusic();

    removeAll();
    vikingVisible();
    trollVisible();
}

function mainMusic(){
    mainAudio.play();
    mainAudio.loop = true;
}

function pauseMainAudio(){
    mainAudio.pause();
}

function removeAll() {
    var name = document.getElementById("name");
    var playBtn = document.getElementById("play-btn");
    var footer = document.getElementById("footer");
    name.style.visibility = "hidden";
    playBtn.style.visibility = "hidden";
    footer.style.visibility = "hidden";
}

function KeyListner(event) {

    var key = event.which;

    if (key == 32) { //Space
        vikingX = 0;
        AttackId = vikingAttackAnimation();
    }

    if ( key == 13) { //Enter

        trollX = 0;

        AttackId = trollAttackAnimation();
    }

    if (key == 68) { //D
        if (vikingFWalkId == 0) {
            vikingX = 0;
            vikingFWalkId = setInterval(vikingWalkFrontAnimation, 250);
        }
    }

    if (key == 65) { // Key = A
        if(vikingBWalkId == 0){
            vikingX = 0;
            clearInterval(vikingIdleAnimationId);
            vikingIdleAnimationId = 0;
            vikingBWalkId =  setInterval(vikingWalkBackAnimation,200);
        }
    }

}


function vikingIdleAnimation() {
    vikingY = 0;
    vikingX = vikingX - 512.1;
    viking.style.backgroundPositionX = vikingX + "px";

    if (vikingX < -5121) {
        vikingY = 0;
        viking.style.backgroundPositionY = vikingY + "px";
    }
}

function vikingVisible() {
    vikingIdleAnimationId = setInterval(vikingIdleAnimation, 200);
    viking.style.visibility = "visible";
}

function trollIdleAnimation() {
    trollY = 0;
    trollX = trollX - 420;
    troll.style.backgroundPositionX = trollX + "px";

    if (trollX < -4200) {
        trollY = 0;
        troll.style.backgroundPositionY = trollY + "px";
    }
}

function trollVisible() {
    trollIdleAnimationId = setInterval(trollIdleAnimation, 200);
    troll.style.visibility = "visible";
}

function vikingAttackAnimation() {
    vikingY = -1024;
    vikingX = vikingX - 512.1;
    viking.style.backgroundPositionX = vikingX + "px";
    viking.style.backgroundPositionY = vikingY + "px";


}

function trollAttackAnimation() {
    trollY = -525.6;
    trollX = trollX - 420;
    troll.style.backgroundPositionX = trollX + "px";
    troll.style.backgroundPositionY = trollY + "px";
}

/* Viking move */

var vikingML = 300;

function vikingWalkFrontAnimation() {
    vikingY = -512;
    vikingX = vikingX - 512.1;
    viking.style.backgroundPositionX = vikingX + "px";
    viking.style.backgroundPositionY = vikingY + "px";

    vikingML = vikingML + 10;
    viking.style.marginLeft = vikingML + "px";
    viking.style.transform = "scaleX(1) scale(0.7)";

    if (vikingX < -5121) {
        vikingY = 0;
        viking.style.backgroundPositionY = vikingY + "px";
        clearInterval(vikingFWalkId);
        vikingFWalkId = 0;
        vikingIdleAnimationId = setInterval(vikingIdleAnimation, 200);
    }

}

function vikingWalkBackAnimation() {
    vikingY = -512;
    vikingX = vikingX - 512.1;
    viking.style.backgroundPositionX = vikingX + "px";
    viking.style.backgroundPositionY = vikingY + "px";
    vikingML = vikingML - 10;
    viking.style.marginLeft = vikingML + "px";
    viking.style.transform = "scaleX(-1) scale(0.7)";

    if (vikingX < -5121) {
        vikingY = 0;
        viking.style.backgroundPositionY = vikingY + "px";
        clearInterval(vikingBWalkId);
        vikingBWalkId = 0;
        vikingIdleAnimationId = setInterval(vikingIdleAnimation, 200);
    }
}


