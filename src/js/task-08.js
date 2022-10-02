const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const pass = formElements.password.value;
  const message = "Please fill in all the fields!";
  const formData = { mail, pass };
  if (mail === "" || pass === "") {
    return alert(message);
  }
  console.log(formData);
  event.currentTarget.reset();
}
