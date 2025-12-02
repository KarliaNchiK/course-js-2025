function deleteRegExp(string) {
    return string.replace(/[.*+?^${}()|[]\]/g, '\$&');
}

const vReplace = {
    mounted(el, binding) {
        el.originalText = el.textContent.replace(/^[""]|[""]$/g, '').trim();
        updatedHighlight(el,binding);
    },

    updated(el, binding) {
        if (binding.value !== binding.oldValue) {
            updatedHighlight(el,binding);
        }
    },
};

function updatedHighlight(el, binding) {
    const search = (binding.value || '').trim();
    const textToDisplay = `"${el.originalText}"`;

    if (!search) {
        el.innerHTML = textToDisplay;
        return;
    }


    const escaped = deleteRegExp(search);
    const regex = new RegExp(`(${escaped})`, `gi`);
    const highlighted = el.originalText.replace(regex, '<span>$1</span>');
    el.innerHTML = `"${highlighted}"`;
}
