// 1- creao una variabile globale impostata su null che riproduzzà successivamente la canzone
// 2-prendo ID del bottone e creo la addEventListener della funzione sul click
// 3- verifico 2 condizioni usando il semaforo, quindi controlla se l'audio (esiste o non esiste) è in pausa o se non lo è.
// 4- Prendo l'URL dal bottone utilizzano .this sul "data-previewSong"
//5- Se l'audio è "null" viene riprodotto o messo in pausa
// aggiungo l'innertext che cambia il testo da play a pausa ad ogni click

let audio = null;
let timer = null;
const playButton = document.getElementById("playButton");
const playCenter = document.getElementById("playCenter");
const playButtonMobile = document.getElementById("play-button");
const volumeSlider = document.getElementById("volumeSlider");

playButton.addEventListener("click", function () {
  if (audio && !audio.paused) {
    audio.pause();
    this.innerHTML = `<span class="px-2 text-white text-nowrap small">play</span>`;
    playCenter.src = "./assets/imgs/icons/play_musicbar.png";
    playButtonMobile.innerHTML = `<i class="text-black bi bi-play-fill fs-6" ></i>`;
    clearInterval(timer);
    // console.log('Audio paused');
  } else {
    const audioUrl = this.getAttribute("data-previewSong");
    if (!audio) {
      audio = new Audio(audioUrl);
      audio.volume = volumeSlider.value / 100
    }
    audio.play();
    startTimer();
    this.innerHTML = `<span class="px-2 text-white text-nowrap small">pausa</span>`;
    playCenter.src = "./assets/imgs/icons/pause_musicbar.png";
    playButtonMobile.innerHTML = `<i class="bi bi-pause-fill"></i>`;
    // console.log('Playing audio:', audioUrl);
  }
});

playCenter.addEventListener("click", function () {
  if (audio && !audio.paused) {
    audio.pause();
    playButton.innerHTML = `<span class="px-2 text-white text-nowrap small">play</span>`;
    playCenter.src = "./assets/imgs/icons/play_musicbar.png";
    playButtonMobile.innerHTML = `<i class="text-black bi bi-play-fill fs-6" ></i>`;
    clearInterval(timer);
  } else {
    const audioUrl = this.getAttribute("data-previewSong");

    if (!audioUrl) {
      alert('nessuna canzone selezionata');
      return;
    }
    if (!audio)
      audio = new Audio(audioUrl);

    audio.play();
    startTimer();
    playButton.innerHTML = `<span class="px-2 text-white text-nowrap small">pausa</span>`;
    playCenter.src = "./assets/imgs/icons/pause_musicbar.png";
    playButtonMobile.innerHTML = `<i class="bi bi-pause-fill"></i>`;
    // console.log('Playing audio:', audioUrl);
  }
});

playButtonMobile.addEventListener("click", function () {
  if (audio && !audio.paused) {
    audio.pause();
    playButton.innerHTML = `<span class="px-2 text-white text-nowrap small">play</span>`;
    playCenter.src = "./assets/imgs/icons/play_musicbar.png";
    playButtonMobile.innerHTML = `<i class="text-black bi bi-play-fill fs-6" ></i>`;
    clearInterval(timer);
  } else {
    const audioUrl = this.getAttribute("data-previewSong");

    if (!audioUrl) {
      alert('nessuna canzone selezionata');
      return;
    }
    if (!audio)
      audio = new Audio(audioUrl);

    audio.play();
    startTimer();
    playButton.innerHTML = `<span class="px-2 text-white text-nowrap small">pausa</span>`;
    playCenter.src = "./assets/imgs/icons/pause_musicbar.png";
    playButtonMobile.innerHTML = `<i class="bi bi-pause-fill"></i>`;
    // console.log('Playing audio:', audioUrl);
  }
});

// prendo id del imput del volume e creo la funzione
volumeSlider.addEventListener("input", function () {
  if (audio) {
    audio.volume = this.value / 100;
    // console.log(this.value);
  }
});

document
  .getElementById("timelineSlider")
  .addEventListener("input", function () {
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

