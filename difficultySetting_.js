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

var init = true, current = 100, wait = true, latency = 1000;
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

function bake_cookie(difficulty, mins) {
    document.cookie = `difficulty=${difficulty}`;
    var d = new Date();
    d.setTime(d.getTime() + (mins*60*1000)); // 10 mins (600000 ms) cookie duration
    document.cookie = "expires="+ d.toUTCString(); // GMT base. Greenwich time zone.
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

function border_update_by_difficulty() {
    // default difficulty = "easy"
    $("#hard").css("border", "");
    $("#easy").css("border", "10px solid white");
    var difficulty = getCookie("difficulty");
    if (difficulty == "hard") { // default value
        $("#hard").css("border", "10px solid white");
        $("#easy").css("border", "");
    }
    else if (difficulty == "easy") {
        $("#hard").css("border", "");
        $("#easy").css("border", "10px solid white");
    }
}

const voice1 = voice_make("Hard Mode");
const voice1_2 = voice_make("Hard Mode Selected");

const voice2 = voice_make("Easy Mode");
const voice2_2 = voice_make("Easy Mode Selected");

const voice3 = voice_make("Back to the Settings Page");
const voice3_2 = voice_make("Settings Page");

const voice4 = voice_make("Press up or down arrow key to hear the mode. Press space bar twice to select the mode.");

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

// function css_hard_select() {
//     $("#hard").css("border", "10px solid white");
//     $("#easy").css("border", "");
//     bake_cookie("hard", 10);
// }

// function css_easy_select() {
//     $("#hard").css("border", "");
//     $("#easy").css("border", "10px solid white");
//     bake_cookie("easy", 10);
// }

$(document).ready(function () {
    var x = document.cookie; // comment this out later
    console.log(x); // comment this out later

    volume_change(voice1, voice1_2, voice2, voice2_2, voice3, voice3_2, voice4);
    border_update_by_difficulty();

    // const voice1 = voice_make("Hard Mode");
    // const voice1_2 = voice_make("Hard Mode Selected");
    var DELAY = 500, clicks = 0, timer = null;
    function hardModeHandler (e) {
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
            
            bake_cookie("hard", 10);
            border_update_by_difficulty();

            clicks = 0;                         //after action performed, reset counter
            wait_call();
        }
    }
    
    // const voice2 = voice_make("Easy Mode");
    // const voice2_2 = voice_make("Easy Mode Selected");
    var DELAY2 = 500, clicks2 = 0, timer2 = null;
    function easyModeHandler (e) {
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
            
            bake_cookie("easy", 10);
            border_update_by_difficulty();

            clicks2 = 0;                        //after action performed, reset counter
            wait_call();
        }
    }

    // const voice3 = voice_make("Back to the Settings Page");
    // const voice3_2 = voice_make("Settings Page");
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
                location.href= 'settings.html';     //perform double-click action
            }, page_delay);
            clicks3 = 0;                         //after action performed, reset counter
        }
    }

    function init_operation() {
        init = false;
        current = 0;
        speechSynthesis.speak(voice1);
        document.getElementById("Hard_Mode").style.fontSize="40px";
        //
        document.getElementById("hard").style.width="70%";
        document.getElementById("hard").style.marginLeft="15%";
        document.getElementById("easy").style.width="60%";
        document.getElementById("easy").style.marginLeft="20%";
        document.getElementById("back").style.width="60%";
        document.getElementById("back").style.marginLeft="20%";
    }

    function on_hard_mode_bar() {
        speechSynthesis.speak(voice1);
        document.getElementById("Hard_Mode").style.fontSize="40px";
        document.getElementById("Easy_Mode").style.fontSize="30px";
        document.getElementById("Back").style.fontSize="30px";
        //
        document.getElementById("hard").style.width="70%";
        document.getElementById("hard").style.marginLeft="15%";
        document.getElementById("easy").style.width="60%";
        document.getElementById("easy").style.marginLeft="20%";
        document.getElementById("back").style.width="60%";
        document.getElementById("back").style.marginLeft="20%";
    }

    function on_easy_mode_bar() {
        speechSynthesis.speak(voice2);
        document.getElementById("Hard_Mode").style.fontSize="30px";
        document.getElementById("Easy_Mode").style.fontSize="40px";
        document.getElementById("Back").style.fontSize="30px";
        //
        document.getElementById("hard").style.width="60%";
        document.getElementById("hard").style.marginLeft="20%";
        document.getElementById("easy").style.width="70%";
        document.getElementById("easy").style.marginLeft="15%";
        document.getElementById("back").style.width="60%";
        document.getElementById("back").style.marginLeft="20%";
    }

    function on_back_bar() {
        speechSynthesis.speak(voice3);
        document.getElementById("Hard_Mode").style.fontSize="30px";
        document.getElementById("Easy_Mode").style.fontSize="30px";
        document.getElementById("Back").style.fontSize="40px";
        //
        document.getElementById("hard").style.width="60%";
        document.getElementById("hard").style.marginLeft="20%";
        document.getElementById("easy").style.width="60%";
        document.getElementById("easy").style.marginLeft="20%";
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
                    if (current == 0) { 
                        on_hard_mode_bar();
                        wait_call();
                    }   
                    else if (current == 1) {
                        on_easy_mode_bar();
                        wait_call();
                    }
                    else if (current == 2) {
                        on_back_bar();
                        //wait_call();
                        wait_call2(1400);
                    }
                }
            }
            else if (e.keyCode == 38) { // 38 is arrow up
                if (init) {
                    init_operation();
                    wait_call();
                }
                else if (current == 0) {
                    current = 2;
                    on_back_bar();
                    wait_call();
                }
                else {
                    current = current - 1;
                    if (current == 0) {
                        on_hard_mode_bar();
                        wait_call();
                    }   
                    else if (current == 1) {
                        on_easy_mode_bar();
                        wait_call();
                    }
                    else if (current == 2) {
                        on_back_bar();
                        //wait_call();
                        wait_call2(1400);
                    }
                }
            }
            else if (e.keyCode == 32) { // space bar
                if (current == 0) {
                    hardModeHandler(e);
                    //var x = document.cookie; // comment this out later
                    //console.log(x);          // comment this out later
                }
                else if (current == 1) {
                    easyModeHandler(e); 
                    //var x = document.cookie; // comment this out later
                    //console.log(x);          // comment this out later
                }
                else if (current == 2) {
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
