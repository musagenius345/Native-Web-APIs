document.addEventListener('DOMContentLoaded', () => {
    const dataInput = document.getElementById('data');
    const saveButton = document.getElementById('saveData');
    const savedDataContainer = document.getElementById('savedData');

    saveButton.addEventListener('click', () => {
        const data = dataInput.value;
        if (data) {
            localStorage.setItem('savedData', data);
            displaySavedData();
        }
    });

    function displaySavedData() {
        const savedData = localStorage.getItem('savedData');
        if (savedData) {
            savedDataContainer.textContent = `Saved Data: ${savedData}`;
        } else {
            savedDataContainer.textContent = 'No saved data available.';
        }
    }

    displaySavedData();
});
