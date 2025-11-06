// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

// import axios from 'axios';
const getImg = async () => {
    try {
        const url = 'https://api.thecatapi.com/v1/images/search';
        const response = await fetch(url);
        const json = await response.json();
        return json[0].url;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const setCatGallery = async () => {
    const container = document.querySelector('.main__container');
    const imagePromises = new Array(10);
    for (let i = 0; i < 10; i += 1) {
        imagePromises[i] = getImg();
    }
    const imageUrls = await Promise.all(imagePromises);
    for (let i = 0; i < 10; i += 1) {
        const image = document.createElement('img');
        image.src = imageUrls.at(i);
        container.appendChild(image);
    }
    return 'cat gallery is ready!';
};

export default setCatGallery;
