// Импорт axios ниже работает только в node.js и нужен для тестирования
// Для отслеживания решения в браузере axios добавляется на страницу в виде скрипта:
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
// Выполните задание, отслеживая изменения в браузере,
// после чего раскомментируйте строку с импортом для прохождения тестов

import axios from 'axios';


const setCatGallery = () => {
    return new Promise((resolve,reject) => {
        const container = document.querySelector('.main__container');

        const requests= Array.from({length: 10}, () =>
            axios.get('https://api.thecatapi.com/v1/images/search')
        );

       Promise.all(requests)
           .then(response => {
               response.forEach(response => {
                   const imageUrl = response.data[0].url;

                   const img = document.createElement('img');
                   img.src = imageUrl;

                   container.appendChild(img);
               });

               resolve('cat gallery is ready!');
           })
           .catch(error => {
               reject(error);
           });
    });
};


export default setCatGallery;
