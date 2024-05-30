const formElement = document.querySelector(".login-form");
const labels = document.querySelectorAll(".login-form label");

labels.forEach((label) => {
  label.className = "label-style";
});

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = formElement.elements.email.value.trim();
  const passwordValue = formElement.elements.password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
  }

  const formData = new FormData(formElement);
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  formElement.reset();
  console.log(data);
});
