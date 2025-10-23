const state = {
    images: [],
    currentIndex: 0,
    websiteStart: false,
};
// Метод для инициализации DOM приложения
const initDOM = (state) => {
    state.websiteStart = true;
};

// Метод для ререндера приложения
const render = (activeImageIndex) => {
    const carouselInnerContainer = document.querySelector('.carousel-inner');

    // Получаем все существующие carousel-item элементы
    const existingItems = carouselInnerContainer.querySelectorAll('.carousel-item');

    // Создаем недостающие элементы
    for (let i = existingItems.length; i < state.images.length; i += 1) {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';

        const img = document.createElement('img');
        img.className = 'd-block w-100';
        img.src = state.images[i];
        img.alt = `Slide ${i + 1}`;

        carouselItem.appendChild(img);
        carouselInnerContainer.appendChild(carouselItem);
    }

    // Обновляем активный класс для всех элементов
    const allItems = carouselInnerContainer.querySelectorAll('.carousel-item');
    allItems.forEach((item, index) => {
        if (index === activeImageIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
};

// Метод определения обработчиков событий в приложении
const addListeners = (state) => {
    const buttonNext = document.querySelector('.carousel-control-next');
    const buttonPrev = document.querySelector('.carousel-control-prev');

    // Обработчик для кнопки "Вперед"
    buttonNext.addEventListener('click', () => {
        state.currentIndex = (state.currentIndex + 1) % state.images.length;
        render(state.currentIndex);
    });

    // Обработчик для кнопки "Назад"
    buttonPrev.addEventListener('click', () => {
        state.currentIndex = (state.currentIndex - 1 + state.images.length) % state.images.length;
        render(state.currentIndex);
    });
};

// Приложение
const setCarousel = (imageUrls) => {
    initDOM(state);
    state.images = imageUrls;
    state.currentIndex = 0;

    render(state.currentIndex);
    addListeners(state);
};

export default setCarousel;
