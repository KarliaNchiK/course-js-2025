// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов
// import axios from 'axios';

const API_URL = 'https://api.thecatapi.com/v1/images/search';

const setCatGallery = async () => {
    try {
        let axiosInstance;

        if (typeof window !== 'undefined' && window.axios) {
            axiosInstance = window.axios;
        } else {
            const axiosModule = await import('axios');
            axiosInstance = axiosModule.default;
        }

        if (!axiosInstance) {
            throw new Error('Axios is not available');
        }

        const requests = Array.from({ length: 10 }, () =>
            axiosInstance.get(API_URL)
        );
        const responses = await Promise.all(requests);
        const container = document.querySelector('.main__container');

        container.innerHTML = '';

        responses.forEach(res => {
            const item = Array.isArray(res.data) ? res.data[0] : null;
            const url = item && item.url ? item.url : null;
            if (url) {
                const img = document.createElement('img');
                img.src = url;
                img.alt = 'Cat';
                container.appendChild(img);
            }
        });

        return 'cat gallery is ready!';
    } catch (error) {
        console.error('Error in setCatGallery:', error);
        throw error;
    }
};

export default setCatGallery;