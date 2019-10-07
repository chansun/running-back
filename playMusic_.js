$(document).ready(function () {
    
    let count = 0;
    let count2 = 0;
    let running_now = false;

    let running = new Audio("./assets/sound_effects/running_grass1_ample.mp3");
    running.loop = true;
    running.playbackRate = 1.40; // 1.3~1.5
    running.volume = 0.4; // volume should be adjusted by Audacity.

    let breathing = new Audio("./assets/sound_effects/breathing_ample.mp3");
    breathing.loop = true;
    breathing.playbackRate = 1.20;
    breathing.volume = 1.0;
 
    //-------------------------------------------
    let bgm = new Audio("./assets/bgm/track4.mp3"); 
    //let bgm = new Audio("./assets/bgm/track3_ample.mp3");
    bgm.loop = true;
    bgm.volume = 0.2; // volume should be adjusted by Audacity.

    let cheering = new Audio("./assets/sound_effects/cheering1_ample.mp3");
    cheering.loop = true;
    cheering.volume = 1.0;

    let look_out = new Audio("./assets/sound_effects/look_out_ample2.mp3");
    look_out.volume = 1.0;

    let middle_effect = new Audio("./assets/sound_effects/middle_effect_ample.mp3");
    middle_effect.volume = 1.0;
 
    let tackle1 = new Audio("./assets/sound_effects/tackle1_ample.mp3");
    tackle1.volume = 1.0;

    let tackle2 = new Audio("./assets/sound_effects/tackle2_ample.mp3");
    tackle2.volume = 1.0;

    let go_faster = new Audio("./assets/sound_effects/go_faster_ample.mp3");
    go_faster.volume = 1.0;

    let stop = true;
    let game_start = false;
 
    $('body').on('click', function(e) {
        if (stop) {
            bgm.play();
            cheering.play(); 
            stop = false; 
            setTimeout(function() {
                //alert("game start");
                look_out.play(); 
                setTimeout(function() {
                    game_start = true;
                }, 2000);
            }, 2000);
        }
        
    }); 
    //-------------------------------------------

    let tackle_grunt = new Audio("./assets/sound_effects/tackle_grunt1.mp3");
    tackle_grunt.volume = 1.0;


    $('#col-left').on('click', function (e) { // 'click' is for just test. Remove this later
        if (!stop && game_start) {
            e.preventDefault();
            count += 1;
            count2 += 1;
            running_now = true;
            if (running.currentTime > 18.0) {
                running.currentTime = 0.8;
            }
            running.play();
            if (breathing.currentTime > 18.0) {
                breathing.currentTime = 0.8;
            }
            breathing.play(); 
        } 
    });
    $("#col-left").on("touchstart",function(e){
        e.preventDefault();
        count += 1;
        count2 += 1;
    });
    $('#col-right').on('click', function (e) {  // 'click' is for just test. Remove this later
        if (!stop && game_start) {
            e.preventDefault();
            count += 1;
            count2 += 1;
            running_now = true;
            if (running.currentTime > 18.0) {
                running.currentTime = 0.8;
            }
            running.play();
            if (breathing.currentTime > 18.0) {
                breathing.currentTime = 0.8;
            }
            breathing.play(); 
        } 
    });
    $("#col-right").on("touchstart",function(e){
        e.preventDefault();
        count += 1;
        count2 += 1;
    });

 
    let game_stop = false;

    let timerId = setInterval(function() {
        if (game_start) {
            if (!running_now) {
                running.pause();
                breathing.pause();
                running.currentTime = 0.8;
                breathing.currentTime = 0.8;
            }
            let speed = $("#speed");
            speed.empty();
            speed.append(count + "/sec");
            count = 0;
            running_now = false;
        }
    }, 1000);

 
    let timerId2 = setInterval(function() {
        if (game_start) {
            if (count2 <= 20) {
                if (count2 <= 5) { // game over statement
                    tackle1.play();
                    tackle1.currentTime = 0;
                    game_stop = true;
                } 
                else {
                    go_faster.play();
                    go_faster.currentTime = 0.0;
                }
            }
            count2 = 0; 
        } 
    }, 5000);


    let timerId3 = setInterval(function() {
        if (game_start) {
            if (game_stop) {
                clearTimeout(timerId);  
                clearTimeout(timerId2); 
                bgm.pause();
                cheering.pause();
                alert("Game over");
                // running also shouldn't be permitted when onclick happens.
                // Find a way to restart the whole game.
                // To make the game a little bit more interesitng,
                // add avoiding-opponents events. 
            } 
        }
    }, 5000); 
 
});