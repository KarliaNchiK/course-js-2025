const BASE_URL = 'https://api.imgflip.com/get_memes';

const updateImage = (imageData) => {
    let container = document.querySelector('.main__image-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'main__image-container';
        document.querySelector('.main').appendChild(container);
    }
    container.innerHTML = '';
    const img = document.createElement('img');
    img.src = imageData.url;
    img.alt = imageData.name;
    img.style.maxWidth = '100%';
    container.appendChild(img);
};

const giveMeMeme = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        let main = document.querySelector('.main');
        if (!main) {
            main = document.createElement('div');
            main.className = 'main';
            document.body.appendChild(main);
        }

        let container = document.querySelector('.main__image-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'main__image-container';
            main.appendChild(container);
        }

        let btn = document.querySelector('.btn.btn-warning');
        if (!btn) {
            btn = document.createElement('button');
            btn.className = 'btn btn-warning';
            btn.textContent = 'ДАЙ МНЕ МЕМ!';
            main.appendChild(btn);
        }

        if (!btn.hasListener) {
            btn.addEventListener('click', async () => {
                // eslint-disable-next-line no-useless-catch
                try {
                    const resp = await fetch(BASE_URL);
                    if (!resp.ok) {
                        throw new Error('Ошибка загрузки');
                    }
                    const data = await resp.json();
                    const memes = data.data.memes;
                    const random = memes[Math.floor(Math.random() * memes.length)];
                    updateImage(random);
                } catch (err) {
                    throw err;
                }
            });
            btn.hasListener = true;
        }
    } catch (e) {
        throw e;
    }
};

export default giveMeMeme;
