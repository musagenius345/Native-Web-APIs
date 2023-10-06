document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    function drawRectangle() {
        context.fillStyle = 'red';
        context.fillRect(50, 50, 100, 100);
    }

    function drawCircle() {
        context.beginPath();
        context.arc(250, 250, 50, 0, 2 * Math.PI);
        context.fillStyle = 'blue';
        context.fill();
        context.stroke();
    }

    drawRectangle();
    drawCircle();
});
