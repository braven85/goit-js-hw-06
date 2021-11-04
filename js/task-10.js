function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector('#controls');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
let divBoxes = document.querySelector('#boxes');
let inputValue = controls.firstElementChild;

let size = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const addedDiv = document.createElement('div');
    addedDiv.style.width = size + 'px';
    addedDiv.style.height = size + 'px';
    addedDiv.style.backgroundColor = getRandomHexColor();
    addedDiv.style.margin = '1px';
    addedDiv.className = 'box';
    divBoxes.append(addedDiv);
    size += 10;
  }
}

buttonCreate.addEventListener('click', () => {
  createBoxes(inputValue.value);
});

function destroyBoxes() {
  divBoxes.remove();
  const newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'boxes');
  controls.after(newDiv);
  divBoxes = document.querySelector('#boxes');
  size = 30;
}

buttonDestroy.addEventListener('click', () => {
  destroyBoxes();
});
