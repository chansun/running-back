window.addEventListener("scroll", preventMotion, false);
window.addEventListener("touchmove", preventMotion, false);
function preventMotion(event) {
    window.scrollTo(0, 0);
    event.preventDefault();
    event.stopPropagation();
}

function voice_make(sentence) {
    const voice = new SpeechSynthesisUtterance(sentence);
    voice.pitch = 1.0;
    voice.volume = 0.3;
    voice.rate = 1.0;
    return voice;
}

var init = true, current = 100, wait = true, latency = 1200;
var page_delay = 0;
//var page_delay = 1800;

function wait_call() {
    wait = false;
    setTimeout(function(){ 
        wait = true;
    }, latency);  
}

function wait_call2(latency_given) {
    wait = false;
    setTimeout(function(){ 
        wait = true;
    }, latency_given);  
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const voice1 = voice_make("Volume Setting");
const voice1_2 = voice_make("Volume Setting Page");

const voice2 = voice_make("Difficulty Setting");
const voice2_2 = voice_make("Difficulty Setting Page");

const voice3 = voice_make("Back to the Main Page");
const voice3_2 = voice_make("Main Page");

const voice4 = voice_make("Press up or down arrow key to select the menu. Press space bar twice to move to the corresponding page.");

function volume_change(voice1, voice1_2, voice2, voice2_2, voice3, voice3_2, voice4) {
    var volume = getCookie("volume");
    if (volume == "volume3") { // default value
        voice1.volume = 0.3;
        voice1_2.volume = 0.3;
        voice2.volume = 0.3;
        voice2_2.volume = 0.3;
        voice3.volume = 0.3;
        voice3_2.volume = 0.3;
        voice4.volume = 0.3;
    }
    else if (volume == "volume2") {
        voice1.volume = 0.3 * 0.7;
        voice1_2.volume = 0.3 * 0.7;
        voice2.volume = 0.3 * 0.7;
        voice2_2.volume = 0.3 * 0.7;
        voice3.volume = 0.3 * 0.7;
        voice3_2.volume = 0.3 * 0.7;
        voice4.volume = 0.3 * 0.7;
    }
    else if (volume == "volume1") {
        voice1.volume = 0.3 * 0.4;
        voice1_2.volume = 0.3 * 0.4;
        voice2.volume = 0.3 * 0.4;
        voice2_2.volume = 0.3 * 0.4;
        voice3.volume = 0.3 * 0.4;
        voice3_2.volume = 0.3 * 0.4;
        voice4.volume = 0.3 * 0.4;
    }
}

$(document).ready(function () {
    var x = document.cookie; // comment this out later
    console.log(x); // comment this out later
    
    volume_change(voice1, voice1_2, voice2, voice2_2, voice3, voice3_2, voice4);

    // const voice1 = voice_make("Volume Setting");
    // const voice1_2 = voice_make("Volume Setting Page");
    var DELAY = 500, clicks = 0, timer = null;
    function volumeHandler (e) {
        clicks++;  //count clicks
        if(clicks === 1) { // Single-click occurs if click is done once
            timer = setTimeout(function() {
                speechSynthesis.speak(voice1);  //perform single-click action
                clicks = 0;                     //after action performed, reset counter
                wait_call();
            }, DELAY);
        }
        else { // Double-click occurs if click is done twice within 0.2 sec.
            clearTimeout(timer);                //prevent single-click action
            speechSynthesis.speak(voice1_2);    //perform double-click action
            setTimeout(function() {             //perform double-click action
                location.href= 'volumeSetting.html';     //perform double-click action
            }, page_delay);
            clicks = 0;                         //after action performed, reset counter
        }
    }
    
    // const voice2 = voice_make("Difficulty Setting");
    // const voice2_2 = voice_make("Difficulty Setting Page");
    var DELAY2 = 500, clicks2 = 0, timer2 = null;
    function difficultyHandler (e) {
        //speechSynthesis.speak(voice2);
        clicks2++;  //count clicks
        if(clicks2 === 1) { // Single-click occurs if click is done once
            timer2 = setTimeout(function() {
                speechSynthesis.speak(voice2);
                clicks2 = 0;                     //after action performed, reset counter
                wait_call();
            }, DELAY2);
        }
        else {                                  // Double-click occurs if click is done twice within 0.2 sec.
            clearTimeout(timer2);               //prevent single-click action
            speechSynthesis.speak(voice2_2);    //perform double-click action
            setTimeout(function() {             //perform double-click action
                location.href= 'difficultySetting.html';     //perform double-click action
            }, page_delay);
            clicks2 = 0;                        //after action performed, reset counter
        }
    }

    // const voice3 = voice_make("Back to the Main Page");
    // const voice3_2 = voice_make("Main Page");
    var DELAY3 = 500, clicks3 = 0, timer3 = null;
    function backHandler (e) {
        clicks3++;  //count clicks
        if(clicks3 === 1) { // Single-click occurs if click is done once
            timer3 = setTimeout(function() {
                speechSynthesis.speak(voice3);  //perform single-click action
                clicks3 = 0;                     //after action performed, reset counter
                wait_call();
            }, DELAY3);
        }
        else { // Double-click occurs if click is done twice within 0.2 sec.
            clearTimeout(timer3);                //prevent single-click action
            speechSynthesis.speak(voice3_2);      //perform double-click action
            setTimeout(function() {             //perform double-click action
                location.href= 'index.html';     //perform double-click action
            }, page_delay);
            clicks3 = 0;                         //after action performed, reset counter
        }
    }

    function init_operation() {
        init = false;
        current = 0;
        speechSynthesis.speak(voice1);
        document.getElementById("Volume_Setting").style.fontSize="40px";
        //
        document.getElementById("volume").style.width="70%";
        document.getElementById("volume").style.marginLeft="15%";
        document.getElementById("difficulty").style.width="60%";
        document.getElementById("difficulty").style.marginLeft="20%";
        document.getElementById("back").style.width="60%";
        document.getElementById("back").style.marginLeft="20%";
    }

    function on_volume_setting_bar() {
        speechSynthesis.speak(voice1);
        document.getElementById("Volume_Setting").style.fontSize="40px";
        document.getElementById("Difficulty_Setting").style.fontSize="30px";
        document.getElementById("Back").style.fontSize="30px";
        //
        document.getElementById("volume").style.width="70%";
        document.getElementById("volume").style.marginLeft="15%";
        document.getElementById("difficulty").style.width="60%";
        document.getElementById("difficulty").style.marginLeft="20%";
        document.getElementById("back").style.width="60%";
        document.getElementById("back").style.marginLeft="20%";
    }

    function on_difficulty_setting_bar() {
        speechSynthesis.speak(voice2);
        document.getElementById("Volume_Setting").style.fontSize="30px";
        document.getElementById("Difficulty_Setting").style.fontSize="40px";
        document.getElementById("Back").style.fontSize="30px";
        //
        document.getElementById("volume").style.width="60%";
        document.getElementById("volume").style.marginLeft="20%";
        document.getElementById("difficulty").style.width="70%";
        document.getElementById("difficulty").style.marginLeft="15%";
        document.getElementById("back").style.width="60%";
        document.getElementById("back").style.marginLeft="20%";
    }

    function on_back_bar() {
        speechSynthesis.speak(voice3);
        document.getElementById("Volume_Setting").style.fontSize="30px";
        document.getElementById("Difficulty_Setting").style.fontSize="30px";
        document.getElementById("Back").style.fontSize="40px";
        //
        document.getElementById("volume").style.width="60%";
        document.getElementById("volume").style.marginLeft="20%";
        document.getElementById("difficulty").style.width="60%";
        document.getElementById("difficulty").style.marginLeft="20%";
        document.getElementById("back").style.width="70%";
        document.getElementById("back").style.marginLeft="15%";
    }

    function bodyHandler (e) {
        if (wait) {
            if (e.keyCode == 40) { // 40 is arrow down
                if (init) {
                    init_operation();
                    wait_call();
                }
                else {
                    current = (current + 1) % 3;
                    if (current == 0) { // On Play Game bar
                        on_volume_setting_bar();
                        wait_call();
                    }   
                    else if (current == 1) { // On Tutorial bar
                        on_difficulty_setting_bar();
                        wait_call();
                    }
                    else if (current == 2) { // On Settings bar
                        on_back_bar();
                        wait_call();
                    }
                }
            }  
            else if (e.keyCode == 38) { // 38 is arrow up
                if (init) {
                    init_operation();
                    wait_call();
                }
                else if (current == 0) {
                    current = 2; // On Settings bar
                    on_back_bar();
                    wait_call();
                }
                else {
                    current = current - 1;
                    if (current == 0) { // On Play Game bar
                        on_volume_setting_bar();
                        wait_call();
                    }   
                    else if (current == 1) { // On Tutorial bar
                        on_difficulty_setting_bar();
                        wait_call();
                    }
                    else if (current == 2) { // On Settings bar
                        on_back_bar();
                        wait_call();
                    }
                }
            }
            else if (e.keyCode == 32) { // space bar
                if (current == 0) { // On Play Game bar
                    volumeHandler(e);
                }
                else if (current == 1) { // On Tutorial bar
                    difficultyHandler(e);  
                }
                else if (current == 2) { // On Settings bar
                    backHandler(e); 
                }
            }
            else {
                speechSynthesis.speak(voice4);
                wait_call2(6000);
            }
        }
    };
    $('#body').on('keydown', bodyHandler);
});
