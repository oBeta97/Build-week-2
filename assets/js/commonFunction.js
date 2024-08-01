function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60)
    // Aggiungi uno zero davanti ai secondi se è un singolo numero
    const formattedSeconds =
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
    return minutes + ":" + formattedSeconds;
  }
 
const RandomNumberGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
