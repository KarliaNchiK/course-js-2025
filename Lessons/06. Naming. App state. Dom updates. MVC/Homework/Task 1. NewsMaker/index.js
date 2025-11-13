import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const setNewsMaker = () => {
    const state = {
        news: []
    };

    const render = () => {
        const newsContainer = document.querySelector('.news__container');
        newsContainer.innerHTML = '';

        state.news.forEach(item => {
            const newsElement = document.createElement('div');
            newsElement.className = 'news__news-element';

            const dateElement = document.createElement('h5');
            dateElement.textContent = item.date;

            const textElement = document.createElement('div');
            textElement.textContent = item.text;

            newsElement.appendChild(dateElement);
            newsElement.appendChild(textElement);
            newsContainer.appendChild(newsElement);
        });
    };

    watch(state, 'news', () => {
        setTimeout(render, 0);
    });

    const button = document.querySelector('.btn');
    const input = document.querySelector('.form-control');

    button.addEventListener('click', () => {
        const text = input.value.trim();
        if (text) {
            state.news.unshift({
                date: new Date().toLocaleString(),
                text: text
            });
            input.value = '';
        }
    });
};

export default setNewsMaker;
