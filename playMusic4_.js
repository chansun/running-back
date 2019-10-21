$(document).ready(function () {

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

    let go_faster = new Audio("./assets/sound_effects/go_faster_ample.mp3");
    go_faster.volume = 1.0;

    let touchdown_b_1 = new Audio("./assets/sound_effects/touchdown_b_1.mp3");
    touchdown_b_1.volume = 1.0;

    let touchdown_b_2 = new Audio("./assets/sound_effects/touchdown_b_2.mp3");
    touchdown_b_2.volume = 1.0;

    let touchdown_b_3 = new Audio("./assets/sound_effects/touchdown_b_3.mp3");
    touchdown_b_3.volume = 1.0;

    let touchdown_noise = new Audio("./assets/sound_effects/touchdown_noise2.mp3");
    touchdown_noise.volume = 1.0;

    var sound = new Howl({
        src: ['./assets/sound_effects/chasing.mp3'],
        //autoplay: true,
        loop: true,
        volume: 1.0
    });
 
    let init = true;
    let re_init = true;
    let game_start = false;
    let tackle_start = false;
    let game_end = false;
    let count = 0;
    let count2 = 0;
    let warning_max = 3;
    let running_now = false;
    let touchdown = 500;
    let touchdown_b_2_check = false;
    let touchdown_b_3_check = false;

    let chasing_left = false;
    let chasing_left_once = false;
    let to_right = 0;

    let chasing_right = false;
    let chasing_right_once = false;
    let to_left = 0;

    function bodyHandler (e) {
        if (e.keyCode == 39) { // 39 is ->
            if (!init && game_start) {
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
                touchdown = touchdown - 1;
                if (chasing_left) {
                    to_right++;
                }
                if (chasing_right) {
                    to_left--;
                }
            }
        }

        else if (e.keyCode == 37) { // 37 is <-
            if (!init && game_start) {
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
                touchdown = touchdown - 1;
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
                        game_start = true;
                        setTimeout(function() {
                            tackle_start = true;
                        }, 2000);
                    }, 2000);
                }, 2000);
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
            if (chasing_right && to_left <= 6) {
                //alert("caught from the right!");
                game_end = true;
                    setTimeout(function() {
                        tackle1.play();
                        tackle1.currentTime = 0;
                    }, 500);
                chasing_right = false;
            }
            else if (chasing_right && to_left > 6) {
                //alert("nice dodge!");
                chasing_right = false;
                sound.fade(1, 0, 1000, id2); // fade out
            } 
            else if (chasing_left && to_right <= 6) {
                //alert("caught from the left!");
                game_end = true;
                    setTimeout(function() {
                        tackle1.play();
                        tackle1.currentTime = 0;
                    }, 500);
                chasing_left = false;
            }
            else if (chasing_left && to_right > 6) {
                //alert("nice dodge!");
                chasing_left = false;
                sound.fade(1, 0, 1000, id1); // fade out
            }
            else if (touchdown <= 100) {
                touchdown_b_1.play();                
                game_end = true;
                touchdown_b_2_check = false;
                touchdown_b_3_check = false;
                chasing_check = false;
            }
            else if (touchdown <= 140 && !touchdown_b_2_check) {
                touchdown_b_2.play();
                touchdown_b_2_check = true;
            }
            else if (touchdown <= 180 && !touchdown_b_3_check) {
                touchdown_noise.play();
                setTimeout(function() {
                    touchdown_b_3.play();
                    touchdown_b_3_check = true;
                }, 1000);
            }

            else if (touchdown <= 300 && !chasing_right && !chasing_right_once) { 
                var id2 = sound.play();
                //sound.seek(0.0, id1);
                sound.fade(0, 1, 1000, id2); // fade in
                sound.pos(2, 0, -0.5, id2); // right speaker
                chasing_right = true;
                chasing_right_once = true;
            }
            
            else if (touchdown <= 400 && !chasing_left && !chasing_left_once) { 
                var id1 = sound.play();
                //sound.seek(0.0, id1);
                sound.fade(0, 1, 1000, id1); // fade in
                sound.pos(-2, 0, -0.5, id1); // left speaker
                chasing_left = true;
                chasing_left_once = true;
            }
            else if (count2 <= 30) {
                if (warning_max == 0) {
                    game_end = true;
                    setTimeout(function() {
                        warning_max = 3;
                        tackle1.play();
                        tackle1.currentTime = 0;
                    }, 1000);
                }
                else if (count2 <= 7) { // game over
                    game_end = true;
                    setTimeout(function() {
                        tackle1.play();
                        tackle1.currentTime = 0;
                    }, 1000);
                }
                else {
                    go_faster.play();
                    go_faster.currentTime = 0.0;
                    warning_max = warning_max - 1;
                }
            }
            count2 = 0;
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
                    touchdown = 500;

                    chasing_left = false;
                    chasing_left_once = false;
                    to_right = 0;
                    sound.pause();

                    chasing_right = false;
                    chasing_right_once = false;
                    to_left = 0;
                    sound.pause();

                    setTimeout(function() {
                        re_init = true;
                    }, 3500);
                }, 500);
            }
        }
    }, 3000);
});
