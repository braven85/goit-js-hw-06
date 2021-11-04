const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

ingredients.forEach(function (v) {
  const addedItem = document.createElement('li');
  addedItem.textContent = v;
  addedItem.className = 'item';
  document.getElementById('ingredients').append(addedItem);
});
