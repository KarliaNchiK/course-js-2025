import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const addEventListeners = (state) => {
    const input = state.input;
    const newsCreateButton = state.button;

    input.addEventListener('input', () => {
        state.currentText = input.value;
    });

    newsCreateButton.addEventListener('click', () => {
        if (state.input.value.length !== 0) {
            const newsText = state.currentText.trim();

            if (newsText === '') {
                return;
            }

            const date = new Date();
            state.news.push({
                date: date.toLocaleDateString() + ' ' + date.toLocaleTimeString(),
                text: newsText,
            });

            state.currentText = '';
        }
    });
};

const setWatchers = (state) => {
    const input = state.input;

    const getHtml = (newsData) => (`
        <div class="news__news-element">
            <h5>${newsData.date}</h5>
            <div>${newsData.text}</div>
        </div>
    `);

    watch(state, 'currentText', () => {
        if (state.currentText === '') {
            input.value = '';
        }
    });

    watch(state, 'news', () => {
        state.container.innerHTML = getHtml(state.news.at(-1)) + '\n' + state.container.innerHTML;
    });
};

const setNewsMaker = () => {
    // Начало
    //Модель
    const mainContainer = document.querySelector('.main');
    const newsInput = mainContainer.querySelector('.form-control');
    const newsCreateButton = mainContainer.querySelector('.btn');
    const newsContainer = mainContainer.querySelector('.news__container');
    const state = {
        input: newsInput,
        button: newsCreateButton,
        container: newsContainer,
        currentText: '',
        news: [],
    };

    //Controller
    addEventListeners(state);

    //View
    setWatchers(state);
    // Конец
};

export default setNewsMaker;

// // const newsElement = document.createElement('div');
// // newsElement.className = 'news__news-element';
// // const header5 = document.createElement('h5');
// // const day = new Date().getDate();
// // const month = new Date().getMonth();
// // const year = new Date().getFullYear();
// // header5.textContent = day + '.' + month + '.' + year;
// //
// // const textContainer = document.createElement('div');
// // textContainer.textContent = input.value;
// //
// // newsElement.appendChild(header5);
// // newsElement.appendChild(textContainer);
// //
// // newsContainer.appendChild(newsElement);
