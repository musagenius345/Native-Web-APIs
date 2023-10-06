document.addEventListener('DOMContentLoaded', () => {
  const itemInput = document.getElementById('item');
  const addItemButton = document.getElementById('addItem');
  const itemList = document.getElementById('itemList');

  let db;

  const request = indexedDB.open('itemsDB', 1);

  request.onerror = (event) => {
    console.log('Database error: ' + event.target.errorCode);
  };

  request.onsuccess = (event) => {
    db = event.target.result;
    displayItems();
  };

  request.onupgradeneeded = (event) => {
    db = event.target.result;
    const objectStore = db.createObjectStore('items', { keyPath: 'id', autoIncrement: true });
    objectStore.createIndex('name', 'name', { unique: false });
  };

  function addItem() {
    const itemName = itemInput.value;
    if (itemName === '') return;

    const transaction = db.transaction(['items'], 'readwrite');
    const objectStore = transaction.objectStore('items');

    const newItem = {
      name: itemName
    };

    const request = objectStore.add(newItem);

    request.onsuccess = () => {
      itemInput.value = '';
      displayItems();
    };

    transaction.onerror = (event) => {
      console.log('Transaction error: ' + event.target.errorCode);
    };
  }

  function displayItems() {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }

    const objectStore = db.transaction('items').objectStore('items');
    objectStore.openCursor().onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor) {
        const listItem = document.createElement('li');
        listItem.textContent = cursor.value.name;
        itemList.appendChild(listItem);

        cursor.continue();
      }
    };
  }

  addItemButton.addEventListener('click', addItem);
});