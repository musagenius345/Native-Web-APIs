document.addEventListener('DOMContentLoaded', () => {
    const checkoutButton = document.getElementById('checkoutButton');

    checkoutButton.addEventListener('click', async () => {
        try {
            const paymentMethods = [{
                supportedMethods: 'basic-card',
                data: {
                    supportedNetworks: ['visa', 'mastercard'],
                },
            }];

            const paymentDetails = {
                total: {
                    label: 'Total Amount',
                    amount: {
                        currency: 'USD',
                        value: '10.00',
                    },
                },
            };

            const paymentRequest = new PaymentRequest(paymentMethods, paymentDetails);
            const paymentResponse = await paymentRequest.show();

            // Process the payment (for example, send payment details to a server for processing)
            // For this demo, simply show a success message
            await handlePaymentSuccess();

            // Complete the payment request
            await paymentResponse.complete('success');
        } catch (error) {
            console.error('Payment Request Error:', error);
        }
    });

    async function handlePaymentSuccess() {
        const successMessage = document.createElement('div');
        successMessage.textContent = 'Payment Successful! Thank you for your purchase.';
        document.body.appendChild(successMessage);
    }
});
