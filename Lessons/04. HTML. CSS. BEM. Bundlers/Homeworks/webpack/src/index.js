import './styles.css';

function component() {
    const element = document.createElement('div');
    element.innerHTML = "НЕВЕРОЯТНО, ОНО ЗАРАБОТАЛО! Я ГЕНИЙ!";

    // Добавляю класс для стилей
    element.classList.add('message');

    return element;

    //Вопрос как сделать блок посередине
}

document.body.appendChild(component());