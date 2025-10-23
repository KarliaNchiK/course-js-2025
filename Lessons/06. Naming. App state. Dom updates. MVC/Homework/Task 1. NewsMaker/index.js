// 1. ф-я для форматирования даты
const formatDate = (date) => {
    const pad = (num) => String(num).padStart(2, '0');

    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1);
    const year = date.getFullYear();
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    return `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
};

// 2. ф-я для создания элемента новости
const createNewsElement = (newsItem) => {
    const newsElement = document.createElement('div');
    newsElement.classList.add('news__news-element');

    const dateHeader = document.createElement('h5');
    dateHeader.textContent = newsItem.date;

    const textDiv = document.createElement('div');
    textDiv.textContent = newsItem.text;

    newsElement.append(dateHeader, textDiv);

    return newsElement;
};

// 3. ф-я рендеринга списка новостей
const render = (state) => {
    const newsContainer = document.querySelector('.news__container');
    newsContainer.innerHTML = '';

    state.newsList.forEach((newsItem) => {
        const newsElement = createNewsElement(newsItem);
        newsContainer.append(newsElement);
    });
};

// !!! 4ю главная функция
const setNewsMaker = () => {
    // MODEL = состояние приложения
    const state = {
        newsList: [],
    };

    // VIEW = получаем элементы
    const input = document.querySelector('.news__form input');
    const button = document.querySelector('.news__form button');

    // CONTROLLER = обработчик добавления новости
    const addNews = () => {
        const newsText = input.value.trim();

        if (newsText) {
            const newsItem = {
                text: newsText,
                date: formatDate(new Date()),
            };

            // + в начало массива
            state.newsList.unshift(newsItem);
            input.value = '';
            render(state);
        }
    };
    button.addEventListener('click', addNews);

    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addNews();
        }
    });
    render(state);
};

export default setNewsMaker;
