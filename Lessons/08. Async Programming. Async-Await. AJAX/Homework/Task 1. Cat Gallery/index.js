// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

import axios from 'axios';

const setCatGallery = async () => {
    const url = 'https://api.thecatapi.com/v1/images/search';
    const container = document.querySelector('.main__container');
    const requests = Array.from({length: 10}, () => axios.get(url));

    const responses = await Promise.all(requests);
    container.innerHTML = '';
    responses.forEach(response => {
        const img = document.createElement('img');
        img.src = response.data[0].url;
        container.appendChild(img);
    });
    return 'cat gallery is ready!';
};

export default setCatGallery;