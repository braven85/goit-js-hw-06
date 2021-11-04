const inputControl = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');
textSize.style.fontSize = inputControl.value + 'px';
textSize.style.color = 'green';

inputControl.addEventListener('input', () => {
  textSize.style.fontSize = inputControl.value + 'px';
  if (inputControl.value >= '57') {
    textSize.style.color = 'red';
  } else {
    textSize.style.color = 'green';
  }
});
