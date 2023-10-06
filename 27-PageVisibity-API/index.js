document.addEventListener('DOMContentLoaded', () => {
  const visibilityStateElement = document.getElementById('visibilityState');
  const hiddenPropertyElement = document.getElementById('hiddenProperty');

  function handleVisibilityChange() {
    if (document.visibilityState === 'visible') {
      visibilityStateElement.textContent = 'visible';
      hiddenPropertyElement.textContent = 'false';
    } else {
      visibilityStateElement.textContent = document.visibilityState;
      hiddenPropertyElement.textContent = 'true';
    }
  }

  document.addEventListener('visibilitychange', handleVisibilityChange);

  // Initial visibility state check
  handleVisibilityChange();
});