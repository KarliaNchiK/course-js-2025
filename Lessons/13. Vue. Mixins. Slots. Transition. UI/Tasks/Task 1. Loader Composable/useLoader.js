// useLoader.js
import { onMounted, onUnmounted } from 'vue';

export default function useLoader(rootRef) {
    let loaderElement = null;

    const setLoading = (isLoading) => {

        const rootElement = rootRef.value;
        if (!rootElement) return;

        if (isLoading) {
            if (!loaderElement) {
                loaderElement = document.createElement('div');
                loaderElement.className = 'loader';
                loaderElement.textContent = 'Загрузка...';
            }
            if (!rootElement.contains(loaderElement)) {
                rootElement.appendChild(loaderElement);
            }
        } else {
            if (loaderElement && rootElement.contains(loaderElement)) {
                rootElement.removeChild(loaderElement);
            }
        }
    };

    onUnmounted(() => {
        if (loaderElement && loaderElement.parentNode) {
            loaderElement.parentNode.removeChild(loaderElement);
        }
    });

    return {
        setLoading,
    };
}