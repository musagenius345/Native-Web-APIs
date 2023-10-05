
    // Function to handle page navigation
    const navigateToPage = (path) => {
      window.history.pushState({}, '', path);
      handlePageChange();
    };

    // Function to handle page changes
    const handlePageChange = () => {
      const path = window.location.pathname;

      if (path === '/page-1') {
        // Replace the HTML with Page 1 content
        document.body.innerHTML = `
            <h1>Page 1</h1>
            <p>Hey! I am Page 1</p>
            <div class="pagination">
                <button id="home-button">Home</button>
            </div>
        `;

        // Add a click event listener for the Home button
        document.getElementById('home-button').addEventListener('click', () => {
          navigateToPage('/');
        });
      } else {
        // Restore the original content
        document.body.innerHTML = originalContent;

        // Add a click event listener for the Home button
        document.getElementById('home-button').addEventListener('click', () => {
          navigateToPage('/');
        });

        // Add a click event listener for the Page 1 button
        document.getElementById('page-1-button').addEventListener('click', () => {
          navigateToPage('/page-1');
        });
      }
    };

    // Initialize the application
    let originalContent = document.body.innerHTML;

    // Add a click event listener for the Page 1 button
    document.getElementById('page-1-button').addEventListener('click', () => {
      navigateToPage('/page-1');
    });

    // Handle the popstate event when the user navigates back or forward
    window.addEventListener('popstate', () => {
      handlePageChange();
    });