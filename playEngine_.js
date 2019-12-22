/* mp3 default volume

1. Running  = 0.4
2. breathing = 1.0
3. bgm = 0.2
4. cheering = 0.1
5. lookout = 1.0
6. tackle1 = 1.0
6-2. tackle2 = 1.0
7. go_faster = 1.0
7-2. lets_go_man = 1.0
8. touchdownb1 = 1.0
9. touchdownb2 = 1.0
10. touchdownb3 = 1.0
11. touchdown_noise = 1.0
12. swoosh = 1.0
* voice = 0.3

Multiplication rate:
Volume3 = x 1.0   (default)
Volume2 = x 0.7
Volume1 = x 0.4 

*/

let running = new Audio("./assets/sound_effects/running_grass1_ample.mp3");
running.loop = true;
running.playbackRate = 0.90; // 0.8 ~ 1.40
running.volume = 0.4;

let breathing = new Audio("./assets/sound_effects/breathing_ample.mp3");
breathing.loop = true;
breathing.playbackRate = 1.20;
breathing.volume = 1.0;

let bgm = new Audio("./assets/bgm/track4.mp3");
bgm.loop = true;
bgm.volume = 0.2;

let cheering = new Audio("./assets/sound_effects/cheering1_ample2.mp3");
cheering.loop = true;
cheering.volume = 0.1;

let look_out = new Audio("./assets/sound_effects/look_out_ample2.mp3");
look_out.volume = 1.0;

let tackle1 = new Audio("./assets/sound_effects/tackle1_ample.mp3");
tackle1.volume = 1.0;
let tackle2 = new Audio("./assets/sound_effects/tackle2.mp3");
tackle2.volume = 1.0;

let go_faster = new Audio("./assets/sound_effects/go_faster_ample.mp3");
go_faster.volume = 1.0;

let lets_go_man = new Audio("./assets/sound_effects/lets_go_man.mp3");
lets_go_man.volume = 1.0;

let touchdown_b_1 = new Audio("./assets/sound_effects/touchdown_b_1.mp3");
touchdown_b_1.volume = 1.0;

let touchdown_b_2 = new Audio("./assets/sound_effects/touchdown_b_2.mp3");
touchdown_b_2.volume = 1.0;

let touchdown_b_3 = new Audio("./assets/sound_effects/touchdown_b_3.mp3");
touchdown_b_3.volume = 1.0;

let touchdown_noise = new Audio("./assets/sound_effects/touchdown_noise2.mp3");
touchdown_noise.volume = 1.0;

let swoosh = new Audio("./assets/sound_effects/swoosh.mp3");
swoosh.volume = 1.0;

let sound = new Howl({
    src: ['./assets/sound_effects/chasing.mp3'],
    //autoplay: true,
    loop: true,
    volume: 1.0
});
    
let init = true, re_init = true;
let game_start = false, tackle_start = false, game_end = false;
let count = 0, count2 = 0;
//let warning_max = 5;
let running_now = false;
let touchdown_b_2_check = false, touchdown_b_3_check = false;

let chasing_left = false, chasing_right = false;
let once = false, twice = false;
let to_right = 0, to_left = 0;

var num, effect_right, effect_left;
var id1, id2;

var go_faster_init = true;

function voice_make(sentence) {
    const voice = new SpeechSynthesisUtterance(sentence);
    voice.pitch = 1.0;
    voice.volume = 0.3;
    voice.rate = 1.0;
    return voice;
}

const voice3 = voice_make("Main Page");
const voice4 = voice_make("Press space bar to start the game. Press space bar twice to go back to the main page.");
let wait2 = true;
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

