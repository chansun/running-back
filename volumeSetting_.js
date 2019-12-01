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

const volume1 = voice_make("Volume1");
volume1.volume = (0.3) * 0.4;
const volume1Selected = voice_make("Volume1 Selected");
volume1Selected.volume = (0.3) * 0.4;

const volume2 = voice_make("Volume2");
volume2.volume = (0.3) * 0.7;
const volume2Selected = voice_make("Volume2 Selected");
volume2Selected.volume = (0.3) * 0.7;

const volume3 = voice_make("Volume3");
volume3.volume = 0.3;
const volume3Selected = voice_make("Volume3 Selected");
volume3Selected.volume = 0.3;

const back = voice_make("Back to the Settings Page");
const back_2 = voice_make("Settings Page");

const settingPage = voice_make("Settings Page");

let voice4 = voice_make("Press up or down arrow key to hear the volume. Press space bar twice to select the volume.");

function speak_helper(current) {
    if (current == 4) {
        speechSynthesis.speak(volume3);
    }
    else if (current == 3) {
        speechSynthesis.speak(volume2);
    }
    else if (current == 2) {
        speechSynthesis.speak(volume1);
    }
    else if (current == 1) {
        speechSynthesis.speak(back);
    }
}

function css_helper(current) {
    if (current == 4) {
        $('#Volume3').css("fontSize", "40px");
        $('#Volume2').css("fontSize", "30px");
        $('#Volume1').css("fontSize", "30px");
        $('#Back').css("fontSize", "30px");
        //
        $('#volume3').css("width", "70%");
        $('#volume3').css("marginLeft", "15%");
        $('#volume2').css("width", "60%");
        $('#volume2').css("marginLeft", "20%");
        $('#volume1').css("width", "60%");
        $('#volume1').css("marginLeft", "20%");
        $('#back').css("width", "60%");
        $('#back').css("marginLeft", "20%");
    }
    else if (current == 3) {
        $('#Volume3').css("fontSize", "30px");
        $('#Volume2').css("fontSize", "40px");
        $('#Volume1').css("fontSize", "30px");
        $('#Back').css("fontSize", "30px");
        //
        $('#volume3').css("width", "60%");
        $('#volume3').css("marginLeft", "20%");
        $('#volume2').css("width", "70%");
        $('#volume2').css("marginLeft", "15%");
        $('#volume1').css("width", "60%");
        $('#volume1').css("marginLeft", "20%");
        $('#back').css("width", "60%");
        $('#back').css("marginLeft", "20%");
    }
    else if (current == 2) {
        $('#Volume3').css("fontSize", "30px");
        $('#Volume2').css("fontSize", "30px");
        $('#Volume1').css("fontSize", "40px");
        $('#Back').css("fontSize", "30px");
        //
        $('#volume3').css("width", "60%");
        $('#volume3').css("marginLeft", "20%");
        $('#volume2').css("width", "60%");
        $('#volume2').css("marginLeft", "20%");
        $('#volume1').css("width", "70%");
        $('#volume1').css("marginLeft", "15%");
        $('#back').css("width", "60%");
        $('#back').css("marginLeft", "20%");
    }
    else if (current == 1) {
        $('#Volume3').css("fontSize", "30px");
        $('#Volume2').css("fontSize", "30px");
        $('#Volume1').css("fontSize", "30px");
        $('#Back').css("fontSize", "40px");
        //
        $('#volume3').css("width", "60%");
        $('#volume3').css("marginLeft", "20%");
        $('#volume2').css("width", "60%");
        $('#volume2').css("marginLeft", "20%");
        $('#volume1').css("width", "60%");
        $('#volume1').css("marginLeft", "20%");
        $('#back').css("width", "70%");
        $('#back').css("marginLeft", "15%");
    }
}


function css_volume_select(current) {
    if (current == 4) {
        $("#volume3").css("border", "10px solid white");
        $("#volume2").css("border", "");
        $("#volume1").css("border", "");
    }
    else if (current == 3) {
        $("#volume3").css("border", "");
        $("#volume2").css("border", "10px solid white");
        $("#volume1").css("border", "");
    }
    else if(current == 2) {
        $("#volume3").css("border", "");
        $("#volume2").css("border", "");
        $("#volume1").css("border", "10px solid white");
    }
}

var init = true, wait = true, latency = 1000, current = 4;
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

function up(current) {
    if (current == 4) {
        return 1;
    }
    else {
        return current + 1;
    }
}

function down(current) {
    if (current == 1) {
        return 4;
    }
    else {
        return current - 1;
    }
}

