import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const addEventListeners = (state) => {
    state.input.addEventListener('input', () => {
        state.inputText = state.input.value;
    });
    state.button.addEventListener('click', () => {
        if (state.input.value.length !== 0) {
            const date = new Date();
            const currentNews = {};
            currentNews.currentDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
            currentNews.currentText = state.input.value;
            state.newsList.push(currentNews);
            state.inputText = '';
        }
    });
};

const setWatchers = (state) => {
    const getHtml = (currentNews) => (`
        <div class="news__news-element">
            <h5>${ currentNews.currentDate }</h5>
            <div>${ currentNews.currentText }</div>
        </div>
    `);
    watch(state, 'inputText', () => {
        if (state.inputText === '') {
            state.input.value = '';
        }
    });
    watch(state, 'newsList', () => {
        state.container.innerHTML = getHtml(state.newsList.at(-1)) + '\n' + state.container.innerHTML;
    });
};

const setNewsMaker = () => {
    const newsContainer = document.querySelector('.news__container');
    const submitButton = document.querySelector('.btn');
    const inputBar = document.querySelector('.form-control');
    const state = {
        container: newsContainer,
        button: submitButton,
        input: inputBar,
        newsList: [],
        inputText: '',
    };
    addEventListeners(state);
    setWatchers(state);
};

export default setNewsMaker;
