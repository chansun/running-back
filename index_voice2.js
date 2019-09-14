var t1 = document.getElementById('target1');
var t2 = document.getElementById('target2');

function btn_listener(event) {
    switch(event.target.id) {
            case 'target1':
                alert(1);
                var sound_play = "Play Game";
                var voice_play = new SpeechSynthesisUtterance(sound_play);
                voice_play.pitch = 1.0;
                voice_play.volume = 1.0;
                voice_play.rate = 0.9;
                speechSynthesis.speak(voice_play);
                break;
            case 'target2':
                alert(2);
                var sound_tutorial = "Tutorial";
                var voice_tutorial = new SpeechSynthesisUtterance(sound_tutorial);
                voice_tutorial.pitch = 1.0;
                voice_tutorial.volume = 1.0;
                voice_tutorial.rate = 0.9;
                speechSynthesis.speak(voice_tutorial);
                break;
    }
}

t1.addEventListener('click', btn_listener);
t2.addEventListener('click', btn_listener);