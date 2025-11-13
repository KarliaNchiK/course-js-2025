// Метод для инициализации DOM приложения
const initDOM = (state) => {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = '';

    state.imageUrls.forEach((url, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        if (index === state.activeIndex) {
            carouselItem.classList.add('active');
        }

        const img = document.createElement('img');
        img.className = 'd-block w-100';
        img.src = url;

        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
    });
};

// Метод для ререндера приложения
const render = (activeImageIndex) => {
    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach((item, index) => {
        if (index === activeImageIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
};

// Метод определения обработчиков событий в приложении
const addListeners = (state) => {
    const nextButton = document.querySelector('.carousel-control-next');
    const prevButton = document.querySelector('.carousel-control-prev');

    nextButton.addEventListener('click', () => {
        state.activeIndex = (state.activeIndex + 1) % state.imageUrls.length;
        render(state.activeIndex);
    });

    prevButton.addEventListener('click', () => {
        state.activeIndex = (state.activeIndex - 1 + state.imageUrls.length) % state.imageUrls.length;
        render(state.activeIndex);
    });
};

// Приложение
const setCarousel = (imageUrls) => {
    const state = {
        imageUrls: imageUrls,
        activeIndex: 0
    };

    initDOM(state);
    addListeners(state);
};

export default setCarousel;
