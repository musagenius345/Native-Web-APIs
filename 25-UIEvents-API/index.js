document.addEventListener('DOMContentLoaded', () => {
  const outerBox = document.getElementById('outer');
  const innerBox = document.getElementById('inner');
  const outputDiv = document.getElementById('output');

  // Event handler function
  function logEventPhase(event) {
    // Log event type and phase
    outputDiv.innerHTML += `Event: ${event.type}, Phase: ${event.eventPhase}<br>`;
  }

  // Event listeners for different phases (capture, target, bubble)
  outerBox.addEventListener('click', logEventPhase, true); // Capture phase
  outerBox.addEventListener('click', logEventPhase); // Bubble phase
  innerBox.addEventListener('click', logEventPhase); // Bubble phase
});