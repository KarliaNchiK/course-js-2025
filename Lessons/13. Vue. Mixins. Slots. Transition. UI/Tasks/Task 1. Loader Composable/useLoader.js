export default function useLoader(rootElement) {
    let loaderElement = null;
    let isLoading = false;

    const createLoader = () => {
        const loader = document.createElement('div');
        loader.className = 'loader';
        loader.textContent = 'Загрузка...';
        return loader;
    };

    const setLoading = (show) => {
        if (isLoading === show) {
            return;
        }

        isLoading = show;

        if (show) {
            loaderElement = createLoader();

            const targetElement = rootElement?.value || rootElement?.$el || document.body;

            if (targetElement) {
                targetElement.appendChild(loaderElement);
            }
        } else if (loaderElement && loaderElement.parentNode) {
            loaderElement.parentNode.removeChild(loaderElement);
            loaderElement = null;
        }
    };

    const cleanup = () => {
        if (loaderElement && loaderElement.parentNode) {
            loaderElement.parentNode.removeChild(loaderElement);
        }
        loaderElement = null;
        isLoading = false;
    };

    // Возвращаем публичный интерфейс
    return {
        setLoading,
        cleanup,
    };
}
