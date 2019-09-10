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
    * Web Audio API - AudioContext() - not recommended
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
