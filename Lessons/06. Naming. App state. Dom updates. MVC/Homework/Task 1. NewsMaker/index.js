import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const useForm = (mainContainerSelector) => {
    const mainContainer = document.querySelector(mainContainerSelector);
    const newsInput = mainContainer.querySelector('.form-control');
    const newsAddButton = mainContainer.querySelector('.btn');
    const newsContainer = mainContainer.querySelector('.news__container');
    return { newsInput, newsAddButton, newsContainer };
};

const addEventListeners = ({ newsInput, newsAddButton }, state) => {
    newsInput.oninput = null;
    newsAddButton.onclick = null;

    newsInput.addEventListener('input', (event) => {
        state.form.text = event.target.value;
    });

    newsAddButton.addEventListener('click', () => {
        const newsText = state.form.text.trim();
        if (newsText === '') {
            return;
        }
        const date = new Date();
        state.news.unshift({
            text: newsText,
            date: date.toLocaleDateString() + ' ' + date.toLocaleTimeString(),
        });
        state.form.text = '';
    });
};

const setWatchers = ({ newsContainer, newsInput }, state) => {
    const getNewsHtml = (newsData) => (
        `<div class="news__news-element">
      <h5>${newsData.date}</h5>
      <div>${newsData.text}</div>
    </div>`
    );
    const getNewsList = (newsList) => (
        newsList.map(getNewsHtml).join('')
    );

    watch(state, 'news', () => {
        newsContainer.innerHTML = getNewsList(state.news);
    });
    watch(state.form, 'text', () => {
        newsInput.value = state.form.text;
    });
};

const setNewsMaker = (mainContainerSelector = '.main.news') => {
    const state = {
        form: { text: '' },
        news: [],
    };
    const formElements = useForm(mainContainerSelector);
    addEventListeners(formElements, state);
    setWatchers(formElements, state);
};

export default setNewsMaker;
