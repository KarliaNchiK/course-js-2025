// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

import axios from 'axios';

const setCatGallery = async () => {
    const url = 'https://api.thecatapi.com/v1/images/search';
    let container = document.querySelector('.main__container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'main__container';
        document.querySelector('.main').appendChild(container);
    }
    container.innerHTML = '';
    const promises = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 10; i++) {
        promises.push(axios.get(url));
    }
    const results = await Promise.all(promises);
    results.forEach(response => {
        const imgUrl = response.data[0].url;
        const img = document.createElement('img');
        img.src = imgUrl;
        container.appendChild(img);
    });
    return 'cat gallery is ready!';
};

export default setCatGallery;

document.addEventListener('DOMContentLoaded', () => {
    setCatGallery();
});