function volume_change() {
    var volume = getCookie("volume");
    if (volume == "volume3") { // default value
        running.volume = 0.4;
        breathing.volume = 1.0;
        bgm.volume = 0.2;
        cheering.volume = 0.1;
        look_out.volume = 1.0;
        tackle1.volume = 1.0;
        tackle2.volume = 1.0;
        go_faster.volume = 1.0;
        lets_go_man.volume = 1.0;
        touchdown_b_1.volume = 1.0;
        touchdown_b_2.volume = 1.0;
        touchdown_b_3.volume = 1.0;
        touchdown_noise.volume = 1.0;
        sound.volume(0.8);
        voice3.volume = 0.3;
        voice4.volume = 0.3;
        swoosh.volume = 0.8;
    }
    else if (volume == "volume2") {
        running.volume = 0.4 * 0.7;
        breathing.volume = 1.0 * 0.7;
        bgm.volume = 0.2 * 0.7;
        cheering.volume = 0.1 * 0.7;
        look_out.volume = 1.0 * 0.7;
        tackle1.volume = 1.0 * 0.7;
        tackle2.volume = 1.0 * 0.7;
        go_faster.volume = 1.0 * 0.7;
        lets_go_man.volume = 1.0 * 0.7;
        touchdown_b_1.volume = 1.0 * 0.7;
        touchdown_b_2.volume = 1.0 * 0.7;
        touchdown_b_3.volume = 1.0 * 0.7;
        touchdown_noise.volume = 1.0 * 0.7;
        sound.volume(0.8 * 0.7);
        voice3.volume = 0.3 * 0.7;
        voice4.volume = 0.3 * 0.7;
        swoosh.volume = 0.8 * 0.7;
    }
    else if (volume == "volume1") {
        running.volume = 0.4 * 0.4;
        breathing.volume = 1.0 * 0.4;
        bgm.volume = 0.2 * 0.4;
        cheering.volume = 0.1 * 0.4;
        look_out.volume = 1.0 * 0.4;
        tackle1.volume = 1.0 * 0.4;
        tackle2.volume = 1.0 * 0.4;
        go_faster.volume = 1.0 * 0.4;
        lets_go_man.volume = 1.0 * 0.4;
        touchdown_b_1.volume = 1.0 * 0.4;
        touchdown_b_2.volume = 1.0 * 0.4;
        touchdown_b_3.volume = 1.0 * 0.4;
        touchdown_noise.volume = 1.0 * 0.4;
        sound.volume(0.8 * 0.4);
        voice3.volume = 0.3 * 0.4;
        voice4.volume = 0.3 * 0.4;
        swoosh.volume = 0.8 * 0.4;
    }
}

///
var touchdown;
var touchdown_threshold1, touchdown_threshold2, touchdown_threshold3, touchdown_threshold4, touchdown_threshold5;
var stride, warning_max;
///

function difficulty_change() {
    // default difficulty = "easy";
    touchdown = 900;
    touchdown_threshold1 = 200;
    touchdown_threshold2 = 280;
    touchdown_threshold3 = 360;
    touchdown_threshold4 = 600;
    touchdown_threshold5 = 800;
    warning_max = 10;
    stride = 3;

    var difficulty = getCookie("difficulty");
    if (difficulty == "hard") {
        touchdown = 450;
        touchdown_threshold1 = 100;
        touchdown_threshold2 = 140;
        touchdown_threshold3 = 180;
        touchdown_threshold4 = 300;
        touchdown_threshold5 = 400;
        warning_max = 5;
        stride = 1;
    }
    else if (difficulty == "easy") {
        touchdown = 900;
        touchdown_threshold1 = 200;
        touchdown_threshold2 = 280;
        touchdown_threshold3 = 360;
        touchdown_threshold4 = 600;
        touchdown_threshold5 = 800;
        warning_max = 10;
        stride = 3;
    }
}

function play_go_faster_or_lets_go_man() {
    num = Math.floor(Math.random() * 10);
    if (num >= 4) {
        go_faster.play();
        go_faster.currentTime = 0.0;
    }
    else {
        lets_go_man.play();
        lets_go_man.currentTime = 0.0;
    }
}

function play_tackle1_or_tackle2() {
    num = Math.floor(Math.random() * 10); 
    if (num >= 4) {
        tackle1.play();
        tackle1.currentTime = 0;
    }
    else {
        tackle2.play();
        tackle2.currentTime = 0;
    }
}

