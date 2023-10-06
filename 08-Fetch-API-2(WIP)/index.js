document.addEventListener('DOMContentLoaded', () => {
  // Tip 1: Using Fetch to Get JSON Data
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
      const tip1Output = document.querySelector('#tip1 p');
      tip1Output.textContent = `Fetched Data: ${JSON.stringify(data)}`;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

  // Tip 2: Handling Streams with Fetch
  fetch('https://www.example.com/stream', { method: 'GET' })
    .then(response => response.body)
    .then(body => {
      const reader = body.getReader();
      // Use reader to read the stream data
    })
    .catch(error => {
      console.error('Error handling stream:', error);
    });

  // Tip 3: Fetching Binary Data as Blob
  fetch('https://www.example.com/image', { method: 'GET' })
    .then(response => response.blob())
    .then(blob => {
      const imageUrl = URL.createObjectURL(blob);
      // Use imageUrl to display the image
    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });

  // Tip 4: Recording and Playing Audio using Fetch and Media Recorder
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      const mediaRecorder = new MediaRecorder(stream);
      const chunks = [];

      mediaRecorder.ondataavailable = event => {
        chunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(chunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        const audioElement = new Audio(audioUrl);
        audioElement.play();
      };

      mediaRecorder.start();

      setTimeout(() => {
        mediaRecorder.stop();
      }, 5000); // Record for 5 seconds
    })
    .catch(error => {
      console.error('Error accessing microphone:', error);
    });
});