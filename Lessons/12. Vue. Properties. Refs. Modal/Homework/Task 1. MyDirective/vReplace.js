export default {
    mounted(el, binding) {
        renderText(el, binding.value);
    },
    updated(el, binding) {
        renderText(el, binding.value);
    }
};

function renderText(el, {text, search}) {
    if (!search || !search.trim()) {
        el.innerHTML = `   "${text}"`;
        return;
    }

    const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');

    // Заменяем с сохранением регистра
    const result = text.replace(regex, '<span>$1</span>');
    el.innerHTML = `   "${result}"`;
}