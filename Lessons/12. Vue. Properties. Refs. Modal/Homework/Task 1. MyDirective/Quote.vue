<template>
    <div class="quotes__quote-block">
        <div 
            class="quotes__quote-text"
            v-replace="{searchText: searchText, originalText: text}"
        >
        "{{ text }}"
        </div>
        <div class="quotes__quote-author">
            (c) {{ author }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Quote',
    props: {
        text: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        searchText: {
            type: String,
            default: ''
        }
    },
    directives: {
        replace: {
            mounted(el, binding) {
                highlightText(el, binding.value);
            },
            updated(el, binding) {
                highlightText(el, binding.value);
            }
        }
    }
}

function highlightText(el, bindingValue) {
    const { searchText, originalText } = bindingValue;
    const quoteTextElement = el.querySelector('.quotes__quote-text') || el;
    
    if (!searchText || searchText.trim() === '') {
        quoteTextElement.textContent = `"${originalText}"`;
        return;
    }
    
    const regex = new RegExp(`(${escapeRegExp(searchText)})`, 'gi');
    
    const parts = originalText.split(regex);
    let highlightedText = '';
    
    parts.forEach(part => {
        if (part && regex.test(part)) {
            regex.lastIndex = 0;
            if (regex.test(part)) {
                highlightedText += `<span>${escapeHtml(part)}</span>`;
            } else {
                highlightedText += escapeHtml(part);
            }
        } else if (part) {
            highlightedText += escapeHtml(part);
        }
    });
    
    quoteTextElement.innerHTML = `"${highlightedText}"`;
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
</script>