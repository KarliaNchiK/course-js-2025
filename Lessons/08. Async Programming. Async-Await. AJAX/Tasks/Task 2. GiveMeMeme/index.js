const BASE_URL = 'https://api.imgflip.com/get_memes';

const updateImage = (meme) => {
    const memeContainer = document.querySelector('.main__image-container');

    // Очищаем контейнер перед добавлением нового мема
    memeContainer.innerHTML = '';

    // Создаем элемент изображения
    const img = document.createElement('img');
    img.src = meme.url;
    img.alt = meme.name;
    img.style.maxWidth = '100%';
    img.style.height = 'auto';

    // Добавляем изображение в контейнер
    memeContainer.appendChild(img);
};

const giveMeMeme = async () => {
    try {
        // Создаем кнопку
        const button = document.createElement('button');
        button.className = 'btn btn-warning';
        button.textContent = 'ДАЙ МНЕ МЕМ!';

        // Создаем контейнер для мемов
        const memeContainer = document.createElement('div');
        memeContainer.className = 'main__image-container';

        // Находим элемент .main и добавляем в него элементы
        const mainElement = document.querySelector('.main');

        mainElement.appendChild(memeContainer);
        mainElement.appendChild(button);

        // Обработчик клика на кнопку
        button.addEventListener('click', async () => {
            try {
                // Отправляем запрос
                const response = await fetch(BASE_URL);

                const data = await response.json();

                const memes = data.data.memes;

                // Выбираем случайный мем
                const randomIndex = Math.floor(Math.random() * memes.length);
                const randomMeme = memes[randomIndex];

                // Вставляем мем в DOM
                updateImage(randomMeme);
            } catch (error) {
                console.error('Ошибка при получении мема:', error);
                // Прокидываем ошибку дальше
                throw error;
            }
        });
    } catch (error) {
        console.error('Ошибка при инициализации:', error);
        throw error;
    }
};
export default giveMeMeme;
