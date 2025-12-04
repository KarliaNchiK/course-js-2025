export const vReplace = {
    mounted(el, binding) {
        highlightText(el, binding.value);
    },
    updated(el, binding) {
        highlightText(el, binding.value);
    }
};

function highlightText(el, searchText) {
    if (!searchText) {
        if (el._originalText) {
            el.innerHTML = el._originalText;
        }
        return;
    }

    if (!el._originalText) {
        el._originalText = el.innerHTML;
    }

    const text = el._originalText;
    const regex = new RegExp(searchText, 'gi');
    const highlightedText = text.replace(regex, match =>
        `<span>${match}</span>`
    );
    el.innerHTML = highlightedText;
}