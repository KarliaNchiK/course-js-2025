// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

import { fstat, promises } from "fs";

import axios from 'axios';

const setCatGallery = async () => {
    const catContainer = document.querySelector('.main__container');

    const requests = [];
    for (let i = 0; i < 10; i++) {
        requests.push(axios.get('https://api.thecatapi.com/v1/images/search'));
    }

    const response = await Promise.all(requests);

    response.forEach(catImage => {
        const image = document.createElement('img');
        image.src = catImage.data[0].url;
        catContainer.appendChild(image);
    })

    return 'cat gallery is ready!';
};

export default setCatGallery;
