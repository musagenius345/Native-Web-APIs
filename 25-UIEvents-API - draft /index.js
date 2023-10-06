document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const clickButton = document.getElementById('clickButton');
    const inputText = document.getElementById('inputText');

    clickButton.addEventListener('click', () => {
        output.innerHTML = 'Button Clicked!';
    });

    inputText.addEventListener('input', (event) => {
        output.innerHTML = `Input Changed: ${event.target.value}`;
    });

    inputText.addEventListener('keydown', (event) => {
        output.innerHTML = `Key Down: ${event.key}`;
    });

    inputText.addEventListener('keyup', (event) => {
        output.innerHTML = `Key Up: ${event.key}`;
    });

    inputText.addEventListener('focus', () => {
        output.innerHTML = 'Input Focused';
    });

    inputText.addEventListener('blur', () => {
        output.innerHTML = 'Input Blurred';
    });

    inputText.addEventListener('mouseenter', () => {
        output.innerHTML = 'Mouse Entered Input';
    });

    inputText.addEventListener('mouseleave', () => {
        output.innerHTML = 'Mouse Left Input';
    });
});
