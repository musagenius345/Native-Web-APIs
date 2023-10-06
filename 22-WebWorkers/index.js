document.addEventListener('DOMContentLoaded', () => {
  const startWorkerButton = document.getElementById('startWorker');
  const resultElement = document.getElementById('result');

  let worker = null;

  startWorkerButton.addEventListener('click', () => {
    if (worker === null) {
      worker = new Worker('worker.js');
      worker.postMessage(1000000000); // Pass data to the worker

      worker.addEventListener('message', event => {
        const result = event.data;
        resultElement.textContent = `Result from Web Worker: ${result}`;
        worker.terminate(); // Terminate the worker after the task is done
        worker = null;
      });
    }
  });
});