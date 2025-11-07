const BASE_URL = 'https://api.imgflip.com/get_memes';

const updateImage = (imageData) => {
    const elementDiv = document.querySelector(".main__image-container");
    elementDiv.innerHTML = '';
    const newElementImg = document.createElement('img');
    newElementImg.src = imageData["url"];
    elementDiv.append(newElementImg);

};

const giveMeMeme = () => {
    const newElementButton = document.createElement('button');
    newElementButton.className = "btn btn-warning";
    newElementButton.textContent = "ДАЙ МНЕ МЕМ!";

    const newElementDiv = document.createElement('div');
    newElementDiv.className = "main__image-container";

    const elementDivMain = document.querySelector('.main');
    elementDivMain.append(newElementDiv, newElementButton);

    newElementButton.addEventListener('click', async (event) => {

        try {
            const response = await fetch(BASE_URL);
            const data = await response.json();
            const array = data["data"]["memes"];
            const random = Math.floor(Math.random() * array.length);
            const randomMeme = array[random];

            updateImage(randomMeme)
        } catch (error) {
            throw error;
        }
    })
};

export default giveMeMeme;
