export const vReplace = {
    updated(element, binding) {
        const searchText = binding.value;
        if (!searchText) {
            return;
        }
        const quoteElement = element.querySelector('.quotes__quote-text');
        const text = quoteElement.textContent;
        const newText = text.replaceAll(searchText, `<span>${searchText}</span>`);
        quoteElement.innerHTML = newText;
    },
};
