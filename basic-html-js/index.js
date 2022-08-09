const formNewContact = document.getElementById("formNewContact");

formNewContact.addEventListener("submit", saveNewContact);
formNewContact.addEventListener("formdata", saveNewContactFormData);

function saveNewContact(event) {
  event.preventDefault();
  new FormData(formNewContact);
}

function saveNewContactFormData(event) {
  const data = event.formData;
  const newContact = {};
  for (const [key, value] of data.entries()) {
    Object.assign(newContact, { ...newContact, [key]: value });
  }
  console.log(newContact);
}
