<template>
    <div class="times-container">
        <div 
            v-for="(time, index) in times" 
            :key="index"
            class="times-container__item"
            @mouseover="removeTime(index)"
        >
            {{ time }}
        </div>
    </div>
</template>

<script>
import { defineProps, defineEmits } from 'vue';

export default {
    name: 'TimeElement',
    props: {
        times: {
            type: Array,
            default: () => []
        }
    },
    emits: ['remove-time'],
    setup(props, { emit }) {
        const removeTime = (index) => {
            emit('remove-time', index);
        };
        
        return {
            removeTime
        };
    }
}
</script>

<style>
.times-container {
    display: flex;
    flex-direction: column;
}
.times-container__item {
    padding: 10px;
    margin-bottom: 10px;
    background: #fffdb1;
    border: 1px solid #e1dfa2;
    border-radius: 4px;
    transition: opacity 0.3s ease;
    cursor: pointer;
}
.times-container__item:hover {
    opacity: 0.7;
}
</style>