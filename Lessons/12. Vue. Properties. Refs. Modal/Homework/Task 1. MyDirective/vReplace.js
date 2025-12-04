import { createApp } from 'vue';
import App from './App.vue';

const highLightText = (element, searchText) => {
    const elementText = element.textContent;
    element.innerHTML = elementText.replace(searchText, '"<span>searchText</span>"');
};
const replaceDirective = {
    mounted: (element, binding) => {
        highLightText(element, binding.value);
    },
    updated: (element, binding) => {
        highLightText(element, binding.value);
    },
};

const app = createApp(App);
app.directive('replace', replaceDirective);

app.mount('#app');