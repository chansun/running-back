let audio = new Audio('/assets/bgm/Lipps_Inc_Funky_Town.mp3');
function play() {
    if (audio.paused) {
        audio.play()
    }
    else {
        audio.pause()
    }
}

//var audio = document.createElement('button');
//audio.src = '/assets/bgm/Lipps_Inc_Funky_Town.mp3';

//var audio = document.getElementById("audio-source");
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var source = audioCtx.createMediaElementSource(audio);
var gainNode = audioCtx.createGain();

var gainConnected = source.connect(gainNode);
gainConnected.connect(AudioCtx.destination);

// audio test!
/*
$("#col-left").click(function(e) {
    gainNode.gain.value = 1; // Volume
    play();
});
*/


