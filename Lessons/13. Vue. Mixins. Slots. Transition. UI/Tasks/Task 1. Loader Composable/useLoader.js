export default function useLoader(rootElement) {
    // Начало
    let loaderElement = null;
    const setLoading = (isLoading) => {
        if (isLoading) {
            if (!loaderElement) {
                loaderElement = document.createElement('div');
                loaderElement.className = 'loader';
                loaderElement.textContent = 'Загрузка...';
            }

            if (rootElement.value && !rootElement.value.contains(loaderElement)) {
                rootElement.value.appendChild(loaderElement);
            }
        } else if (loaderElement && rootElement.value && rootElement.value.contains(loaderElement)) {
            rootElement.value.removeChild(loaderElement);
        }
    };
    return {
        setLoading,
    };
    // Конец
}
