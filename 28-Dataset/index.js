document.addEventListener('DOMContentLoaded', () => {
  const userElement = document.getElementById('user');
  const displayButton = document.getElementById('displayButton');

  displayButton.addEventListener('click', () => {
    const userId = userElement.dataset.userId;
    const userName = userElement.dataset.userName;
    const userRole = userElement.dataset.userRole;

    alert(`User ID: ${userId}\nUser Name: ${userName}\nUser Role: ${userRole}`);
  });
});