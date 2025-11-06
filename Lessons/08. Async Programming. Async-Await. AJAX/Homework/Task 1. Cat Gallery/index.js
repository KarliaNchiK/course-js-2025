// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

import axios from 'axios';

const url = 'https://api.thecatapi.com/v1/images/search';

const generateCatImagePromises = (arrayLength) => {
    return Array.from({ length: arrayLength }, () =>
        axios.get(url).then(res => res.data));
};

const addCatsToGallery = (array) => {
    let galleryContainer = document.querySelector('.main__container');
    if(!galleryContainer) return;
    galleryContainer.innerHTML = '';
    array.forEach(singleCatData => {
        const catImageElement = document.createElement('img');
        catImageElement.src = singleCatData[0].url;
        galleryContainer.appendChild(catImageElement);
    });
};

const setCatGallery = async() => {
    try {
        const imageLoadPromises = generateCatImagePromises(10);
        const loadedCatsData = await Promise.all(imageLoadPromises);
        addCatsToGallery(loadedCatsData);
        return 'cat gallery is ready!';
    } catch (error) {
        console.error('Error loading cat gallery:', error);
        throw error;
    }
};

export default setCatGallery;
