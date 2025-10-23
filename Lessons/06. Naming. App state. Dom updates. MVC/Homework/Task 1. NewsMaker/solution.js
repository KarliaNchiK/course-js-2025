import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;
const state = {

}
let renderProject = () => {

    let newsContainer = document.querySelector('.news__container');

    let newsElement = document.createElement('div');
    newsElement.classList.add('news__news-element');

    let currentDate = document.createElement('h5');
    currentDate.textContent = new Date();

    let input = document.querySelector('.form-control');
    let inputValue = input.value;
    let newsElementText = document.createElement('div');
    newsElementText.textContent = inputValue;

    newsElement.appendChild(currentDate);
    newsElement.appendChild(newsElementText);

    newsContainer.appendChild(newsElement);
    input.value = '';
}
const addListener = () => {
    let createNewsBtn = document.querySelector('.btn.btn-primary');
    createNewsBtn.addEventListener('click', () => {
        renderProject();
    })
}
const setNewsMaker = () => {
    addListener();
};

export default setNewsMaker;
