const BASE_URL = 'https://api.imgflip.com/get_memes  ';

const updateImage = (imageData) => {
    const image = document.createElement('img');
    image.src = imageData.url;

    const container = document.querySelector('.main__image-container');
    container.innerHTML = '';
    container.appendChild(image);
};

const giveMeMeme = () => {
    const buttonMem = document.createElement('button');
    buttonMem.classList = 'btn btn-warning';
    buttonMem.textContent = 'ДАЙ МНЕ МЕМ!';

    const containerMems = document.createElement('div');
    containerMems.className = 'main__image-container';

    buttonMem.addEventListener('click', async () => {
        try {
            const response = await fetch(BASE_URL);
            const json = await response.json();

            let randomIndex = Math.round(Math.random() * 40);
            const randomImg = json.data.memes[randomIndex];

            updateImage(randomImg);
        }
        catch {
            throw Error;
        }
    });

    const main = document.querySelector('.main');
    main.appendChild(containerMems);
    main.appendChild(buttonMem);
};

export default giveMeMeme;