// Define a function to create a new item
function createNewItem() {
  const newItem = document.createElement('div');
  newItem.classList.add('item', 'animated', 'animate_backInUp');
  return newItem;
}

let itemCount = 0; // Keep track of the number of items added
const maxItems = 80; // Set the maximum number of items to add

// Function to add a new item
function addNewItem() {
  if (itemCount < maxItems) {
    console.log('😈');
    const container = document.getElementById('masonry-container');
    const newItem = createNewItem();
    container.appendChild(newItem);
    itemCount++;
  }
}

// Scroll event listener
window.addEventListener('scroll', () => {
  const container = document.getElementById('masonry-container');
  const containerRect = container.getBoundingClientRect();
  if (itemCount < maxItems && containerRect.bottom <= window.innerHeight) {
    // Add a new item when the container is in the viewport
    addNewItem();
  }
});

// Initial items added using Intersection Observer
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio >= 0.2 && entry.isIntersecting) {
      addNewItem();
      observer.unobserve(entry.target); // Stop observing this target
    }
  });
}

// Options for the Intersection Observer
const options = {
  threshold: 0.2, // 20% threshold
};

// Create an Intersection Observer with the callback and options
const observer = new IntersectionObserver(handleIntersection, options);

// Observe the container
const container = document.getElementById('masonry-container');
observer.observe(container);
