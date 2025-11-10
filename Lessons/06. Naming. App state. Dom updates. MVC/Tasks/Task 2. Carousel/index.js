// Метод для инициализации DOM приложения
const initDOM = (state) => {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = '';
    
    for (let i = 0; i < state.images.length; i++) {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        
        if (i === state.activeIndex) {
            carouselItem.classList.add('active');
        }
        
        const img = document.createElement('img');
        img.className = 'd-block w-100';
        img.src = state.images[i];
        
        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
    }
};

//ререндера
const render = (activeImageIndex) => {
    const items = document.querySelectorAll('.carousel-item');
    
    for (let i = 0; i < items.length; i++) {
        if (i === activeImageIndex) {
            items[i].classList.add('active');
        } else {
            items[i].classList.remove('active');
        }
    }
};

// Метод определения обработчиков событий в приложении
const addListeners = (state) => {
    const nextButton = document.querySelector('.carousel-control-next');
    const prevButton = document.querySelector('.carousel-control-prev');
    
    function handleNextClick() {
        let newIndex = state.activeIndex + 1;
        if (newIndex >= state.images.length) {
            newIndex = 0;
        }
        state.activeIndex = newIndex;
        render(state.activeIndex);
    }
    
    function handlePrevClick() {
        let newIndex = state.activeIndex - 1;
        if (newIndex < 0) {
            newIndex = state.images.length - 1;
        }
        state.activeIndex = newIndex;
        render(state.activeIndex);
    }
    
    nextButton.addEventListener('click', handleNextClick);
    prevButton.addEventListener('click', handlePrevClick);
};

// Приложение
const setCarousel = (imageUrls) => {
    const state = {
        images: imageUrls,
        activeIndex: 0
    };
    
    initDOM(state);
    addListeners(state);
    
    return {
        next: () => {
            let newIndex = state.activeIndex + 1;
            if (newIndex >= state.images.length) newIndex = 0;
            state.activeIndex = newIndex;
            render(state.activeIndex);
        },
        prev: () => {
            let newIndex = state.activeIndex - 1;
            if (newIndex < 0) newIndex = state.images.length - 1;
            state.activeIndex = newIndex;
            render(state.activeIndex);
        },
        getCurrentIndex: () => state.activeIndex
    };
};

export default setCarousel;