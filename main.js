var audio = new Audio("./assets/sounds/enterGame.wav");
var mainAudio = new Audio("./assets/sounds/mainMusic.mp3");

function buttonClick() {
    audio.play();
    mainMusic();
}

function mainMusic(){
    mainAudio.play();
    mainAudio.loop = true;
}

function pauseMainAudio(){
    mainAudio.pause();
}