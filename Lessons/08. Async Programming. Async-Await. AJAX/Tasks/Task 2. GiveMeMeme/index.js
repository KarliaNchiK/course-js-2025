const BASE_URL = 'https://api.imgflip.com/get_memes';

const updateImage = (imageData) => {
    const container = document.querySelector('.main__image-container');
    container.innerHTML = '';

    const img = document.createElement('img');
    img.src = imageData.url;
    img.alt = imageData.name || 'Meme';
    img.className = 'meme-image';

    container.appendChild(img);
};

const giveMeMeme = async () => {
    try {
        // Создаем кнопку
        const button = document.createElement('button');
        button.className = 'btn btn-warning';
        button.textContent = 'ДАЙ МНЕ МЕМ!';

        // Создаем контейнер для мемов
        const container = document.createElement('div');
        container.className = 'main__image-container';

        // Находим основной контейнер
        const mainContainer = document.querySelector('.main');
        if (!mainContainer) {
            throw new Error('Element with class .main not found');
        }

        // Добавляем элементы в DOM (сначала контейнер, потом кнопку)
        mainContainer.appendChild(container);
        mainContainer.appendChild(button);

        // Обработчик клика на кнопку
        button.addEventListener('click', async () => {
            try {
                const response = await fetch(BASE_URL);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();

                if (!data.success) {
                    throw new Error('API request failed');
                }

                const memes = data.data.memes;

                if (!memes || memes.length === 0) {
                    throw new Error('No memes found');
                }

                // Выбираем случайный мем
                const randomIndex = Math.floor(Math.random() * memes.length);
                const randomMeme = memes[randomIndex];

                // Обновляем изображение
                updateImage(randomMeme);

            } catch (error) {
                console.error('Error fetching meme:', error);
                throw error;
            }
        });

    } catch (error) {
        console.error('Error in giveMeMeme:', error);
        throw error;
    }
};

export default giveMeMeme;