const email = document.getElementById("email");
const form = document.getElementById("form");
const validationMessage = document.getElementById("emailValidation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  emailValidation();
  form.submit();
})

const emailValidation = () => {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailValue = email.value;
  if(!regexEmail.test(emailValue)){
    validationMessage.innerHTML="Invalid email";
  }
}