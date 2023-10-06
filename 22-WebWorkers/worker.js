self.addEventListener('message', event => {
    const data = event.data;
    const result = performTimeConsumingTask(data);
    self.postMessage(result);
});

function performTimeConsumingTask(data) {
    // Simulate a time-consuming task
    let sum = 0;
    for (let i = 0; i < data; i++) {
        sum += i;
    }
    return sum;
}
