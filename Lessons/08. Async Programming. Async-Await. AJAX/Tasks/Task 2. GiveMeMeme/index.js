const BASE_URL = 'https://api.imgflip.com/get_memes';
function updateImage(container, url) {
    if (!container) return;
    const img = document.createElement('img');
    img.src = url;
    container.innerHTML = '';
    container.appendChild(img);
}

export async function giveMeMeme() {
    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-warning');
    btn.textContent = 'ДАЙ МНЕ МЕМ!';

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('main__image-container');

    const main = document.querySelector('.main');
    main.appendChild(imageContainer);
    main.appendChild(btn);

    // Обработчик клика
    btn.addEventListener('click', async () => {
        try {
            const response = await fetch(BASE_URL);
            if (!response.ok) {
                throw new Error('Network error');
            }
            const data = await response.json();

            const memes = data.data.memes;
            const randomMeme = memes[Math.floor(Math.random() * memes.length)];
            updateImage(imageContainer, randomMeme.url);
        } catch (e) {
            throw e;
        }
    });
}

export default giveMeMeme;
