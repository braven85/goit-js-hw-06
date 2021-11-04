const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

for (const image of images) {
  const galleryListElement = document.createElement('li');
  galleryListElement.insertAdjacentHTML('beforeend', `<img src="${image.url}" alt="${image.alt}" width="100%">`);
  document.querySelector('.gallery').append(galleryListElement);
}

const galleryList = document.querySelector('.gallery');
galleryList.style.listStyleType = 'none';
galleryList.style.display = 'flex';
galleryList.style.justifyContent = 'center';
galleryList.style.alignItems = 'center';

const galleryItems = document.querySelectorAll('li');
galleryItems.forEach(function (item) {
  item.style.margin = '2px';
});

const galleryImage = document.querySelectorAll('img');
galleryImage.forEach(function (image) {
  image.style.border = '3px solid black';
  image.style.borderRadius = '20px';
});
