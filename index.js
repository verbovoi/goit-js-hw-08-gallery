import images from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
const modalEl = document.querySelector('.js-lightbox');
const modalImageEl = document.querySelector('.lightbox__image');

//Добавляет картинки в галлерею

const addPicture = (images) => {
    const arrayPictures = [];

    images.forEach(element => {
        const itemEl = document.createElement('li');
        const imageEl = document.createElement('img');
        imageEl.src = element.preview;
        imageEl.setAttribute('data-src', element.original);
        imageEl.alt = element.description;
        imageEl.classList.add('gallery__image');
        itemEl.append(imageEl);
        arrayPictures.push(itemEl);
    });
    galleryEl.append(...arrayPictures);
};

addPicture(images);


// Открытие модального окна

galleryEl.addEventListener('click', onImageClick);

function onImageClick(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    modalEl.classList.add('is-open');
    console.log(event.target.getAttribute('data-src'));

    modalImageEl.setAttribute('src', event.target.getAttribute('data-src'));
    modalImageEl.setAttribute('alt', event.target.getAttribute('alt'));

    window.addEventListener('keydown', onEcsClick);

}

//Закрытие модального окна

modalEl.addEventListener('click', onModalClose);

function onModalClose(event) {
    if (event.target.nodeName === 'IMG') {
        return;
    }

    console.log(event.target.nodeName);
    modalEl.classList.remove('is-open');
    modalImageEl.setAttribute('src', '');
    modalImageEl.setAttribute('alt', '');

    window.removeEventListener('keydown', onEcsClick);
}


function onEcsClick(event) {
    if (event.code !== 'Escape') {
        return
    }
    console.log(event.key);
    modalEl.classList.remove('is-open');

    window.removeEventListener('keydown', onEcsClick);
}