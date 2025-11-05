// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

// import axios from 'axios';

const API_URL = 'https://api.thecatapi.com/v1/images/search';
const createPromisesArray = (arrayLength) => {
    return Array.from({ length: arrayLength }, () => fetch(API_URL).then(res => res.json()),);
};
const renderImages = (data) => {
    data.forEach(item => {
        let container = document.querySelector('.main__container');
        const img = document.createElement('img');
        img.src = item[0].url;
        container.appendChild(img);
    });
};
const setCatGallery = async () => {
    try {
        const promises = createPromisesArray(10);
        const results = await Promise.all(promises);
        renderImages(results);

        return 'cat gallery is ready!';
    } catch (error) {
        console.error('Error loading cat gallery:', error);
        throw error;
    }
};
export default setCatGallery;
