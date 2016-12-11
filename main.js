window.addEventListener("keydown", onKeyPress);
var keys = document.getElementsByClassName("key");

function onKeyPress(key) {
    console.log(key.keyCode);
    var drumPiece = document.querySelector('.key[data-key="' + key.keyCode + '"]'),
        audio = document.querySelector('audio[data-key="' + key.keyCode + '"]');
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    setTimeout(function(){
        drumPiece.classList.remove("playing");
    },70);
    drumPiece.classList.add("playing");
}