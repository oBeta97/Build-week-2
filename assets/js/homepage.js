// 1- creao una variabile globale impostata su null che riproduzzà successivamente la canzone
// 2-prendo ID del bottone e creo la addEventListener della funzione sul click
// 3- verifico 2 condizioni usando il semaforo, quindi controlla se l'audio (esiste o non esiste) è in pausa o se non lo è.
// 4- Prendo l'URL dal bottone utilizzano .this sul "data-previewSong"
//5- Se l'audio è "null" viene riprodotto o messo in pausa
// aggiungo l'innertext che cambia il testo da play a pausa ad ogni click

let audio = null;

document.getElementById('playButton').addEventListener('click', function() {

    
      if (audio && !audio.paused) {
        audio.pause();
        this.innerHTML = `<span class="px-2 text-white text-nowrap small">play</span>`
        console.log('Audio paused');
      } else {
        const audioUrl = this.getAttribute('data-previewSong');
        if (!audio) {
          audio = new Audio(audioUrl);
        }
        audio.play();
        this.innerHTML = `<span class="px-2 text-white text-nowrap small">pausa</span>`
        console.log('Playing audio:', audioUrl);
      }
    });