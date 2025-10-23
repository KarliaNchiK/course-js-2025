import WatchJS from '../../helpers/melanke-watchjs.js';

const { watch } = WatchJS;
const state = {

}
let createNews = () => {

    let newsContainer = document.querySelector('.news__container');

    let newsElement = document.createElement('div');
    newsElement.classList.add('news__news-element');

    let currentDate = document.createElement('h5');
    currentDate.textContent = new Date();

    let input = document.querySelector('.form-control');
    let inputValue = input.value;
    let newsContent = document.createElement('div');
    newsContent.textContent = inputValue;

    newsElement.appendChild(currentDate);
    newsElement.appendChild(newsContent);

    newsContainer.appendChild(newsElement);
    input.value = '';
}
const addListener = () => {
    let createNewsBtn = document.querySelector('.btn.btn-primary');
    createNewsBtn.addEventListener('click', () => {
        createNews();
    })
}
const setNewsMaker = () => {
    addListener();
};

export default setNewsMaker;
