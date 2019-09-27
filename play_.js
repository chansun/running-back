$(document).ready(function () {

    window.addEventListener("scroll", preventMotion, false);
    //window.addEventListener("touchmove", preventMotion, false);
    function preventMotion(event)
    {
        window.scrollTo(0, 0);
        event.preventDefault();
        event.stopPropagation();
    }

    let sound1 = "Your mission is run as fast as you can; Tab the screen with two fingers alternatively."
    const voice1 = new SpeechSynthesisUtterance(sound1);
    voice1.pitch = 1.0;
    voice1.volume = 1.0;
    voice1.rate = 0.9;
    /* sleep for 2 sec, and then speak */
    setTimeout(function() {
        //speechSynthesis.speak(voice1);
    }, 2000);

    /* think about the way how to pause // go back to game // go back to the main page*/
    let sound2 = "Pause the game. Back to the main menu";
    const voice2 = new SpeechSynthesisUtterance(sound2);
    voice2.pitch = 1.0;
    voice2.volume = 1.0;
    voice2.rate = 1.0;

    let sound3 = "Main Page";
    const voice3 = new SpeechSynthesisUtterance(sound3);
    voice3.pitch = 1.0;
    voice3.volume = 1.0;
    voice3.rate = 1.0;
    function bodyHandler (e) {
        if (e.keyCode == 37) {
            location.href= 'index.html';
            speechSynthesis.speak(voice3);
        }
    };

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
    $('#back').on('click', backHandler);
    $('#back').on('dblclick', function(e) {
        e.preventDefault();  //cancel system double-click event
    });

    $('#body').on('keyup', bodyHandler);


    let count = 0;
    let running_now = false;

    createjs.Sound.initializeDefaultPlugins();
    var assetsPath = "./assets/sound_effects/";
    var sounds = [{
        src:"running_grass1.mp3", data: {
            audioSprite: [
                {id:"sound1", startTime:1000, duration:350},
                {id:"sound2", startTime:1000, duration:500},
                {id:"sound3", startTime:1000, duration:2000},
                {id:"sound4", startTime:1000, duration:1}
            ]}
        }
    ];
    var sounds2 = [{
        src:"cheering1.mp3", data: {
            audioSprite: [
                {id:"cheering1", startTime:0, duration:15000},
            ]}
        }
    ];
    createjs.Sound.registerSounds(sounds, assetsPath);
    createjs.Sound.registerSounds(sounds2, assetsPath);
    createjs.Sound.volume = 1;
    //createjs.Sound.play("cheering1");

    $('#col-left').on('click', function (e) { // 'click' is for just test. Remove this later
        e.preventDefault();
        count += 1;
        running_now = true;
        //createjs.Sound.play("sound4");
        createjs.Sound.play("cheering1");
    });
    $("#col-left").on("touchstart",function(e){
        e.preventDefault();
        count += 1;
    });
    $('#col-right').on('click', function (e) {  // 'click' is for just test. Remove this later
        e.preventDefault();
        count += 1;
    });
    $("#col-right").on("touchstart",function(e){
        e.preventDefault();
        count += 1;
    });

    timerId = setInterval(function() {
        if (running_now) {
            createjs.Sound.play("sound3");
        }
        let speed = $("#speed");
        speed.empty();
        speed.append(count + "/sec");
        count = 0;
        running_now = false;
    }, 2000);

    $("#text").click(function(e) {
        clearInterval(timerId);
        alert("pause");
        let speed = $("#speed");
        speed.empty();
        count = 0;
        speed.append(count + "/sec");
    });




    /*

    (resolved) (몇십초동안 계속 뛸경우) Running 소리를 loop로 돌려야함.
    (resolved) 클릭을 멈추면 running을 멈추어야함. - boolean을 하나 만들어서 setInterval안에 넣자.
    (unresolved) 클릭의 속도에따라 (count) running 속도를 조절해야함.

    */




    /*
    .volume =
    1.0 is highest volume (100%. This is default)
    0.5 is half volume (50%)
    0.0 is silent (same as mute)

    .playbackRate =
    1.0 is normal speed
    0.5 is half speed (slower)
    2.0 is double speed (faster)
    -1.0 is backwards, normal speed
    -0.5 is backwards, half speed

    .currentTime =

    AudioObject.play();

    AudioObject.pause();


    function play() {
        if (running.paused) {
            running.play()
        }
        else {
            running.pause()
        }
    }
    */



});




