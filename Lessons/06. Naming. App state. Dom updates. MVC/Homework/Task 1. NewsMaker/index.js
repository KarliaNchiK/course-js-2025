import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const setNewsMaker = () => {
    const state = {
        news: [],
        currentInput: ''
    };

    const controller = {
        addNews: function() {
            if (state.currentInput.trim() === '') {
                return;
            }

            const newNews = {
                text: state.currentInput,
                date: new Date().toLocaleString()
            };

            state.news.unshift(newNews);
            
            state.currentInput = '';
        },

        updateInput: function(text) {
            state.currentInput = text;
        }
    };

    const view = {
        init: function() {
            this.newsContainer = document.querySelector('.news__container');
            this.newsInput = document.querySelector('.news__form .form-control');
            this.addButton = document.querySelector('.news__form .btn');
            
            this.setupEventListeners();
        },

        setupEventListeners: function() {
            this.addButton.addEventListener('click', () => {
                controller.addNews();
            });

            this.newsInput.addEventListener('input', (event) => {
                controller.updateInput(event.target.value);
            });

            this.newsInput.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    controller.addNews();
                }
            });
        },

        clearNewsContainer: function() {
            this.newsContainer.innerHTML = '';
        },

        createNewsElement: function(newsItem) {
            const newsElement = document.createElement('div');
            newsElement.className = 'news__news-element';

            const dateElement = document.createElement('h5');
            dateElement.textContent = newsItem.date;

            const textElement = document.createElement('div');
            textElement.textContent = newsItem.text;

            newsElement.appendChild(dateElement);
            newsElement.appendChild(textElement);

            return newsElement;
        },

        renderNews: function() {
            this.clearNewsContainer();
            
            state.news.forEach(newsItem => {
                const newsElement = this.createNewsElement(newsItem);
                this.newsContainer.appendChild(newsElement);
            });
        },

        updateInputValue: function() {
            this.newsInput.value = state.currentInput;
        }
    };

    watch(state, 'news', () => {
        view.renderNews();
    });

    watch(state, 'currentInput', () => {
        view.updateInputValue();
    });

    view.init();

    return state;
};

export default setNewsMaker;
