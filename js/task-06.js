const inputField = document.querySelector('#validation-input');
const success = document.querySelector('.success');

inputField.addEventListener('blur', () => {
  if (inputField.value.length === Number(inputField.getAttribute('data-length'))) {
    inputField.classList = 'valid';
    success.textContent = 'Success!';
  } else {
    inputField.classList = 'invalid';
    success.textContent = '';
  }
});
