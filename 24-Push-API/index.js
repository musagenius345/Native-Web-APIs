document.addEventListener('DOMContentLoaded', () => {
    const subscribeButton = document.getElementById('subscribeButton');

    let swRegistration = null;

    if ('serviceWorker' in navigator && 'PushManager' in window) {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
                swRegistration = registration;
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    } else {
        console.error('Push messaging is not supported');
        subscribeButton.disabled = true;
    }

    subscribeButton.addEventListener('click', () => {
        if (swRegistration) {
            subscribeToPushNotifications(swRegistration);
        } else {
            console.error('Service Worker not registered');
        }
    });

    function subscribeToPushNotifications(registration) {
        registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array('your-public-key')
        })
        .then(subscription => {
            console.log('Push notification subscription:', subscription);
        })
        .catch(error => {
            console.error('Error subscribing to push notifications:', error);
        });
    }

    function urlBase64ToUint8Array(base64String) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }
});
