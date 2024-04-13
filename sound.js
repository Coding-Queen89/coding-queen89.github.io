let soundbutton = document.querySelector('.soundbutton');
        audio = document.querySelector('.audio');
        audio.volume = 0.1;

        soundbutton.addEventListener('click', e =>{
            soundbutton.classList.toggle('paused')
            audio.paused ? audio.play() : audio.pause();
        })


        window.onfocus = function(){
            soundbutton.classList.contains('paused') ? audio.pause() : audio.play();
        }
        window.onblur = function(){
            audio.pause();
        }
