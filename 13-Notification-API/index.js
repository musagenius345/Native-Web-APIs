document.addEventListener('DOMContentLoaded', () => {
    const log = document.getElementById('log');

    function appendToLog(message) {
        log.innerHTML = `${message}<br />${log.innerHTML}`;
    }

    const showNotificationButton = document.getElementById('show-notification');
    if (showNotificationButton) {
        showNotificationButton.addEventListener('click', () => {
            if ('PushManager' in window) {
                navigator.serviceWorker.ready.then((registration) => {
                    registration.pushManager.getSubscription().then((subscription) => {
                        if (subscription === null) {
                            appendToLog('Subscription not found. Please allow notifications.');
                        } else {
                            appendToLog('Notification sent!');
                            // Simulate a push notification from the server
                            registration.showNotification('Web Notification', {
                                body: 'This is a web notification demo!'
                            });
                        }
                    });
                });
            } else {
                appendToLog('Push notifications not supported in this browser.');
            }
        });
    }
});
