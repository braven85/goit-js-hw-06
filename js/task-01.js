const allItems = document.querySelectorAll('.item');

console.log('Number of categories: ' + allItems.length);

const allHeaders = document.querySelectorAll('h2');

allHeaders.forEach(function (v) {
  console.log('Category: ' + v.textContent);
  console.log('Elements: ' + v.parentElement.lastElementChild.children.length);
});
