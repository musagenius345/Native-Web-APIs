// Fetch product data from the API (replace with your actual API URL)
const fetchProducts = async () => {
    try {
        const response = await fetch('https://dummyjson.com/product');
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

// Function to render a list of products
const renderProductList = (products) => {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach((product) => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <a href="#" data-id="${product.id}" class="product-link">${product.title}</a>
        `;
        productList.appendChild(productItem);
    });
};

// Function to render product details
const renderProductDetails = (product) => {
    const productDetails = document.getElementById('product-details');
    productDetails.innerHTML = '';

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    productInfo.innerHTML = `
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <p>Rating: ${product.rating}</p>
    `;

    productDetails.appendChild(productInfo);
};

// Handle product click events
document.addEventListener('click', async (event) => {
    if (event.target.classList.contains('product-link')) {
        event.preventDefault();
        const productId = event.target.getAttribute('data-id');
        const product = products.find((p) => p.id === parseInt(productId));

        if (product) {
            // Update the URL and product details
            const queryParams = new URLSearchParams({ id: productId });
            const path = `/product?id=${productId}`;
            window.history.pushState({}, '', path);

            renderProductDetails(product);
        }
    }
});

// Initialize the application
let products = [];

fetchProducts().then((data) => {
    products = data;
    renderProductList(products);
});
