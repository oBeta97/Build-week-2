let audio = null;
let timer = null;
const volumeSlider = document.getElementById("volumeSlider");

function TogglePlayer(audioUrl, target) {

    if(!audio && !audioUrl){
        alert('Seleziona una canzone')
        return;
    }


    if (audio && !audio.paused && audio.currentSrc === audioUrl) {
        audio.pause();
        target.innerHTML = `<i class="text-black bi bi-play-fill fs-6" ></i>`;
        playCenter.src = "./assets/imgs/icons/play_musicbar.png";
        playButtonMobile.innerHTML = `<i class="text-black bi bi-play-fill fs-6" ></i>`;
        clearInterval(timer);
        // console.log('Audio paused');
    } else {

        if (!audio) {
            audio = new Audio(audioUrl);
            audio.volume = volumeSlider.value / 100
        }

        if (audio.currentSrc !== audioUrl) {
            clearInterval(timer);
            audio.pause();
            audio = new Audio(audioUrl);
            audio.volume = volumeSlider.value / 100
        }

        audio.play();
        startTimer();
        target.innerHTML = `<i class="bi bi-pause-fill"></i>`;
        playCenter.src = "./assets/imgs/icons/pause_musicbar.png";
        playCenter.setAttribute('data-song', audioUrl);

        playButtonMobile.innerHTML = `<i class="bi bi-pause-fill"></i>`;
        playButtonMobile.setAttribute('data-song', audioUrl);
        
        // console.log('Playing audio:', audioUrl);
    }

}

// prendo id del input del volume e creo la funzione
volumeSlider.addEventListener("input", function () {
    if (audio) {
        audio.volume = this.value / 100;
        // console.log(this.value);
    }
});

document.getElementById("timelineSlider").addEventListener("input", function () {
        if (audio) {
            const value = this.value;
            const duration = audio.duration;
            audio.currentTime = (value / 100) * duration;
            updateTimeDisplays();
        }
    });

function startTimer() {
    timer = setInterval(() => {
        if (audio) {
            updateTimeDisplays();
            const duration = audio.duration;
            const currentTime = audio.currentTime;
            document.getElementById("timelineSlider").value =
                (currentTime / duration) * 100;
        }
    }, 1000); // intervallo che esegue la funzione ogni secondo
}

function updateTimeDisplays() {
    if (audio) {
        const currentTime = formatTime(audio.currentTime);
        const duration = formatTime(audio.duration);
        document.getElementById("currentTime").innerText = currentTime;
        document.getElementById("totalTime").innerText = duration;
        console.log(audio.currentTime);
        console.log(audio.duration);
    }
}
