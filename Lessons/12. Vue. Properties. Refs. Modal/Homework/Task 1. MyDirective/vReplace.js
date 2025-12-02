export default {
    beforeMount(el, binding) {
        highlight(el, binding.value);
    },
    updated(el, binding) {
        highlight(el, binding.value);
    },
};

function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlight(el, search) {
    const text = el.textContent;
    if (!search) {
        el.innerHTML = text;
        return;
    }
    const re = new RegExp(escapeRegExp(search), 'gi');
    el.innerHTML = text.replace(re, (m) => `<span>${m}</span>`);
}
