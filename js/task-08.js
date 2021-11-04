const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', sendForm);

function sendForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Nie uzupełniono wymaganych pól!');
  }

  console.log(`E-mail: ${email.value}, Password: ${password.value}`);

  event.currentTarget.reset();
}
