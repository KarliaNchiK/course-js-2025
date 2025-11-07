// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

import axios from 'axios';

const setCatGallery = () => {
    return new Promise((resolve, reject) => {
        const elementDiv = document.querySelector('.main__container');
        const requests = []

        for (let i = 0; i < 10; i++) {
            const request = axios.get("https://api.thecatapi.com/v1/images/search")
                .then(response => {
                    const data = response.data;
                    const arrayElement = data[0];

                    const newElementImg = document.createElement("img");
                    newElementImg.src = arrayElement["url"];
                    elementDiv.append(newElementImg);

                    return response;
                })
                .catch(error => {
                    throw error;
                })

            requests.push(request);
        }

        Promise.all(requests)
            .then(() => {
                resolve("cat gallery is ready!");
            })
            .catch(error => {
                reject(error);
            })
    })
};

export default setCatGallery;
