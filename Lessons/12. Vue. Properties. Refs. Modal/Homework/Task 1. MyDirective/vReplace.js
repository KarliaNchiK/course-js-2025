const highlightText = (element, searchText) => {
    const elementText = element.textContent;
    element.innerHTML = elementText.replace(searchText, '<span>' + searchText + '</span>');
};

export const replaceDirective = {
    mounted(el, binding) {
        highlightText(el, binding.value);
    },
    updated(el, binding) {
        highlightText(el, binding.value);
    },
};
