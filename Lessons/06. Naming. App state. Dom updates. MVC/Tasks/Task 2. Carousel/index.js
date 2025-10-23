// метод для инициализации DOM приложения
const initDOM = (state) => {
    const carouselInner = document.querySelector('.carousel-inner');

    // 1. массив url (создаем элементы для каждой картинки)
    state.imageUrls.forEach((url, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');

        // первый элемент делаем активным
        if (index === state.activeIndex) {
            carouselItem.classList.add('active');
        }

        const img = document.createElement('img');
        img.classList.add('d-block', 'w-100');
        img.src = url;

        carouselItem.append(img);
        carouselInner.append(carouselItem);
    });
};

// рендер = превратить данные в то, что видит пользователь
// метод для ререндера приложения
const render = (state) => {
    const carouselItems = document.querySelectorAll('.carousel-item');

    // yбираем класс active у всех элементов
    carouselItems.forEach((item) => {
        item.classList.remove('active');
    });

    // добавляем класс active только активному элементу
    carouselItems[state.activeIndex].classList.add('active');
};

// метод определения обработчиков событий в приложении
const addListeners = (state) => {
    const nextButton = document.querySelector('.carousel-control-next');
    const prevButton = document.querySelector('.carousel-control-prev');

    // обработчик кнопки "Вперед"
    nextButton.addEventListener('click', () => {
        state.activeIndex = (state.activeIndex + 1) % state.imageUrls.length;
        render(state);
    });

    // обработчик кнопки "Назад"
    prevButton.addEventListener('click', () => {
        state.activeIndex = (state.activeIndex - 1 + state.imageUrls.length) % state.imageUrls.length;
        render(state);
    });
};

// приложение
const setCarousel = (imageUrls) => {
    // MODEL = состояние приложения
    const state = {
        imageUrls: imageUrls,
        activeIndex: 0,
    };
    initDOM(state);
    addListeners(state);
};

export default setCarousel;
