export default function useLoader(rootElement) {
    let loaderElement = null;
    
    return {
        setLoading: function(isLoading) {
            // Если rootElement - это ref, получаем его значение
            const container = rootElement?.value || rootElement || document.body;
            
            if (isLoading) {
                // Если уже есть лоадер, не создаем новый
                if (loaderElement && container.contains(loaderElement)) {
                    return;
                }
                
                // Создаем элемент загрузки
                loaderElement = document.createElement('div');
                loaderElement.className = 'loader';
                loaderElement.textContent = 'Загрузка...';
                
                // Добавляем в контейнер
                container.appendChild(loaderElement);
            } else {
                // Удаляем лоадер, если он существует
                if (loaderElement && loaderElement.parentNode) {
                    loaderElement.parentNode.removeChild(loaderElement);
                    loaderElement = null;
                }
            }
        }
    };
}