function bake_cookie(volume, mins) {
    document.cookie = `volume=${volume}`;
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



function back_volume_change() {
    var volume = getCookie("volume");
    if (volume == "volume3") {
        back.volume = 0.3;
        back_2.volume = 0.3;
        settingPage.volume = 0.3;
        voice4.volume = 0.3;
    }
    else if (volume == "volume2") {
        back.volume = (0.3) * 0.7;
        back_2.volume = (0.3) * 0.7;
        settingPage.volume = 0.3 * 0.7;
        voice4.volume = 0.3 * 0.7;

    }
    else if (volume == "volume1") {
        back.volume = (0.3) * 0.4;
        back_2.volume = (0.3) * 0.4;
        settingPage.volume = 0.3 * 0.4;
        voice4.volume = 0.3 * 0.4;
    }
}


function border_update_by_volume() {
    // default volume = "volume3"
    $("#volume3").css("border", "10px solid white");
    $("#volume2").css("border", "");
    $("#volume1").css("border", "");

    var volume = getCookie("volume");
    if (volume == "volume3") { // default value
        $("#volume3").css("border", "10px solid white");
        $("#volume2").css("border", "");
        $("#volume1").css("border", "");
    }
    else if (volume == "volume2") {
        $("#volume3").css("border", "");
        $("#volume2").css("border", "10px solid white");
        $("#volume1").css("border", "");
    }
    else if (volume == "volume1") {
        $("#volume3").css("border", "");
        $("#volume2").css("border", "");
        $("#volume1").css("border", "10px solid white");
    }
}


$(document).ready(function () {

    var x = document.cookie; // comment this out later
    console.log(x); // comment this out later

    border_update_by_volume();
    back_volume_change();

    var DELAY3 = 300, clicks3 = 0, timer3 = null;
    function volume3Handler (e) {
        clicks3++;  //count clicks
        if(clicks3 === 1) { // Single-click occurs if click is done once
            timer3 = setTimeout(function() {
                speak_helper(current);
                //speechSynthesis.speak(volumeSettingPage);  //perform single-click action
                clicks3 = 0;                     //after action performed, reset counter
                wait_call();
            }, DELAY3);
        }
        else { // Double-click occurs if click is done twice within 0.2 sec.
            clearTimeout(timer3);                //prevent single-click action
            speechSynthesis.speak(volume3Selected);    //perform double-click action

            css_volume_select(current);
            bake_cookie("volume3", 10); // convert this to actual 0.xx number later
            back_volume_change();

            clicks3 = 0;                         //after action performed, reset counter
            wait_call();
        }
    }
    
    


    var DELAY2 = 300, clicks2 = 0, timer2 = null;
    function volume2Handler (e) {
        clicks2++;  //count clicks
        if(clicks2 === 1) { // Single-click occurs if click is done once
            timer2 = setTimeout(function() {
                speak_helper(current);
                //speechSynthesis.speak(volumeSettingPage);  //perform single-click action
                clicks2 = 0;                     //after action performed, reset counter
                wait_call();
            }, DELAY2);
        }
        else { // Double-click occurs if click is done twice within 0.2 sec.
            clearTimeout(timer2);                //prevent single-click action
            speechSynthesis.speak(volume2Selected);    //perform double-click action

            css_volume_select(current);
            bake_cookie("volume2", 10); // convert this to actual 0.xx number later
            back_volume_change();

            clicks2 = 0;                         //after action performed, reset counter
            wait_call();
        }
    }


    var DELAY1 = 300, clicks1 = 0, timer1 = null;
    function volume1Handler (e) {
        clicks1++;  //count clicks
        if(clicks1 === 1) { // Single-click occurs if click is done once
            timer1 = setTimeout(function() {
                speak_helper(current);
                //speechSynthesis.speak(volumeSettingPage);  //perform single-click action
                clicks1 = 0;                     //after action performed, reset counter
                wait_call();
            }, DELAY1);
        }
        else { // Double-click occurs if click is done twice within 0.2 sec.
            clearTimeout(timer1);                //prevent single-click action
            speechSynthesis.speak(volume1Selected);    //perform double-click action

            css_volume_select(current);
            bake_cookie("volume1", 10); // convert this to actual 0.xx number later
            back_volume_change();

            clicks1 = 0;                         //after action performed, reset counter
            wait_call();
        }
    }





    //const settingPage = voice_make("Settings Page");
    var DELAY = 300, clicks = 0, timer = null;
    function backHandler (e) {
        clicks++;  //count clicks
        if(clicks === 1) { // Single-click occurs if click is done once
            timer = setTimeout(function() {
                speak_helper(current);
                //speechSynthesis.speak(volumeSettingPage);  //perform single-click action
                clicks = 0;                     //after action performed, reset counter
                wait_call();
            }, DELAY);
        }
        else { // Double-click occurs if click is done twice within 0.2 sec.
            clearTimeout(timer);                //prevent single-click action
            back_volume_change();
            speechSynthesis.speak(settingPage);    //perform double-click action
            setTimeout(function() {             //perform double-click action
                location.href= 'settings.html';     //perform double-click action
            }, page_delay);
            clicks = 0;                         //after action performed, reset counter
        }
    }

    


    function bodyHandler (e) {

        if (wait) {
            if (init && (e.keyCode == 40 || e.keyCode == 38)) {
                speak_helper(current);
                css_helper(current);
                wait_call();
                init = false;
            }
            else if (init && (e.keyCode != 40 || e.keyCode != 38)) {
                speechSynthesis.speak(voice4);
                wait_call2(6000);
            }
            else {
                if (e.keyCode == 40) { // 40 is arrow down
                    current = down(current);
                    speak_helper(current);
                    css_helper(current);
                    wait_call();
                }
                else if (e.keyCode == 38) { // 38 is arrow up
                    current = up(current);
                    speak_helper(current);
                    css_helper(current);
                    wait_call();
                }
                else if (e.keyCode == 32) { // space bar
                    if (current == 4) {
                        volume3Handler(e);  
                    }
                    else if (current == 3) {
                        volume2Handler(e); 
                    }
                    else if (current == 2) {
                        volume1Handler(e); 
                    }
                    else if (current == 1) {
                        backHandler(e); 
                    }
                }
                else {
                    speechSynthesis.speak(voice4);
                    wait_call2(6000);
                }
            }
            //var x = document.cookie; // comment this out later
            //console.log(x);          // comment this out later
        }
    };
    $('#body').on('keydown', bodyHandler);

});
