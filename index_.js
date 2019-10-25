$(document).ready(function () {

    window.addEventListener("scroll", preventMotion, false);
    //window.addEventListener("touchmove", preventMotion, false);
    function preventMotion(event)
    {
        window.scrollTo(0, 0);
        event.preventDefault();
        event.stopPropagation();
    }

    let sound1 = "Play Game";
    const voice1 = new SpeechSynthesisUtterance(sound1);
    voice1.pitch = 1.0;
    voice1.volume = 0.3;
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
    voice2.volume = 0.3;
    voice2.rate = 1.0;
    function tutorialHandler (e) {
        speechSynthesis.speak(voice2);
        //sound_h.play();
    };
    $('#tutorial').on('click', tutorialHandler);

    let sound3 = "High Scores";
    const voice3 = new SpeechSynthesisUtterance(sound3);
    voice3.pitch = 1.0;
    voice3.volume = 0.3;
    voice3.rate = 1.0;
    function high_scoresHandler (e) {
        speechSynthesis.speak(voice3);
    };
    $('#high_scores').on('click', high_scoresHandler);

    let sound4 = "Play Page";
    const voice4 = new SpeechSynthesisUtterance(sound4);
    voice4.pitch = 1.0;
    voice4.volume = 0.3;
    voice4.rate = 1.0;

    var init = true;
    var current = 100;
    var latency = true;

    function bodyHandler (e) {
        if (latency) {
            if (e.keyCode == 40) { // 40 is arrow down
                if (init) {
                    init = false;
                    current = 0;
                    speechSynthesis.speak(voice1);
                    document.getElementById("Play_Game").style.fontSize="40px";
                    //
                    document.getElementById("play").style.width="70%";
                    document.getElementById("play").style.marginLeft="15%";
                    document.getElementById("tutorial").style.width="60%";
                    document.getElementById("tutorial").style.marginLeft="20%";
                    document.getElementById("high_scores").style.width="60%";
                    document.getElementById("high_scores").style.marginLeft="20%";
                    //
                    latency = false;
                    setTimeout(function(){ 
                        latency = true;
                    }, 1000);
                }
                else {
                    current = (current + 1) % 3;
                    if (current == 0) {
                        speechSynthesis.speak(voice1);
                        document.getElementById("Play_Game").style.fontSize="40px";
                        document.getElementById("Tutorial").style.fontSize="30px";
                        document.getElementById("High_Scores").style.fontSize="30px";
                        //
                        document.getElementById("play").style.width="70%";
                        document.getElementById("play").style.marginLeft="15%";
                        document.getElementById("tutorial").style.width="60%";
                        document.getElementById("tutorial").style.marginLeft="20%";
                        document.getElementById("high_scores").style.width="60%";
                        document.getElementById("high_scores").style.marginLeft="20%";
                        //
                        latency = false;
                        setTimeout(function(){ 
                            latency = true;
                        }, 1000);  
                    }   
                    else if (current == 1) {
                        speechSynthesis.speak(voice2);
                        document.getElementById("Play_Game").style.fontSize="30px";
                        document.getElementById("Tutorial").style.fontSize="40px";
                        document.getElementById("High_Scores").style.fontSize="30px";
                        //
                        document.getElementById("play").style.width="60%";
                        document.getElementById("play").style.marginLeft="20%";
                        document.getElementById("tutorial").style.width="70%";
                        document.getElementById("tutorial").style.marginLeft="15%";
                        document.getElementById("high_scores").style.width="60%";
                        document.getElementById("high_scores").style.marginLeft="20%";
                        //
                        latency = false;
                        setTimeout(function(){ 
                            latency = true;
                        }, 1000);  
                    }
                    else if (current == 2) {
                        speechSynthesis.speak(voice3);
                        document.getElementById("Play_Game").style.fontSize="30px";
                        document.getElementById("Tutorial").style.fontSize="30px";
                        document.getElementById("High_Scores").style.fontSize="40px";
                        //
                        document.getElementById("play").style.width="60%";
                        document.getElementById("play").style.marginLeft="20%";
                        document.getElementById("tutorial").style.width="60%";
                        document.getElementById("tutorial").style.marginLeft="20%";
                        document.getElementById("high_scores").style.width="70%";
                        document.getElementById("high_scores").style.marginLeft="15%";
                        //
                        latency = false;
                        setTimeout(function(){ 
                            latency = true;
                        }, 1000);  
                    }
                }
            }
            
            else if (e.keyCode == 38) { // 38 is arrow up
                if (init) {
                    init = false;
                    current = 0;
                    speechSynthesis.speak(voice1);
                    document.getElementById("Play_Game").style.fontSize="40px";
                    //
                    document.getElementById("play").style.width="70%";
                    document.getElementById("play").style.marginLeft="15%";
                    document.getElementById("tutorial").style.width="60%";
                    document.getElementById("tutorial").style.marginLeft="20%";
                    document.getElementById("high_scores").style.width="60%";
                    document.getElementById("high_scores").style.marginLeft="20%";
                    //
                    latency = false;
                    setTimeout(function(){ 
                        latency = true;
                    }, 1000);  
                }
                else if (current == 0) {
                    current = 2;
                    speechSynthesis.speak(voice3);
                    document.getElementById("Play_Game").style.fontSize="30px";
                    document.getElementById("Tutorial").style.fontSize="30px";
                    document.getElementById("High_Scores").style.fontSize="40px";
                    //
                    document.getElementById("play").style.width="60%";
                    document.getElementById("play").style.marginLeft="20%";
                    document.getElementById("tutorial").style.width="60%";
                    document.getElementById("tutorial").style.marginLeft="20%";
                    document.getElementById("high_scores").style.width="70%";
                    document.getElementById("high_scores").style.marginLeft="15%";
                    //
                    latency = false;
                    setTimeout(function(){ 
                        latency = true;
                    }, 1000);  
                }
                else {
                    current = current - 1;
                    if (current == 0) {
                        speechSynthesis.speak(voice1);
                        document.getElementById("Play_Game").style.fontSize="40px";
                        document.getElementById("Tutorial").style.fontSize="30px";
                        document.getElementById("High_Scores").style.fontSize="30px";
                        //
                        document.getElementById("play").style.width="70%";
                        document.getElementById("play").style.marginLeft="15%";
                        document.getElementById("tutorial").style.width="60%";
                        document.getElementById("tutorial").style.marginLeft="20%";
                        document.getElementById("high_scores").style.width="60%";
                        document.getElementById("high_scores").style.marginLeft="20%";
                        //
                        latency = false;
                        setTimeout(function(){ 
                            latency = true;
                        }, 1000);  
                    }   
                    else if (current == 1) {
                        speechSynthesis.speak(voice2);
                        document.getElementById("Play_Game").style.fontSize="30px";
                        document.getElementById("Tutorial").style.fontSize="40px";
                        document.getElementById("High_Scores").style.fontSize="30px";
                        //
                        document.getElementById("play").style.width="60%";
                        document.getElementById("play").style.marginLeft="20%";
                        document.getElementById("tutorial").style.width="70%";
                        document.getElementById("tutorial").style.marginLeft="15%";
                        document.getElementById("high_scores").style.width="60%";
                        document.getElementById("high_scores").style.marginLeft="20%";
                        //
                        latency = false;
                        setTimeout(function(){ 
                            latency = true;
                        }, 1000);  
                    }
                    else if (current == 2) {
                        speechSynthesis.speak(voice3);
                        document.getElementById("Play_Game").style.fontSize="30px";
                        document.getElementById("Tutorials").style.fontSize="30px";
                        document.getElementById("High_Scores").style.fontSize="40px";
                        //
                        document.getElementById("play").style.width="60%";
                        document.getElementById("play").style.marginLeft="20%";
                        document.getElementById("tutorial").style.width="60%";
                        document.getElementById("tutorial").style.marginLeft="20%";
                        document.getElementById("high_scores").style.width="70%";
                        document.getElementById("high_scores").style.marginLeft="15%";
                        //
                        latency = false;
                        setTimeout(function(){ 
                            latency = true;
                        }, 1000);  
                    }
                }
            }
            else if (e.keyCode == 32) { // space bar
                if (current == 0) {
                    location.href= 'play.html';
                    speechSynthesis.speak(voice4);
                    latency = false;
                    setTimeout(function(){ 
                        latency = true;
                    }, 1000);  
                }
                else if (current == 1) {
                    speechSynthesis.speak(voice2);
                    // narrate tutorials
                    latency = false;
                    setTimeout(function(){ 
                        latency = true;
                    }, 1000);  
                }
                else if (current == 2) {
                    speechSynthesis.speak(voice3);
                    // narrate high scores
                    latency = false;
                    setTimeout(function(){ 
                        latency = true;
                    }, 1000);  
                }
            }
        }
    };
    $('#body').on('keydown', bodyHandler);




});
