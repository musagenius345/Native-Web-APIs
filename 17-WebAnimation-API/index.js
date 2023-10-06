document.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box');
  const startButton = document.getElementById('start-animation');

  startButton.addEventListener('click', () => {
    const animation = box.animate(
            [{ transform: 'translateX(0)' }, { transform: 'translateX(300px)' }],
      {
        duration: 1000, // 1 second
        easing: 'ease-in-out',
        iterations: 1,
        fill: 'forwards'
      }
    );

    animation.onfinish = () => {
      box.style.transform = 'translateX(300px)';
    };
  });
});