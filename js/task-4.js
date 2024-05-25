const formElement = document.querySelector(".login-form");
const userEmailElement = document.querySelector("email");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = formElement.elements.email.value.trim();
  const passwordValue = formElement.elements.password.value.trim();

  const formData = new FormData(formElement);
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  console.log(data);
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
  }
  formElement.reset();
});
