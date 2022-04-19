var audio = new Audio("./assets/sounds/enterGame.wav");
var mainAudio = new Audio("./assets/sounds/mainMusic.mp3");
var viking = document.getElementById("viking");
var troll = document.getElementById("troll");

var vikingX = 0;
var vikingY = 0;

var vikingIdleAnimationId = 0;

var trollX = 0;
var trollY = 0;

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