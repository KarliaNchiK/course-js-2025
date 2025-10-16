let currentState = 0;
let amount;
// Метод для ререндера приложения
const render = (activeImageIndex) => {
    const imagesList = document.querySelectorAll('.carousel-item');
    for (let i = 0; i <= amount; i += 1) {
        if (i === activeImageIndex) {
            imagesList[i].classList.add('active');
        } else if (imagesList[i] !== undefined) {
            imagesList[i].classList.remove('active');
        }
    }
};

// Метод определения обработчиков событий в приложении
const addListeners = () => {
    const buttonsContainer = document.querySelector('.carousel');
    const forwardButton = document.querySelector('.carousel-control-next');
    const backwardButton = document.querySelector('.carousel-control-prev');

    forwardButton.addEventListener('click', () => {
        if (currentState === amount - 1) {
            currentState = 0;
        } else {
            currentState += 1;
        }
        render(currentState);
    });

    backwardButton.addEventListener('click', () => {
        if (currentState === 0) {
            currentState = amount - 1;
        } else {
            currentState -= 1;
        }
        render(currentState);
    });
    buttonsContainer.appendChild(forwardButton);
    buttonsContainer.appendChild(backwardButton);
};
// Метод для инициализации DOM приложения
const initDOM = (state, imageUrls) => {
    const imagesContainer = document.querySelector('.carousel-inner');
    for (const image of imageUrls) {
        const currentDiv = document.createElement('div');
        currentDiv.className = 'carousel-item';
        const currentImg = document.createElement('img');
        currentImg.className = 'd-block';
        currentImg.className = 'w-100';
        currentImg.src = image;
        currentDiv.appendChild(currentImg);
        imagesContainer.appendChild(currentDiv);
    }
    currentState = state;
    addListeners();
    render(currentState);
};
// Приложение
const setCarousel = (imageUrls) => {
    amount = imageUrls.length;
    initDOM(0, imageUrls);
};
export default setCarousel;
