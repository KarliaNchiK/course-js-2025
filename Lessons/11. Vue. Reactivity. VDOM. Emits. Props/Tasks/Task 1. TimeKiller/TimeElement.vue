<template>
    <div v-for="(time, index) in times" :key="index" class="times-container__item"
        @mouseover="() => emit('remove', index)">
        {{ time }}
    </div>
</template>

<script setup>
defineProps({
    times: {
        type: Array,
        required: true
    }
});

const emit = defineEmits(['remove']);
</script>

<style>
.times-container__item {
    padding: 10px;
    margin-bottom: 10px;
    background: #fffdb1;
    border: 1px solid #e1dfa2;
    border-radius: 4px;
}
</style>