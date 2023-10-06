document.addEventListener('DOMContentLoaded', () => {
    const log = document.getElementById('log');
    const positionOptions = {
        enableHighAccuracy: true,
        timeout: 10 * 1000, // 10 seconds 
        maximumAge: 30 * 1000 // 30 seconds 
    };

    function updateElementText(elementId, text) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = text;
        }
    }

    function appendToLog(message) {
        log.innerHTML = `${message}<br />${log.innerHTML}`;
    }

    function clearLog() {
        log.innerHTML = '';
    }

    function handleSuccess(position) {
        updateElementText('latitude', position.coords.latitude);
        updateElementText('longitude', position.coords.longitude);
        updateElementText('position-accuracy', position.coords.accuracy);
        updateElementText('altitude', position.coords.altitude || 'unavailable');
        updateElementText('altitude-accuracy', position.coords.altitudeAccuracy || 'unavailable');
        updateElementText('heading', position.coords.heading || 'unavailable');
        updateElementText('speed', position.coords.speed || 'unavailable');
        updateElementText('timestamp', new Date(position.timestamp).toString());
        appendToLog('Position successfully retrieved');
    }

    function handleError(positionError) {
        appendToLog(`Error: ${positionError.message}`);
    }

    function setupGeolocationButtons() {
        const getPositionButton = document.getElementById('button-get-position');
        const watchPositionButton = document.getElementById('button-watch-position');
        const stopWatchingButton = document.getElementById('button-stop-watching');
        const clearLogButton = document.getElementById('clear-log');

        getPositionButton.addEventListener('click', () => {
            navigator.geolocation.getCurrentPosition(handleSuccess, handleError, positionOptions);
        });

        let watchId = null;
        watchPositionButton.addEventListener('click', () => {
            watchId = navigator.geolocation.watchPosition(handleSuccess, handleError, positionOptions);
        });

        stopWatchingButton.addEventListener('click', () => {
            if (watchId !== null) {
                navigator.geolocation.clearWatch(watchId);
                appendToLog('Stopped watching position');
            }
        });

        clearLogButton.addEventListener('click', clearLog);
    }

    function initialize() {
        if (navigator.geolocation) {
            setupGeolocationButtons();
        } else {
            const unsupportedMessage = document.getElementById('g-unsupported');
            unsupportedMessage.classList.remove('hidden');
            ['button-get-position', 'button-watch-position', 'button-stop-watching'].forEach((buttonId) => {
                const button = document.getElementById(buttonId);
                if (button) {
                    button.setAttribute('disabled', 'disabled');
                }
            });
        }
    }

    initialize();
});
