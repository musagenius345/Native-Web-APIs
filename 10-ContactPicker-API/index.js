const supported = "contacts" in navigator;
const container = document.querySelector('.container');
const pickContactsBtn = document.getElementById('pickContactsBtn');
const selectedContactsList = document.getElementById('selectedContactsList');

if (!supported) {
  displayNotSupportedMessage();
} else {
  pickContactsBtn.addEventListener('click', handlePickContacts);
}

function displayNotSupportedMessage() {
  container.innerHTML = '';
  const warning = document.createElement('h2');
  warning.classList.add('warning');
  warning.textContent = 'Contact Picker API not supported by your Browser';
  container.append(warning);
}

function handlePickContacts() {
  try {
    pickContacts().then(displayContacts);
  } catch (e) {
    console.error('Something went wrong:', e);
  }
}

async function pickContacts() {
  const contactProps = await navigator.contacts.getProperties();
  const props = availableProps(contactProps);
  return navigator.contacts.select(props, {
    multiple: true
  });
}

function availableProps(supportedProperties) {
  const props = [];
  if (supportedProperties.includes("name")) {
    props.push("name");
  }
  if (supportedProperties.includes("email")) {
    props.push("email");
    // run code for email support
  }
  if (supportedProperties.includes("tel")) {
    props.push("tel");
    // run code for telephone number support
  }
  if (supportedProperties.includes("address")) {
    props.push("address");
    // run code for address support
  }
  if (supportedProperties.includes("icon")) {
    props.push("icon");
    // run code for avatar support
  }
  return props;
}

function displayContacts(contacts) {
  selectedContactsList.innerHTML = '';
  contacts.forEach(contact => {
    const contactElement = createContactElement({
      name: contact.name,
      number: contact.tel,
      icon: contact.icon
    });
    selectedContactsList.append(contactElement);
  });
}

function createContactElement({ name, number, icon }) {
  const contact = document.createElement('article');
  const contactName = document.createElement('h2');
  const contactIcon = document.createElement('img');
  const phoneNumber = document.createElement('h3');

  contact.classList.add('contact');
  contactName.textContent = `Name: ${name || 'N/A'}`;
  phoneNumber.textContent = `Phone Number: ${number || 'N/A'}`;

  if (icon instanceof Blob) {
    const iconUrl = URL.createObjectURL(icon);
    contactIcon.src = iconUrl;
    contactIcon.classList.add('icon');
    contact.appendChild(contactIcon);
  }

  contact.append(contactName, phoneNumber);
  return contact;
}