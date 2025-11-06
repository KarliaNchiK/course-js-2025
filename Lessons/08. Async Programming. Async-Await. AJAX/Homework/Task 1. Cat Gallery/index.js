import axios from 'axios';

const setCatGallery = async () => {
    const container = document.querySelector('.main__container');

    const promises = [];
    for (let i = 0; i < 10; i++) {
        promises.push(
            axios.get('https://api.thecatapi.com/v1/images/search')
                .then(response => {
                    const url = response.data[0].url;
                    const img = document.createElement('img');
                    img.src = url;
                    container.appendChild(img);
                })
                .catch(error => {
                    console.error('Ошибка загрузки кота:', error);
                })
        );
    }

    await Promise.all(promises);

    return 'cat gallery is ready!';
};

export default setCatGallery;
