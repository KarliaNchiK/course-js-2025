import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const setNewsMaker = () => {
    // Модель (Model)
    const model = {
        news: [],
        inputValue: ''
    };

    // Представление (View)
    const view = {
        elements: {
            form: document.querySelector('.news__form'),
            input: document.querySelector('.form-control'),
            button: document.querySelector('.btn-primary'),
            container: document.querySelector('.news__container')
        },

        renderNewsItem(newsItem) {
            const newsElement = document.createElement('div');
            newsElement.className = 'news__news-element';
            newsElement.innerHTML = `
                <h5>${newsItem.date}</h5>
                <div>${newsItem.text}</div>
            `;
            return newsElement;
        },

        renderAllNews() {
            this.elements.container.innerHTML = '';
            // Важно: добавляем новости в правильном порядке последняя добавленная - первая
            model.news.forEach(newsItem => {
                const element = this.renderNewsItem(newsItem);
                this.elements.container.appendChild(element);
            });
        },

        clearInput() {
            this.elements.input.value = '';
        }
    };

    // Контроллер 
    const controller = {
        init() {
            this.bindEvents();
            this.setupWatchers();
        },

        bindEvents() {
            view.elements.button.addEventListener('click', (e) => {
                e.preventDefault();
                this.addNews();
            });

            view.elements.form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.addNews();
            });

            view.elements.input.addEventListener('input', (e) => {
                model.inputValue = e.target.value;
            });
        },

        setupWatchers() {
            watch(model, 'news', () => {
                view.renderAllNews();
            });

            watch(model, 'inputValue', () => {
                view.elements.input.value = model.inputValue;
            });
        },

        addNews() {
            const text = model.inputValue.trim();
            if (text) {
                const newsItem = {
                    text: text,
                    date: new Date().toLocaleString()
                };
                model.news.unshift(newsItem);
                model.inputValue = '';
            }
        }
    };

    controller.init();
};

export default setNewsMaker;