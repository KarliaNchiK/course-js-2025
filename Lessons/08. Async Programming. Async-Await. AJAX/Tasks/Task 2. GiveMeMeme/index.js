const BASE_URL = 'https://api.imgflip.com/get_memes';

const updateImage = (imageData) => {
    const container = document.querySelector('.main__image-container');
    container.innerHTML = `<img src="${imageData.url}">`;
};

const giveMeMeme = async () => {
    // Создаем кнопку
    const button = document.createElement('button');
    button.className = 'btn btn-warning';
    button.textContent = 'ДАЙ МНЕ МЕМ!';
    
    // Создаем контейнер
    const container = document.createElement('div');
    container.className = 'main__image-container';
    
    // Добавляем в DOM
    const main = document.querySelector('.main');
    main.appendChild(container);
    main.appendChild(button);
    
    // Обработчик клика
    button.addEventListener('click', async () => {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        const memes = data.data.memes;
        const randomMeme = memes[Math.floor(Math.random() * memes.length)];
        updateImage(randomMeme);
    });
};

export default giveMeMeme;