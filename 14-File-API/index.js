document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file-input');
    const fileInfo = document.getElementById('file-info');
    const log = document.getElementById('log');

    function displayFileInfo(file) {
        fileInfo.innerHTML = `
            <strong>File Name:</strong> ${file.name}<br>
            <strong>File Size:</strong> ${file.size} bytes<br>
            <strong>File Type:</strong> ${file.type}
        `;
    }

    function displayLog(message) {
        log.innerHTML = `${message}<br />${log.innerHTML}`;
    }

    fileInput.addEventListener('change', (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            displayFileInfo(selectedFile);
            displayLog('File selected: ' + selectedFile.name);
        } else {
            fileInfo.innerHTML = '';
        }
    });
});
