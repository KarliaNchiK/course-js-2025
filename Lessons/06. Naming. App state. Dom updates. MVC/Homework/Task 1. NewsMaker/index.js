import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;


const setNewsMaker = () => {
    // Начало
    const state = {
        news: [],
        inputValue: ''
    };

    const controller = {
        addNews: () => {
            if(state.inputValue.trim()) {
                const newNews = {
                    text: state.inputValue.trim(),
                    date: new Date().toLocaleString()
                };
                state.news.unshift(newNews);
                state.inputValue = '';
            }
        },

        updateInputValue: (value) => {
            state.inputValue = value
        }
    };

    const view = {
        init: () => {
            const inputField = document.querySelector('.news__form .form-control');
            const addButton = document.querySelector('.news__form .btn');

            addButton.addEventListener('click', () => {
                controller.addNews();
            });

            inputField.addEventListener('input', (e) => {
                 controller.updateInputValue(e.target.value);
            });

            inputField.addEventListener('keypress', (e) => {
                if (e.key === 'Enter'){
                    controller.addNews();
                }
            });

            watch(state, 'news', () => {
                view.renderNews();
            });

            watch(state, 'inputValue', () => {
                inputField.value = state.inputValue;
            });
        },

        renderNews: () => {
            const newsContainer = document.querySelector('.news__container');

            newsContainer.innerHTML = '';

            state.news.forEach(newsItem => {
                const newsElemnt = document.createElement('div');
                newsElemnt.className = 'news__news-element';

                const dataElement = document.createElement('h5');
                dataElement.textContent = newsItem.date;

                const textElement = document.createElement('div');
                textElement.textContent = newsItem.text;

                newsElemnt.appendChild(dataElement);
                newsElemnt.appendChild(textElement);

                newsContainer.appendChild(newsElemnt);
            });
        }
    };

    view.init();
    // Конец


};

export default setNewsMaker;
