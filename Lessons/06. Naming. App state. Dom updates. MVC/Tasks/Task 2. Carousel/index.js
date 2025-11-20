const setCarousel = (imageUrls) => {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevBtn = document.querySelector('.carousel-control-prev');
    const nextBtn = document.querySelector('.carousel-control-next');
    carouselInner.innerHTML = '';
    const items = imageUrls.map((src, idx) => {
        const div = document.createElement('div');
        div.className = 'carousel-item';
        if (idx === 0) {
            div.classList.add('active');
        }
        const img = document.createElement('img');
        img.src = src;
        img.className = 'd-block w-100';
        img.alt = `slide-${idx}`;
        div.appendChild(img);
        carouselInner.appendChild(div);
        return div;
    });
    let active = 0;

    // Перерисовка
    const render = () => {
        items.forEach((el, i) => el.classList.toggle('active', i === active));
    };

    // Обработчики
    prevBtn.addEventListener('click', () => {
        active = (active - 1 + items.length) % items.length;
        render();
    });
    nextBtn.addEventListener('click', () => {
        active = (active + 1) % items.length;
        render();
    });
};

export default setCarousel;
