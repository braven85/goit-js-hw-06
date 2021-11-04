function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyItem = document.body;
const buttonItem = document.querySelector('.change-color');
const spanItem = document.querySelector('.color');
spanItem.textContent = '#ffffff';

buttonItem.addEventListener('click', () => {
  let colorValue = getRandomHexColor();
  bodyItem.style.backgroundColor = colorValue;
  spanItem.textContent = colorValue;
});
