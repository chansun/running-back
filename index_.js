$(document).ready(function () {

    window.addEventListener("scroll", preventMotion, false);
    //window.addEventListener("touchmove", preventMotion, false);
    function preventMotion(event)
    {
        window.scrollTo(0, 0);
        event.preventDefault();
        event.stopPropagation();
    }

    /*
    Playing music on page load doesn't work in this way
    createjs.Sound.initializeDefaultPlugins();
    var assetsPath = "./assets/bgm/";
    var sounds = [{
        src:"track3.mp3", data: {
            audioSprite: [
                {id:"sound1", startTime:0, duration:150000}
            ]}
        }
    ];
    createjs.Sound.registerSounds(sounds, assetsPath);
    createjs.Sound.play("sound1");
    */

    let sound1 = "Play Game";
    const voice1 = new SpeechSynthesisUtterance(sound1);
    voice1.pitch = 1.0;
    voice1.volume = 1.0;
    voice1.rate = 1.0;
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
            speechSynthesis.speak(voice4);      //perform double-click action
            clicks = 0;                         //after action performed, reset counter
        }
    }

    $('#play').on('click', playHandler);
    $('#play').on('dblclick', function(e) {
        e.preventDefault();  //cancel system double-click event
    });

    let sound2 = "Tutorial";
    const voice2 = new SpeechSynthesisUtterance(sound2);
    voice2.pitch = 1.0;
    voice2.volume = 1.0;
    voice2.rate = 1.0;
    function tutorialHandler (e) {
        speechSynthesis.speak(voice2);
    };
    $('#tutorial').on('click', tutorialHandler);

    let sound3 = "High Scores";
    const voice3 = new SpeechSynthesisUtterance(sound3);
    voice3.pitch = 1.0;
    voice3.volume = 1.0;
    voice3.rate = 1.0;
    function high_scoresHandler (e) {
        speechSynthesis.speak(voice3);
    };
    $('#high_scores').on('click', high_scoresHandler);


    let sound4 = "Play Page";
    const voice4 = new SpeechSynthesisUtterance(sound4);
    voice4.pitch = 1.0;
    voice4.volume = 1.0;
    voice4.rate = 1.0;
    /*
    function bodyHandler (e) {
        if (e.keyCode == 39) {
            location.href= 'play.html';
            speechSynthesis.speak(voice4);
        }
    };
    $('#body').on('keyup', bodyHandler);*/


});
