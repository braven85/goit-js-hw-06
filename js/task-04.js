const counter = document.querySelector('#value');
counter.value = 0;

const incrementButton = document.querySelector('button[data-action="increment"]');
incrementButton.addEventListener('click', () => {
  counter.value++;
  counter.textContent = counter.value;
});

const decrementButton = document.querySelector('button[data-action="decrement"]');
decrementButton.addEventListener('click', () => {
  counter.value--;
  counter.textContent = counter.value;
});
