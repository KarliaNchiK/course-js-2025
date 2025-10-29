// Метод для инициализации DOM приложения
const initDOM = (state) => {
    state.urls.forEach(url => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        
        const image = document.createElement('img');
        image.src = url;
        image.classList.add('d-block', 'w-100');

        carouselItem.appendChild(image);
        state.imagesContainer.appendChild(carouselItem);
        state.images.push(carouselItem);
    });
    state.images[0].classList.add('active');
};

// Метод для ререндера приложенияs
const render = (state) => {
    state.images.forEach(image => image.classList.remove('active'));
    state.images[state.activeImageIndex].classList.add('active');
};

// Метод определения обработчиков событий в приложении
const addListeners = (state) => {
    state.prevButton.addEventListener('click', () => {
        const newValue = state.activeImageIndex - 1;
        state.activeImageIndex = newValue >= 0 ? newValue : state.images.length - 1;
        render(state);
    })
    state.nextButton.addEventListener('click', () => {
        const newValue = state.activeImageIndex + 1;
        state.activeImageIndex = newValue < state.images.length ? newValue : 0;
        render(state);
    })
};

// Приложение
const setCarousel = (imageUrls) => {
    const state = {
        urls: imageUrls,
        images: [],
        imagesContainer: document.querySelector('.carousel-inner'),
        prevButton: document.querySelector('.carousel-control-prev'),
        nextButton: document.querySelector('.carousel-control-next'),
        activeImageIndex: 0,
        lastImageIndex: 0
    };

    const init = function() {
        initDOM(state);
        state.lastImageIndex = state.images.length;
        addListeners(state);
    };

    init();
};

export default setCarousel;