$(document).ready(function () {
    $('body').on('keydown', function(e){
        if (!(game_start) && (re_init)) {
            if ((e.keyCode != 32) && (e.keyCode != 37) && (e.keyCode != 39)) {
                speechSynthesis.speak(voice4); 
            }
        }
    });

    var x = document.cookie; // comment this out later
    console.log(x); // comment this out later

    difficulty_change();
    volume_change();

    var volume = getCookie("volume");
    if (volume == "") {
        console.log("volume has not been set ");
    }
    else {
        console.log("volume: " + volume);
    }

    var difficulty = getCookie("difficulty");
    if (difficulty == "") {
        console.log("difficulty has not been set ");
    }
    else {
        console.log("difficulty: " + difficulty);
    }

    var expires = getCookie("expires");
    if (expires == "") {
        console.log("expires has not been set ");
    }
    else {
        console.log("expires: " + expires);
    }
    ///

    function right_arrow(id) {
        let num = 0;
        let increase = true;
        let effect_right = setInterval(function() {
            if (increase) {
                num = num % 100;
                opacity = num/100;
                let content = `<canvas class="right_arrow_effect" width="210" height="90" style="opacity: ${opacity};"></canvas>`;
                $(id).html(content);
                num = num + 4;
                if (num >= 96) {
                    increase = false;
                }
            }
            else {
                num = num % 100;
                opacity = num/100;
                let content = `<canvas class="right_arrow_effect" width="210" height="90" style="opacity: ${opacity};"></canvas>`;
                $(id).html(content);
                num = num - 4;
                if (num <= 0) {
                    increase = true;
                }
            }
        }, 20);
        return effect_right;
    };
    
    function left_arrow(id) {
        let num2 = 0;
        let increase2 = true;
        let effect_left = setInterval(function() {
        if (increase2) {
            num2 = num2 % 100;
            opacity = num2/100;
            let content = `<canvas class="left_arrow_effect" width="210" height="90" style="opacity: ${opacity};"></canvas>`;
            $(id).html(content);
            num2 = num2 + 4;
            if (num2 >= 96) {
                increase2 = false;
            }
        }
        else {
            num2 = num2 % 100;
            opacity = num2/100;
            let content = `<canvas class="left_arrow_effect" width="210" height="90" style="opacity: ${opacity};"></canvas>`;
            $(id).html(content);
            num2 = num2 - 4;
            if (num2 <= 0) {
                increase2 = true;
            }
        }
        }, 20);
        return effect_left;
    };

    function both_arrow(id) {
        let num2 = 0;
        let increase2 = true;
        let effect_both = setInterval(function() {
        if (increase2) {
            num2 = num2 % 100;
            opacity = num2/100;
            let content = `<canvas class="both_left_arrow_effect" width="160" height="80" style="opacity: ${opacity};"></canvas><canvas class="both_right_arrow_effect" width="160" height="80" style="opacity: ${opacity};"></canvas>`;
            $(id).html(content);
            num2 = num2 + 4;
            if (num2 >= 96) {
                increase2 = false;
            }
        }
        else {
            num2 = num2 % 100;
            opacity = num2/100;
            let content = `<canvas class="both_left_arrow_effect" width="160" height="80" style="opacity: ${opacity};"></canvas><canvas class="both_right_arrow_effect" width="160" height="80" style="opacity: ${opacity};"></canvas>`;
            $(id).html(content);
            num2 = num2 - 4;
            if (num2 <= 0) {
                increase2 = true;
            }
        }
        }, 20);
        return effect_both;
    };

    let effect_both = both_arrow("#arrow_both");
    clearInterval(effect_both);
    $('.both_left_arrow_effect').detach();
    $('.both_right_arrow_effect').detach();

    function text_animation(text) {
        let content = `<h1 class="tlt" style="font-size: 100px; color:whitesmoke;">${text}</h1>`;
        $('#text').html(content);
        let temp = `<div class="empty_space title is-6" id="void" style="visibility:hidden">---</div>`;
        $('.tlt').textillate({
            minDisplayTime: 100,
            //initialDelay: 1000,
            in: 
                { effect: 'bounceIn',
                  sync: true,
                  delay: 100,
                },
            out: 
                { effect: 'bounceOut', 
                  sync: true,
                  delay: 100,
                  callback: function () {
                      $('.tlt').detach();
                      $('#text').append(temp);
                      //asdfghjklkjhgf; // purposely break the function
                  },
                },
            loop: true,
        });
    };

    var DELAY = 200, clicks = 0, timer = null;
    function backToMain (e) {
        if (e.keyCode == 32) { // 32 is space bar
            clicks++;  //count clicks
            if(clicks === 1) {
                timer = setTimeout(function() {
                    // does nothing
                    clicks = 0;                     //after action performed, reset counter
                }, DELAY);
            }
            else {
                clearTimeout(timer);                //prevent single-click action
                location.href= 'index.html';         //perform double-click action
                speechSynthesis.speak(voice3);      //perform double-click action
                clicks = 0;                         //after action performed, reset counter
            }
        }
    }
    $('body').on('keydown', backToMain);

    function bodyHandler (e) {
        if (e.keyCode == 39) { // 39 is ->, right arrow
            if (!init && game_start) {
                e.preventDefault();
                count += stride;
                count2 += stride;
                running_now = true;
                if (running.currentTime > 18.0) {
                    running.currentTime = 0.8;
                }
                running.play();
                if (breathing.currentTime > 18.0) {
                    breathing.currentTime = 0.8;
                }
                breathing.play();
                touchdown = touchdown - stride;
                if (chasing_left) {
                    to_right++;
                }
                if (chasing_right) {
                    to_left--;
                }
            }
        }
        else if (e.keyCode == 37) { // 37 is <-, left arrow
            if (!init && game_start) {
                e.preventDefault();
                count += stride;
                count2 += stride;
                running_now = true;
                if (running.currentTime > 18.0) {
                    running.currentTime = 0.8;
                }
                running.play();
                if (breathing.currentTime > 18.0) {
                    breathing.currentTime = 0.8;
                }
                breathing.play();
                touchdown = touchdown - stride;
                if (chasing_left) {
                    to_right--;
                }
                if (chasing_right) {
                    to_left++;
                }
            }
        }
        else if (e.keyCode == 32) { // space bar
            if (init && re_init) {
                bgm.play();
                cheering.play();
                init = false;
                re_init = false;
                setTimeout(function() {
                    look_out.play();
                    setTimeout(function() {
                        text_animation("Go!");
                        setTimeout(function() {
                            effect_both = both_arrow("#arrow_both");
                        }, 2300);            
                    }, 1500);
                    setTimeout(function() {
                        game_start = true;
                        setTimeout(function() {
                            tackle_start = true;
                        }, 2000);
                    }, 2000);
                }, 2000);
                let test = sound.play();
                sound.pause();
            }
        }
    };
    $('#body').on('keydown', bodyHandler);

    let timerId = setInterval(function() {
        if (!running_now) {
            running.pause();
            breathing.pause();
            running.currentTime = 0.8;
            breathing.currentTime = 0.8;
            running.playbackRate = 0.90;
        }
        if (count >= 10) {
            running.playbackRate = 1.40;
        }
        else {
            running.playbackRate = 0.90;
        }
        let speed = $("#speed");
        speed.empty();
        speed.append(count + "/sec");
        count = 0;
        running_now = false;
    }, 1000);

    let timerId2 = setInterval(function() {
        if (game_start && tackle_start) {
            if (chasing_right && to_left <= 8) {
                //alert("caught from the right!");
                game_end = true;
                setTimeout(function() {
                    play_tackle1_or_tackle2();
                    // tackle1.play();
                    // tackle1.currentTime = 0;
                    //----------------------------------------------
                    text_animation("Tackled!");
                    clearInterval(effect_left);
                    $('.left_arrow_effect').detach();
                    //----------------------------------------------
                }, 500);
                chasing_right = false;
            }
            else if (chasing_right && to_left > 8) {
                //alert("nice dodge!");
                chasing_right = false;
                swoosh.play();
                sound.fade((sound.volume()), 0, 500, id2); // fade out
                //sound.pause(id2);
                //----------------------------------------------
                clearInterval(effect_left);
                $('.left_arrow_effect').detach();
                text_animation("Nice Dodge!");

                setTimeout(function() {
                    effect_both = both_arrow("#arrow_both");
                }, 2300);  
                //----------------------------------------------
            }
            else if (chasing_left && to_right <= 8) {
                //alert("caught from the left!");
                game_end = true;
                setTimeout(function() {
                    play_tackle1_or_tackle2();
                    // tackle1.play();
                    // tackle1.currentTime = 0;
                    //----------------------------------------------
                    text_animation("Tackled!");
                    clearInterval(effect_right);
                    $('.right_arrow_effect').detach();
                    //----------------------------------------------
                }, 500);
                chasing_left = false;
            }
            else if (chasing_left && to_right > 8) {
                //alert("nice dodge!");
                chasing_left = false;
                swoosh.play();
                sound.fade((sound.volume()), 0, 500, id1); // fade out
                //sound.pause(id1);
                //----------------------------------------------
                clearInterval(effect_right);
                $('.right_arrow_effect').detach();
                text_animation("Nice Dodge!");

                setTimeout(function() {
                    effect_both = both_arrow("#arrow_both");
                }, 2300);  
                //----------------------------------------------
            }
            else if (touchdown <= touchdown_threshold1) {
                touchdown_noise.play();
                touchdown_b_1.play();
                game_end = true;
                touchdown_b_2_check = false;
                touchdown_b_3_check = false;
                chasing_check = false;
                //----------------------------------------------
                clearInterval(effect_both);
                $('.both_left_arrow_effect').detach();
                $('.both_right_arrow_effect').detach();
                text_animation("Touch Down!");
                //----------------------------------------------
            }
            else if (touchdown <= touchdown_threshold2 && !touchdown_b_2_check) {
                touchdown_noise.play();
                touchdown_b_2.play();
                touchdown_b_2_check = true;
                //----------------------------------------------
                clearInterval(effect_both);
                $('.both_left_arrow_effect').detach();
                $('.both_right_arrow_effect').detach();
                text_animation("10 Yards Left!");
                setTimeout(function() {
                    effect_both = both_arrow("#arrow_both");
                }, 2300);
                //----------------------------------------------
            }
            else if (touchdown <= touchdown_threshold3 && !touchdown_b_3_check) {
                touchdown_noise.play();
                clearInterval(effect_both);
                $('.both_left_arrow_effect').detach();
                $('.both_right_arrow_effect').detach();
                text_animation("Almost there!");
                setTimeout(function() {
                    effect_both = both_arrow("#arrow_both");
                }, 2300);
                touchdown_b_3.play();
                touchdown_b_3_check = true;
                /*
                setTimeout(function() {
                    //----------------------------------------------
                    clearInterval(effect_both);
                    $('.both_left_arrow_effect').detach();
                    $('.both_right_arrow_effect').detach();
                    text_animation("Almost there!");
                    // setTimeout(function() {
                    //     effect_both = both_arrow("#arrow_both");
                    // }, 2300);
                    //----------------------------------------------
                    touchdown_b_3.play();
                    touchdown_b_3_check = true;
                }, 1000);*/
            }

            else if (touchdown <= touchdown_threshold4 && !twice) {
                //var id2 = sound.play();
                //sound.fade(0, 1, 1000, id2); // fade in
                num = Math.floor(Math.random() * 10);
                if (num % 2 == 0) {
                    id1 = sound.play();
                    sound.pos(-2, 0, -0.5, id1); // left speaker
                    sound.fade(0, sound.volume(), 500, id1); // fade in
                    chasing_left = true;
                    twice = true;
                    //----------------------------------------------
                    clearInterval(effect_both);
                    $('.both_left_arrow_effect').detach();
                    $('.both_right_arrow_effect').detach();
                    effect_right = right_arrow("#arrow_right");
                    //----------------------------------------------
                }
                else {
                    id2 = sound.play();
                    sound.pos(2, 0, -0.5, id2); // right speaker
                    sound.fade(0, sound.volume(), 500, id2); // fade in
                    chasing_right = true;
                    twice = true;
                    //----------------------------------------------
                    clearInterval(effect_both);
                    $('.both_left_arrow_effect').detach();
                    $('.both_right_arrow_effect').detach();
                    effect_left = left_arrow("#arrow_left");
                    //----------------------------------------------
                }
            }

            else if (touchdown <= touchdown_threshold5 && !once) {
                //var id1 = sound.play();
                //sound.fade(0, 1, 1000, id1); // fade in
                num = Math.floor(Math.random() * 10);
                if (num % 2 == 0) {
                    id1 = sound.play();
                    sound.pos(-2, 0, -0.5, id1); // left speaker
                    sound.fade(0, sound.volume(), 500, id1); // fade in
                    chasing_left = true;
                    once = true;
                    //----------------------------------------------
                    clearInterval(effect_both);
                    $('.both_left_arrow_effect').detach();
                    $('.both_right_arrow_effect').detach();
                    effect_right = right_arrow("#arrow_right");
                    //----------------------------------------------
                }
                else {
                    id2 = sound.play();
                    sound.pos(2, 0, -0.5, id2); // right speaker
                    sound.fade(0, sound.volume(), 500, id2); // fade in
                    chasing_right = true;
                    once = true;
                    //----------------------------------------------
                    clearInterval(effect_both);
                    $('.both_left_arrow_effect').detach();
                    $('.both_right_arrow_effect').detach();
                    effect_left = left_arrow("#arrow_left");
                    //----------------------------------------------
                }
            }
            else if (count2 <= 36 && !go_faster_init) {
                if (warning_max == 0) { // game over
                    game_end = true;
                    setTimeout(function() {
                        warning_max = 5;
                        play_tackle1_or_tackle2();
                        // tackle1.play();
                        // tackle1.currentTime = 0;
                        //----------------------------------------------
                        clearInterval(effect_both);
                        $('.both_left_arrow_effect').detach();
                        $('.both_right_arrow_effect').detach();
                        text_animation("Tackled!");
                        //----------------------------------------------
                    }, 1000);
                }
                else if (count2 <= 9) { // game over
                    game_end = true;
                    setTimeout(function() {
                        play_tackle1_or_tackle2();
                        // tackle1.play();
                        // tackle1.currentTime = 0;
                        //----------------------------------------------
                        clearInterval(effect_both);
                        $('.both_left_arrow_effect').detach();
                        $('.both_right_arrow_effect').detach();
                        text_animation("Tackled!");
                        //----------------------------------------------
                    }, 1000);
                }
                else { // go_faster!
                    //go_faster.play();
                    //go_faster.currentTime = 0.0;
                    //lets_go_man.play();
                    //lets_go_man.currentTime = 0.0;
                    play_go_faster_or_lets_go_man();

                    warning_max = warning_max - 1;
                    //----------------------------------------------
                    clearInterval(effect_both);
                    $('.both_left_arrow_effect').detach();
                    $('.both_right_arrow_effect').detach();
                    text_animation("Go Faster!");
                    setTimeout(function() {
                        effect_both = both_arrow("#arrow_both");
                    }, 2300);           
                    //----------------------------------------------
                }
            }
            count2 = 0;
            go_faster_init = false;
        }
    }, 3000);

    let timerId3 = setInterval(function() {
        if (game_start) {
            if (game_end) {
                setTimeout(function() {
                    running.pause();
                    breathing.pause();
                    bgm.pause();
                    cheering.pause();
                    touchdown_noise.pause();
                    bgm.currentTime = 0.0;
                    cheering.currentTime = 0.0;
                    touchdown_noise.currentTime = 0.0;
                    init = true;
                    game_start = false;
                    game_end = false;
                    running_now = false;
                    //touchdown = 500;
                    difficulty_change();

                    chasing_left = false;
                    once = false;
                    to_right = 0;
                    sound.pause();

                    chasing_right = false;
                    twice = false;
                    to_left = 0;
                    sound.pause();

                    go_faster_init = true;

                    setTimeout(function() {
                        //warning_max = 5;
                        re_init = true;
                    }, 5500);
                }, 500);
            }
        }
    }, 1000);
});