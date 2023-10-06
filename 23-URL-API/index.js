document.addEventListener('DOMContentLoaded', () => {
  const urlInput = document.getElementById('urlInput');
  const parseUrlButton = document.getElementById('parseUrl');
  const parsedUrlContainer = document.getElementById('parsedUrl');

  parseUrlButton.addEventListener('click', () => {
    const urlString = urlInput.value;
    try {
      const url = new URL(urlString);
      const parsedUrl = {
        'Protocol': url.protocol,
        'Host': url.host,
        'Pathname': url.pathname,
        'Search': url.search,
        'Hash': url.hash
      };
      displayParsedUrl(parsedUrl);
    } catch (error) {
      displayError('Invalid URL. Please enter a valid URL.');
    }
  });

  function displayParsedUrl(parsedUrl) {
    parsedUrlContainer.textContent = '';
    Object.keys(parsedUrl).forEach(key => {
      const element = document.createElement('div');
      element.textContent = `${key}: ${parsedUrl[key]}`;
      parsedUrlContainer.appendChild(element);
    });
  }

  function displayError(errorMessage) {
    parsedUrlContainer.textContent = errorMessage;
  }
});