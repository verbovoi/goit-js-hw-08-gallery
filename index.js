import images from './gallery-items.js';

const addPicture = (images) => {
    const arrayPictures = [];
    const listEl = document.querySelector('.gallery');

    images.forEach(element => {
        const itemEl = document.createElement('li');
        const imageEl = document.createElement('img');
        imageEl.src = element.preview;
        imageEl.alt = element.description;
        imageEl.classList.add('gallery__image');
        itemEl.append(imageEl);
        arrayPictures.push(itemEl);
    });
    listEl.append(...arrayPictures);
};

addPicture(images);