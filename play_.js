let sound1 = "Your mission is run as fast as you can; Tab the screen with two fingers alternatively."
const voice1 = new SpeechSynthesisUtterance(sound1);
voice1.pitch = 1.0;
voice1.volume = 1.0;
voice1.rate = 0.9;
/* sleep for 2 sec, and then speak */
setTimeout(function() {
    //speechSynthesis.speak(voice1);
}, 2000);

let sound2 = "Back to the main menu";
const voice2 = new SpeechSynthesisUtterance(sound2);
voice2.pitch = 1.0;
voice2.volume = 1.0;
voice2.rate = 1.0;
let t2 = document.getElementById('back');

// Single-click occurs if click is done once
// Double-click occurs if click is done twice within 0.2 sec.
var DELAY = 200, clicks = 0, timer = null;
function backHandler (e) {
    clicks++;  //count clicks
    if(clicks === 1) {
        timer = setTimeout(function() {
            speechSynthesis.speak(voice2);  //perform single-click action    
            clicks = 0;                     //after action performed, reset counter
        }, DELAY);
    } 
    else {
        clearTimeout(timer);                //prevent single-click action
        location.href= 'index.html';        //perform double-click action
        speechSynthesis.speak(voice3);      //perform double-click action
        clicks = 0;                         //after action performed, reset counter
    }
};

/*
t2.addEventListener('click', function(){
    clicks++;  //count clicks
    if(clicks === 1) {
        timer = setTimeout(function() {
            speechSynthesis.speak(voice2);  //perform single-click action    
            clicks = 0;                     //after action performed, reset counter
        }, DELAY);
    } 
    else {
        clearTimeout(timer);                //prevent single-click action
        location.href= 'index.html';        //perform double-click action
        speechSynthesis.speak(voice3);      //perform double-click action
        clicks = 0;                         //after action performed, reset counter
    }
});
*/

t2.addEventListener('click', backHandler);
t2.addEventListener('dblclick', function(e){
    e.preventDefault();  //cancel system double-click event
});

let sound3 = "Main Page";
const voice3 = new SpeechSynthesisUtterance(sound3);
voice3.pitch = 1.0;
voice3.volume = 1.0;
voice3.rate = 1.0;
let t3 = document.getElementById('body');

function bodyHandler (e) {
    if (e.keyCode == 37) {
        location.href= 'index.html';
        speechSynthesis.speak(voice3);
    }
};
t3.addEventListener('keyup', bodyHandler);

/*
t3.addEventListener('keyup', function(e){
    if (e.keyCode == 37) {
        location.href= 'index.html';
        speechSynthesis.speak(voice3);
    }
});
*/