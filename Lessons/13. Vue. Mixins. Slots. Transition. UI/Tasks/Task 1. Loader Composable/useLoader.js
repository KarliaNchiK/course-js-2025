export default function useLoader(root) {
    const loaderEl = document.createElement('div');
    loaderEl.className = 'loader';
    loaderEl.textContent = 'Загрузка...';

    const setLoading = (value) => {
        const container = root && 'value' in root ? root.value : root;
        if (!container) {
            return;
        }

        if (value) {
            if (!container.contains(loaderEl)) {
                container.appendChild(loaderEl);
            }
        } else if (container.contains(loaderEl)) {
            container.removeChild(loaderEl);
        }
    };

    return {
        setLoading,
    };
}
