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
    const handleAddNews = () => {
        const newsText = state.form.text.trim();

        if (newsText === '') {
            return;
        }

        const date = new Date();
        state.news.unshift({
            text: newsText,
            date: date.toLocaleString(),
        });

        state.form.text = '';
    };

    newsInput.addEventListener('input', (event) => {
        state.form.text = event.target.value;
    });

    newsAddButton.addEventListener('click', handleAddNews);

    newsInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleAddNews();
        }
    });
};

const setWatchers = ({ newsContainer, newsInput }, state) => {
    const getNewsHtml = (newsData) => `
        <div class="news__news-element">
            <h5>${newsData.date}</h5>
            <div>${newsData.text}</div>
        </div>
    `;

    const getNewsList = (newsList) => newsList.map(getNewsHtml).join('');

    watch(state, 'news', () => {
        newsContainer.innerHTML = getNewsList(state.news);
    });

    watch(state, 'form', () => {
        newsInput.value = state.form.text;
    });
};

const setNewsMaker = () => {
    const state = {
        form: {
            text: '',
        },
        news: [],
    };

    const {
        newsContainer,
        newsInput,
        newsAddButton,
    } = useForm('.main.news');

    addEventListeners({
        newsInput,
        newsAddButton,
    }, state);

    setWatchers({ newsContainer, newsInput }, state);
};

export default setNewsMaker;