import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;

const addEventListeners = (state) => {
    const elementButtonPrimary = document.querySelector(".btn.btn-primary");
    const elementInputForm = document.querySelector(".form-control");

    elementButtonPrimary.addEventListener("click", (event) => {
        const text = elementInputForm.value.trim();

        const newsItem = {
            text: text,
            time: new Date().toLocaleString()
        }

        if (text) {
            state.news.push(newsItem);
            elementInputForm.value = "";
        }
    })
}

const watchState = (state) => {
    watch(state, "news", () => {
        render(state);
    })
}

const render = (state) => {
    const elementDivContainer = document.querySelector(".news__container");

    const newElementDivNews = document.createElement("div");
    newElementDivNews.className = "news__news-element";
    elementDivContainer.prepend(newElementDivNews);

    const newElementTitleH5 = document.createElement("h5");
    newElementTitleH5.textContent = state.news.at(-1).time;
    newElementDivNews.append(newElementTitleH5);

    const newElementDiv = document.createElement("div");
    newElementDiv.textContent = state.news.at(-1).text;
    newElementDivNews.append(newElementDiv);
}

const setNewsMaker = () => {
    // Начало
    const state = {
        news: []
    }

    addEventListeners(state);
    watchState(state);
};


export default setNewsMaker;
