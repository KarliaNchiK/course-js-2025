// Метод для инициализации DOM приложения
const initDOM = (state) => {
    const elementCarouselInner = document.querySelector(".carousel-inner");

    for (let i = 0; i < state.totalImages; i++) {
        const newElementDivImage = document.createElement("div");
        newElementDivImage.className = i === 0 ? "carousel-item active" : "carousel-item";
        elementCarouselInner.appendChild(newElementDivImage);

        const newElementImg = document.createElement("img");
        newElementImg.className = "d-block w-100";
        newElementImg.src = state.images[i];
        newElementDivImage.appendChild(newElementImg);
    }

};

// Метод для ререндера приложения

const render = (activeImageIndex) => {
    const elementsDivs = document.querySelectorAll(".carousel-item");
    elementsDivs.forEach((div, index) => {
        if (index === activeImageIndex) {
            div.classList.add('active');
        } else {
            div.classList.remove('active');
        }
    });
};

// Метод определения обработчиков событий в приложении
const addListeners = (state) => {
    const elementNextButton = document.querySelector(".carousel-control-next");
    const elementPrevButton = document.querySelector(".carousel-control-prev");

    elementNextButton.addEventListener("click", (event) => {
        state.activeImageIndex === state.totalImages-1 ? state.activeImageIndex = 0 : ++state.activeImageIndex;
        render(state.activeImageIndex);
    })
    elementPrevButton.addEventListener("click", (event) => {
        state.activeImageIndex === 0 ? state.activeImageIndex = state.totalImages-1 : --state.activeImageIndex;
        render(state.activeImageIndex);
    })
};

// Приложение
const setCarousel = (imageUrls) => {
    const state = {
        images: imageUrls,
        activeImageIndex: 0,
        totalImages: imageUrls.length
    }
    initDOM(state);
    addListeners(state);
};

export default setCarousel;
