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

// 
const backbagAmount = document.getElementById("backbag-amount");
const shoesAmount = document.getElementById("shoes-amount");
const backbagSum = document.getElementById("backbag-sum");
const backbagRest = document.getElementById("backbag-rest");
const shoesSum = document.getElementById("shoes-sum");
const shoesRest = document.getElementById("shoes-rest");

let backbagCounter = 1;
let shoesCounter = 1;

backbagSum.addEventListener('click', () => {
  backbagCounter++
  backbagAmount.innerHTML = backbagCounter;
})
backbagRest.addEventListener('click', () => {
  if(backbagCounter > 0){
    backbagCounter--
    backbagAmount.innerHTML = backbagCounter;
  }
})

shoesSum.addEventListener('click', () => {
  shoesCounter++
  shoesAmount.innerHTML = shoesCounter;
})
shoesRest.addEventListener('click', () => {
  if(shoesCounter > 0){
    shoesCounter--
    shoesAmount.innerHTML = shoesCounter;
  }
})