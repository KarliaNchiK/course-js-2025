// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

// import axios from 'axios';

const setCatGallery = async () => {
    const url = 'https://api.thecatapi.com/v1/images/search';
    const mainContainer = document.querySelector('.main__container');

    try {
        const fetchPromises = [];

        for (let i = 0; i < 10; i += 1) {
            const promise = fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => data[0].url);

            fetchPromises.push(promise);
        }
        const imageUrls = await Promise.all(fetchPromises);

        imageUrls.forEach(currentUrl => {
            const img = document.createElement('img');
            img.src = currentUrl;
            mainContainer.appendChild(img);
        });

        return 'cat gallery is ready!';
    } catch (error) {
        console.error('Failed to load cat gallery:', error);
        throw error;
    }
};

export default setCatGallery;
