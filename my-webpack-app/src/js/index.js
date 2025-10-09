const { createMessage, displayMessage } = require('./utils.js');
const api = require('./api.js');

require('../styles.css');

function initApp() {
    const appElement = document.createElement('div');
    appElement.id = 'app';
    document.body.appendChild(appElement);

    const message = createMessage();

    displayMessage(appElement, message);

    api.getData().then(result => {
        console.log('API результат:', result);
    }).catch(error => {
        console.error('Ошибка API:', error);
    });
}

document.addEventListener('DOMContentLoaded', initApp);
