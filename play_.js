$(document).ready(function () {

    window.addEventListener("scroll", preventMotion, false);
    function preventMotion(event)
    {
        window.scrollTo(0, 0);
        event.preventDefault();
        event.stopPropagation();
    }

    /* think about the way how to pause // go back to game // go back to the main page*/
    let sound2 = "Pause the game. Back to the main menu";
    const voice2 = new SpeechSynthesisUtterance(sound2);
    voice2.pitch = 1.0;
    voice2.volume = 0.3;
    voice2.rate = 1.0;

    let sound3 = "Main Page";
    const voice3 = new SpeechSynthesisUtterance(sound3);
    voice3.pitch = 1.0;
    voice3.volume = 0.3;
    voice3.rate = 1.0;
    /*
    function bodyHandler (e) {
        if (e.keyCode == 37) { // 37은 왼쪽 화살표. 39는 오른쪽 화살표
            location.href= 'index.html';
            speechSynthesis.speak(voice3);
        }
    };
    $('#body').on('keyup', bodyHandler);
    */

    // Single-click occurs if click is done once
    // Double-click occurs if click is done twice within 0.2 sec.
    var DELAY = 200, clicks = 0, timer = null;
    function backHandler (e) {
        if (!stop) {
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
        }
    };
    $('#back').on('click', backHandler);
    $('#back').on('dblclick', function(e) {
        e.preventDefault();  //cancel system double-click event
    });

});
