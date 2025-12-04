import { createApp } from 'vue';

const app = createApp({});
app.directive('replace', {
    mounted: (element, binding) => {
        const textDiv = element.querySelector('.quotes__quote-text');
        const textHtml = textDiv.innerHTML;
        textHtml.innerHTML.replace(binding.value, '"<span>' + binding.value + '</span>"');
    },
});