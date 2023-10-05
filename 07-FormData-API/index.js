const form = document.getElementById('comprehensive-form');

form.addEventListener('submit', (event) => {
  event.preventDefault()
  new FormData(form);
})

form.addEventListener("formdata", (e) => {
  console.log("formdata fired");

  // Get the form data from the event object
  const data = e.formData;
  for (const [key, value] of data) {
    console.log(`${key}: ${value}`);
  }
  
  
  // submit the data via XHR
  const request = new XMLHttpRequest();
  request.open("POST", "/formHandler");
  request.send(data);
});