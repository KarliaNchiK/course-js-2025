import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

<<<<<<< HEAD
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
=======
const useForm = (mainContainerSelector) => {
    const mainContainer = document.querySelector(mainContainerSelector);
    const newsInput = mainContainer.querySelector('.form-control');
    const newsAddButton = mainContainer.querySelector('.btn-primary');
    const newsContainer = mainContainer.querySelector('.news__container');

    return {
        newsInput,
        newsAddButton,
        newsContainer,
    };
};

const addEventListeners = ({ newsInput, newsAddButton }, state) => {
    newsInput.addEventListener('input', (event) => {
        state.form.text = event.target.value;
    });

    newsAddButton.addEventListener('click', () => {
        const newsText = state.form.text.trim();

        if (newsText === '') {
            return;
        }

        const date = new Date();
        state.news.push({
            text: newsText,
            date: date.toLocaleDateString() + ' ' + date.toLocaleTimeString(),
        });

        state.form.text = '';
    });
};

const setWatchers = ({ newsContainer, newsInput }, state) => {
    const getNewsHtml = (newsData) => (`
        <div class="news__news-element">
            <h5>${ newsData.date }</h5>
            <div>${ newsData.text }</div>
        </div>
    `);

    const getNewsList = (newsList) => (
        newsList
            .map(getNewsHtml)
            .reverse()
            .join('\n')
    );

    watch(state, 'news', () => {
        newsContainer.innerHTML = getNewsList(state.news);
    });

    watch(state, 'form', () => {
        if (state.form.text === '') {
            newsInput.value = '';
        }
    });
};

const setNewsMaker = () => {
    // Модель нашего приложения
    const state = {
        form: {
            text: '',
        },
        news: [],
    };

    // Обновляемые элементы нашего приложения
    const {
        newsContainer,
        newsInput,
        newsAddButton,
    } = useForm('.main');

    // Мозги приложения - слой Controller
    // Создаём обработчики для событий в слое View (в интерфейсе)
    // Единственная ответственность обработчиков - обновлять состояние приложения (слой Model)
    addEventListeners({
        newsInput,
        newsAddButton,
    }, state);

    // Работа со слоем View
    // Единственная ответственность вотчеров - обновлять DOM при изменении состояния
    setWatchers({ newsContainer, newsInput }, state);
>>>>>>> origin/main
};

export default setNewsMaker;
