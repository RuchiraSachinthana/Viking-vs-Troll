var audio = new Audio("./assets/sounds/enterGame.wav");
var mainAudio = new Audio("./assets/sounds/mainMusic.mp3");
var viking = document.getElementById("viking");
var troll = document.getElementById("troll");




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

function removeAll() {
    var name = document.getElementById("name");
    var playBtn = document.getElementById("play-btn");
    var footer = document.getElementById("footer");
    name.style.visibility = "hidden";
    playBtn.style.visibility = "hidden";
    footer.style.visibility = "hidden";

}