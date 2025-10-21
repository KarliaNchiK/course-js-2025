let appState = {
    images: [],
    currentImageIndex: 0
};

const render = () => {
    // Убираем класс active у всех элементов
    const allItems = document.querySelectorAll('.carousel-item');
    allItems.forEach(item => item.classList.remove('active'));

    // Добавляем класс active текущему элементу
    const currentItem = document.querySelector(`[data-index="${appState.currentImageIndex}"]`);
    if (currentItem) {
        currentItem.classList.add('active');
    }
};

const initDOM = (imageUrls) => {
    appState.images = imageUrls;

    let carousel = document.querySelector('.carousel-inner');
    carousel.innerHTML = ''; // Очищаем на случай повторного вызова

    // Создаем все три элемента карусели
    imageUrls.forEach((url, index) => {
        let carouselItem = document.createElement("div");
        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        carouselItem.setAttribute('data-index', index); // Для поиска по индексу

        let image = document.createElement("img");
        image.className = "d-block w-100";
        image.src = url;

        carouselItem.appendChild(image);
        carousel.appendChild(carouselItem);
    });
};

const addListeners = () => {
    let btnNext = document.querySelector('.carousel-control-next');
    let btnPrev = document.querySelector('.carousel-control-prev');

    btnNext.addEventListener('click', () => {
        appState.currentImageIndex = (appState.currentImageIndex + 1) % appState.images.length;
        render();
    });

    btnPrev.addEventListener('click', () => {
        appState.currentImageIndex = (appState.currentImageIndex - 1 + appState.images.length) % appState.images.length;
        render();
    });
};

const setCarousel = (imageUrls) => {
    initDOM(imageUrls);
    addListeners();
};

export default setCarousel;