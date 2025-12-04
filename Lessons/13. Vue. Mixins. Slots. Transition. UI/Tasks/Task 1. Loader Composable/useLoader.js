export default function useLoader(rootElement) {
    function setLoading(isLoading) {
        if (!rootElement.value) return;

        const existing = rootElement.value.querySelector('.loader');

        if (isLoading && !existing ) {
            const div = document.createElement('div');
            div.className = 'loader';
            div.textContent = 'Загрузка...';
            rootElement.value.appendChild(div);
        }

        if (!isLoading && existing) {
            existing.remove();
        }
    }

    return {setLoading };
}
