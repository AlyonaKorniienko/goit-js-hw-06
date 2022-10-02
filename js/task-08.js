const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const message = "Please fill in all the fields!";
  const formData = { email, password };
  if (email === "" || password === "") {
    return alert(message);
  }
  console.log(formData);
  event.currentTarget.reset();
}
