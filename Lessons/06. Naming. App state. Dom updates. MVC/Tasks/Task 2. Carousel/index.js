// Метод для инициализации DOM приложения
const initDOM = (state) => {
    const carouselInner = document.querySelector('.carousel-inner');
<<<<<<< HEAD
    carouselInner.innerHTML = '';

    state.imageUrls.forEach((url, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item' + (index === 0 ? ' active' : '');
=======

    carouselInner.innerHTML = '';

    state.imageUrls.forEach((url, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';

        if (index === 0) {
            carouselItem.classList.add('active');
        }
>>>>>>> origin/main

        const img = document.createElement('img');
        img.className = 'd-block w-100';
        img.src = url;
<<<<<<< HEAD

        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
    })
=======
        img.alt = `Slide ${index + 1}`;

        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
    });
>>>>>>> origin/main
};

// Метод для ререндера приложения
const render = (activeImageIndex) => {
    const carouselItems = document.querySelectorAll('.carousel-item');

<<<<<<< HEAD
    carouselItems.forEach((item,index) => {
        if (index === activeImageIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    })
=======
    carouselItems.forEach(item => {
        item.classList.remove('active');
    });

    if (carouselItems[activeImageIndex]) {
        carouselItems[activeImageIndex].classList.add('active');
    }
>>>>>>> origin/main
};

// Метод определения обработчиков событий в приложении
const addListeners = (state) => {
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');
<<<<<<< HEAD

    prevButton.addEventListener('click', () => {
        state.activeImageIndex = state.activeImageIndex === 0
        ? state.imageUrls.length - 1 : state.activeImageIndex - 1;
        render(state.activeImageIndex);
    });

    nextButton.addEventListener('click', () => {
        state.activeImageIndex = state.activeImageIndex === state.imageUrls.length - 1
        ? 0 : state.activeImageIndex + 1;
        render(state.activeImageIndex);
    });

=======
>>>>>>> origin/main

    prevButton.addEventListener('click', () => {
        if (state.activeImageIndex === 0) {
            state.activeImageIndex = state.imageUrls.length - 1;
        } else {
            state.activeImageIndex -= 1;
        }
        render(state.activeImageIndex);
    });

    nextButton.addEventListener('click', () => {
        if (state.activeImageIndex === state.imageUrls.length - 1) {
            state.activeImageIndex = 0;
        } else {
            state.activeImageIndex += 1;
        }
        render(state.activeImageIndex);
    });
};

// Приложение
const setCarousel = (imageUrls) => {
    const state = {
        imageUrls,
        activeImageIndex: 0,
    };

<<<<<<< HEAD
    const state =  {
        imageUrls: imageUrls,
        activeImageIndex: 0
    };

    initDOM(state);
=======
    initDOM(state);

>>>>>>> origin/main
    addListeners(state);
};

export default setCarousel;
