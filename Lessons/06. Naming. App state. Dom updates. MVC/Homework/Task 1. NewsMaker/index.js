import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const setWatchers = ({ newsContainer, newsInput }, state) => {
    const getNewsHtml = (newsData) => (`
        <div class="news__news-element">
            <h5>${newsData.date}</h5>
            <div>${newsData.text}</div>
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

    watch(state, 'text', () => {
        if (state.text === '') {
            newsInput.value = '';
        }
    });
};

const addEventListeners = (newsInput, newsAddButton, state) => {
    newsInput.addEventListener('input', (event) => {
        state.text = event.target.value;
    });

    newsAddButton.addEventListener('click', () => {
        const newsText = state.text.trim();

        if (newsText === '') {
            return;
        }

        const date = new Date();
        state.news.push({
            text: newsText,
            date: date.toLocaleDateString() + ' ' + date.toLocaleTimeString(),
        });

        state.text = '';
    });
};

const setNewsMaker = () => {
    const state = {
        text: '',
        news: [],
    };

    const mainContainer = document.querySelector('.main');
    const newsInput = mainContainer.querySelector('.form-control');
    const newsAddButton = mainContainer.querySelector('.btn-primary');
    const newsContainer = mainContainer.querySelector('.news__container');

    addEventListeners(newsInput, newsAddButton, state);

    setWatchers({ newsContainer, newsInput }, state);
};

export default setNewsMaker;
