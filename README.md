## Running Back

* Pages
    * main page
    * play page

* User interaction
    * keyboard
    * touchscreen
    * mouse click?

* JS
    * touchEvent()
    * Web Audio API - AudioContext() - difficult but useful
    * howler.js - recommended
        * https://howlerjs.com
    * motion event??
    * ...

* Sound effects
    * running
    * opponent
    * ball received
    * crowd cheering
    * tackle
    * ...
    * https://freesound.org
    * https://www.zapsplat.com/sound-effect-category/football-and-rugby/page/2/
    * AudioSprite Class (this enables to embed multiple sounds in one sound)
        ```HTML
        <script>
            createjs.Sound.initializeDefaultPlugins();
            var assetsPath = "./assets/";
            var sounds = [{
                src:"MyAudioSprite.ogg", data: {
                    audioSprite: [
                        {id:"sound1", startTime:0, duration:500},
                        {id:"sound2", startTime:1000, duration:400},
                        {id:"sound3", startTime:1700, duration: 1000}
                    ]}
                }
            ];
            createjs.Sound.alternateExtensions = ["mp3"];
            createjs.Sound.on("fileload", loadSound);
            createjs.Sound.registerSounds(sounds, assetsPath);
            // after load is complete
            createjs.Sound.play("sound2");
        </script>
        ```

* Voice Generator (for audio instruction)
    * SpeechSynthesisUtterance()
        ```HTML
        <script>
            const utterance = new SpeechSynthesisUtterance('Hey, my name is Kelly')
            utterance.pitch = 1.0
            utterance.volume = 1.0
            utterance.rate = 1.1
            speechSynthesis.speak(utterance)
        </script>
        ```
* Prof. Gary've got a nice microphone for recording voice/sound effects when needed.
* Prof. Gary can provide URLs when "asset" should be added to fetch an audio file.
* Use github server for a static web app


* To do list
    * Body image
        * Football field image?
    * Footer content adjustment
    * Bulma Navbar? (vertical or horizontal?)
        * On Play Page: Back + Setting
        * On Main Page: Play + Tutorial + Ranking/High Scores + About(about UNC CS dept)
    * Bulma layout-tile <- let's not use this
    * Sound effect // Audio sprite // Web Audio
        * Loudness control
            * GainNode of Web Audio
                * https://developer.mozilla.org/en-US/docs/Web/API/GainNode
        * Sound comes from left speaker then right speaker..
            * StereoPannerNode of Web Audio
                * https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode
    * Sound files
        * Youtube mp3 converter
            * https://www.mp3juices.cc
        * Youtube videos
        * Football sounds
            * https://www.youtube.com/playlist?list=PLmQKipmpxnU-PeGBCblggCOO3jlaM_Q90
            * https://www.youtube.com/playlist?list=OLAK5uy_mTrreG1MTgCAFn2RFK3lq1fAVl5AACm20
        * Miscellaneous sound effect
            * https://www.youtube.com/watch?v=BWtlm-9ISig&list=PLTj7nGn3ICvOXL5tbsSbE5YQ9f0UGoYoB&index=2
        * Running Sounds
            * https://www.youtube.com/watch?v=dIPEKhZOkcU&list=PLTj7nGn3ICvOXL5tbsSbE5YQ9f0UGoYoB&index=4
            * https://www.youtube.com/watch?v=oNxnum6g3Lc&list=PLTj7nGn3ICvOXL5tbsSbE5YQ9f0UGoYoB&index=2&t=0s
        * Background music
            * https://www.youtube.com/playlist?list=PLTj7nGn3ICvMMLqxkZvqJ_10bPutK5wgN
    * What else?
