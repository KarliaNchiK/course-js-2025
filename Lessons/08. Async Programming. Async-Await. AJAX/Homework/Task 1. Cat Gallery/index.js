const setCatGallery = () => {
    const container = document.querySelector('.main__container');
    
    // Создаем массив из 10 промисов с fetch
    const promises = Array.from({ length: 10 }, () => 
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
    );

    return Promise.all(promises)
        .then(responses => {
            // Очищаем контейнер
            container.innerHTML = '';
            
            // Добавляем все изображения
            responses.forEach(response => {
                const imgUrl = response[0].url;
                const img = document.createElement('img');
                img.src = imgUrl;
                container.appendChild(img);
            });
            
            return 'cat gallery is ready!';
        });
};

export default setCatGallery;