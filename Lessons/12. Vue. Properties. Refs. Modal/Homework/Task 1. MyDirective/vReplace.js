const replaceDirective = {
    mounted(element, binding) {
        const text = element.textContent;
        element.innerHTML = text.replace(binding.value, '<span>' + binding.value + '</span>');
    },
    updated(element, binding) {
        const text = element.textContent;
        element.innerHTML = text.replace(binding.value, '<span>' + binding.value + '</span>');
    },
};

export { replaceDirective };