document.addEventListener('DOMContentLoaded', () => {
    const requestGeolocationButton = document.getElementById('requestGeolocation');
    const geolocationStatus = document.getElementById('geolocationStatus');

    requestGeolocationButton.addEventListener('click', () => {
        navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
            if (permissionStatus.state === 'granted') {
                geolocationStatus.textContent = 'Geolocation permission already granted.';
            } else if (permissionStatus.state === 'prompt') {
                navigator.geolocation.getCurrentPosition(
                    () => {
                        geolocationStatus.textContent = 'Geolocation permission granted.';
                    },
                    () => {
                        geolocationStatus.textContent = 'Geolocation permission denied.';
                    }
                );
            } else {
                geolocationStatus.textContent = 'Geolocation permission denied.';
            }
        });
    });
});
