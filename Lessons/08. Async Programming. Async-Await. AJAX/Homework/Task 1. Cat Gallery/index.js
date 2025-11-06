// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов
//import axios from 'axios';

const setCatGallery = async () => {
    const url = 'https://api.thecatapi.com/v1/images/search';

    try {
        const container = document.querySelector('.main__container');
        if (!container) {
            throw new Error('Container not found');
        }

        container.innerHTML = '';

        // Создаем 10 промисов для запросов
        const promises = [];
        for (let i = 0; i < 10; i++) {
            promises.push(axios.get(url));
        }

        // Ждем выполнения всех запросов
        const results = await Promise.all(promises);

        // Добавляем изображения на страницу
        results.forEach(response => {
            const imgUrl = response.data[0].url;
            const img = document.createElement('img');
            img.src = imgUrl;
            img.alt = 'Cat';
            container.appendChild(img);
        });

        return 'cat gallery is ready!';

    } catch (error) {
        console.error('Error fetching cats:', error);
        throw error;
    }
};

// Для тестов
export default setCatGallery;

// Для браузера
/*document.addEventListener('DOMContentLoaded', () => {
    setCatGallery().then((text) => {
        console.log(text); // cat gallery is ready!
    });
});

 */