import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

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
        state.formText = event.target.value;
    });

    newsAddButton.addEventListener('click', () => {
        const newsText = state.formText.trim();

        if (newsText === '') {
            return;
        }

        const date = new Date();
        state.news.push({
            text: newsText,
            date: date.toLocaleDateString() + ' ' + date.toLocaleTimeString(),
        });

        state.formText = '';
    });
};

const createNewsElement = (newsData) => {
    const newsElement = document.createElement('div');
    newsElement.classList.add('news__news-element');

    const dateElement = document.createElement('h5');
    dateElement.textContent = newsData.date;

    const textElement = document.createElement('div');
    textElement.textContent = newsData.text;

    newsElement.appendChild(dateElement);
    newsElement.appendChild(textElement);

    return newsElement;
};

const renderNewsList = (newsContainer, newsList) => {
    // Очищаем контейнер
    while (newsContainer.firstChild) {
        newsContainer.removeChild(newsContainer.firstChild);
    }

    const reversedNews = [...newsList].reverse();

    reversedNews.forEach(newsData => {
        const newsElement = createNewsElement(newsData);
        newsContainer.appendChild(newsElement);
    });
};

const setWatchers = ({ newsContainer, newsInput }, state) => {
    watch(state, 'news', () => {
        renderNewsList(newsContainer, state.news);
    });

    watch(state, 'formText', () => {
        if (state.formText === '') {
            newsInput.value = '';
        }
    });
};

const setNewsMaker = () => {
    const state = {
        formText: '',
        news: [],
    };

    const {
        newsContainer,
        newsInput,
        newsAddButton,
    } = useForm('.main');

    addEventListeners({
        newsInput,
        newsAddButton,
    }, state);

    setWatchers({ newsContainer, newsInput }, state);
};

export default setNewsMaker;