export default function useLoader(rootElement) {
    function setLoading(action) {
        const element = rootElement.value;

        if (action) {
            const loaderDiv = document.createElement('div');
            loaderDiv.className = 'loader';
            loaderDiv.textContent = 'Загрузка...';
            element.appendChild(loaderDiv);
        } else {
            const loaderDiv = element.querySelector('.loader');
            if (loaderDiv) {
                loaderDiv.remove();
            }
        }
    }
    return { setLoading };
}
