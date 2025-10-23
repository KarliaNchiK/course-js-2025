const initDOM = (state) => {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = '';

    state.imageUrls.forEach((url, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${index === state.activeImageIndex ? 'active' : ''}`;

        const img = document.createElement('img');
        img.className = 'd-block w-100';
        img.src = url;
        img.alt = `Slide ${index + 1}`;

        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
    });
};

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

const addListeners = (state) => {
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');

    prevButton.addEventListener('click', () => {
        state.activeImageIndex = state.activeImageIndex === 0 ? state.imageUrls.length - 1 : state.activeImageIndex - 1;
        render(state.activeImageIndex);
    });

    nextButton.addEventListener('click', () => {
        state.activeImageIndex = state.activeImageIndex === state.imageUrls.length - 1 ? 0 : state.activeImageIndex + 1;
        render(state.activeImageIndex);
    });
};

const setCarousel = (imageUrls) => {
    const state = {
        imageUrls: imageUrls,
        activeImageIndex: 0
    };

    initDOM(state);
    addListeners(state);
};

export default setCarousel;