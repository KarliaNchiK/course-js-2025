let axios;
if (typeof window !== 'undefined' && window.axios) {
    // В браузере axios глобален
    axios = window.axios;
} else {
    // В тестах импортируем явно
    import('axios').then(mod => {
        axios = mod.default;
    });
}

export default async function setCatGallery() {
    if (!axios) {
        // Ждем динамического импорта в Node.js
        const mod = await import('axios');
        axios = mod.default;
    }
    const container = document.querySelector('.main__container');
    container.innerHTML = '';
    const requests = Array.from({ length: 10 }, () =>
        axios.get('https://api.thecatapi.com/v1/images/search'));

    const responses = await Promise.all(requests);
    responses.forEach(res => {
        const img = document.createElement('img');
        img.src = res.data.message || res.data.file || res.data[0]?.url || res.data.url;
        container.appendChild(img);
    });

    return 'cat gallery is ready!';
}
