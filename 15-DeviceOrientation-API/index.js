document.addEventListener('DOMContentLoaded', () => {
    const orientationInfo = document.getElementById('orientation-info');

    function handleOrientation(event) {
        const alpha = event.alpha.toFixed(2);
        const beta = event.beta.toFixed(2);
        const gamma = event.gamma.toFixed(2);

        orientationInfo.innerHTML = `
            <strong>Alpha:</strong> ${alpha}°<br>
            <strong>Beta:</strong> ${beta}°<br>
            <strong>Gamma:</strong> ${gamma}°
        `;
    }

    function displayOrientationSupport() {
        if ('ondeviceorientation' in window) {
            window.addEventListener('deviceorientation', handleOrientation);
        } else {
            orientationInfo.textContent = 'Device Orientation API not supported in this browser.';
        }
    }

    displayOrientationSupport();
});
