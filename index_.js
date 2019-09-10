let sound1 = "Play Game";
const voice1 = new SpeechSynthesisUtterance(sound1);
voice1.pitch = 1.0;
voice1.volume = 1.0;
voice1.rate = 1.0;
let t1 = document.getElementById('play');

// Single-click occurs if click is done once
// Double-click occurs if click is done twice within 0.2 sec.
var DELAY = 200, clicks = 0, timer = null;
function playHandler (e) {
    clicks++;  //count clicks
    if(clicks === 1) {
        timer = setTimeout(function() {
            speechSynthesis.speak(voice1);  //perform single-click action    
            clicks = 0;                     //after action performed, reset counter
        }, DELAY);
    } 
    else {
        clearTimeout(timer);                //prevent single-click action
        location.href= 'play.html';         //perform double-click action
        speechSynthesis.speak(voice3);      //perform double-click action
        clicks = 0;                         //after action performed, reset counter
    }
}

t1.addEventListener('click', playHandler);
t1.addEventListener('dblclick', function(e){
    e.preventDefault();  //cancel system double-click event
});

//t1.addEventListener("touchend", playHandler, false);
/*
function handlerFunction(event) {
    alert("touch worked!");
};
*/










let sound2 = "Tutorial";
const voice2 = new SpeechSynthesisUtterance(sound2);
voice2.pitch = 1.0;
voice2.volume = 1.0;
voice2.rate = 1.0;
let t2 = document.getElementById('tutorial');

function tutorialHandler (e) {
    speechSynthesis.speak(voice2);
};
t2.addEventListener('click', tutorialHandler);
/*
t2.addEventListener('click', function(){
    speechSynthesis.speak(voice2);
});
*/

let sound3 = "Play Page";
const voice3 = new SpeechSynthesisUtterance(sound3);
voice3.pitch = 1.0;
voice3.volume = 1.0;
voice3.rate = 1.0;
let t3 = document.getElementById('body');

function bodyHandler (e) {
    if (e.keyCode == 39) {
        location.href= 'play.html';
        speechSynthesis.speak(voice3);
    }
};
t3.addEventListener('keyup', bodyHandler);
/*
t3.addEventListener('keyup', function(e){
    if (e.keyCode == 39) {
        location.href= 'play.html';
        speechSynthesis.speak(voice3);
    }
});
*/