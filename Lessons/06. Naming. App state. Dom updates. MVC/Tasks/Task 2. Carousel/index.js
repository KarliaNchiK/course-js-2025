let state = {
    imageUrls: [],
    activeImageIndex: 0,
};

// Метод для инициализации DOM приложения
const initDOM = (state) => {
    const carouselInner = document.querySelector('.carousel-inner');

    let i = 0;
    for (let url of state.imageUrls) {
        const item = document.createElement('div');
        item.className = `carousel-item ${i === state.activeImageIndex ? 'active' : ''}`;

        const img = document.createElement('img');
        img.className = 'd-block w-100';
        img.src = url;

        item.appendChild(img);
        carouselInner.appendChild(item);
        i += 1;
    }
};

// Метод для ререндера приложения
const render = (activeImageIndex) => {
    const items = document.querySelectorAll('.carousel-item');
    let index = 0

    for (let item of items) {
        if (index === activeImageIndex) {
            item.classList.add('active');
        }
        else {
            item.classList.remove('active');
        }

        index += 1;
    }
};

// Метод определения обработчиков событий в приложении
const addListeners = (state) => {
    const nextButton = document.querySelector('.carousel-control-next');
    const prevButton = document.querySelector('.carousel-control-prev');

    nextButton.addEventListener('click', () => {
        if (state.activeImageIndex == state.imageUrls.length - 1) {
            state.activeImageIndex = 0;
        }
        else {
            state.activeImageIndex += 1
        }

        render(state.activeImageIndex);
    });

    prevButton.addEventListener('click', () => {
        if (state.activeImageIndex == 0) {
            state.activeImageIndex = state.imageUrls.length - 1;
        }
        else {
            state.activeImageIndex -= 1
        }

        render(state.activeImageIndex);
    });
};

// Приложение
const setCarousel = (imageUrls) => {
    state.imageUrls = imageUrls;
    state.activeImageIndex = 0;

    initDOM(state);
    addListeners(state);
};

export default setCarousel;
