function updateHighlight(el, binding) {
    const search = (binding.value || '').trim();
    const textToDisplay = `"${el.originalText}"`;

    if (!search) {
        el.innerHTML = textToDisplay;
        return;
    }

    if (!el.originalText.toLowerCase().includes(search.toLowerCase())) {
        el.innerHTML = textToDisplay;
        return;
    }
    const regex = new RegExp(`(${search})`, 'gi');
    const highlighted = el.originalText.replace(regex, '<span>$1</span>');
    el.innerHTML = `"${highlighted}"`;
}