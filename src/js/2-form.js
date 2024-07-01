const formData = { email: "", message: "" };

const form = document.querySelector('.feedback-form');
const emailInput = document.getElementsByName("email");
const messageInput = document.getElementsByName("message");
const LS_KEY = 'feedback-form-state';

form.addEventListener('input', handlerInput);

function handlerInput(event) {
  event.preventDefault();

  if (event.target.name === "email") {
    formData.email = event.target.value.trim();
  }

  if (event.target.name === "message") {
    formData.message = event.target.value.trim();
  }

  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

const savedData = localStorage.getItem(LS_KEY);

function fillForm() {
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
    emailInput[0].value = formData.email;
    messageInput[0].value = formData.message;
  }
}

fillForm();

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);
  localStorage.removeItem(LS_KEY);
  formData.email = "";
  formData.message = "";
  form.reset();
}