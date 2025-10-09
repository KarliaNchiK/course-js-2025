function createMessage() {
    return "НЕВЕРОЯТНО, ОНО ЗАРАБОТАЛО! Я ГЕНИЙ!";
}

function displayMessage(element, message) {
    element.textContent = message;
    element.style.color = 'red';
    element.style.fontSize = '28px';
    element.style.textAlign = 'center';
    element.style.marginTop = '50px';
    element.style.fontWeight = 'bold';
}

module.exports = { createMessage, displayMessage };
