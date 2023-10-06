self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    // Handle notification click event here
    clients.openWindow('https://example.com'); // Replace with the desired URL
});

self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text()
    };
    event.waitUntil(
        self.registration.showNotification('Web Notification', options)
    );
});
