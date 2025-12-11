
function highlightText(el, searchText) {
    if (!searchText || searchText.trim() === '') {
        return;
    }

    let originalText = el.textContent;
    const escapedSearchText = searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedSearchText, 'gi');

    const highlightedText = originalText.replace(regex, match => {
        return `<span>${match}</span>`;
    });

    el.innerHTML = highlightedText;
}

export default {
    mounted(el, binding) {
        highlightText(el, binding.value);
    },
    updated(el, binding) {
        highlightText(el, binding.value);
    }
};