document.addEventListener('DOMContentLoaded', () => {
  const audioContext = new(window.AudioContext || window.webkitAudioContext)();
  const playButton = document.getElementById('playButton');

  // Create an oscillator node (generates a sound wave)
  const oscillator = audioContext.createOscillator();
  oscillator.type = 'sine'; // Sine wave for a simple sound
  oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // Set frequency to 440 Hz (A4 note)
  oscillator.connect(audioContext.destination); // Connect the oscillator to the audio output

  playButton.addEventListener('click', () => {
    if (audioContext.state === 'suspended') {
      audioContext.resume(); // Resume the audio context if it's in suspended state (required on some browsers)
    }

    oscillator.start(); // Start generating the sound
    setTimeout(() => {
      oscillator.stop(); // Stop the sound after 1 second (adjust duration as needed)
    }, 3000);
  });
});