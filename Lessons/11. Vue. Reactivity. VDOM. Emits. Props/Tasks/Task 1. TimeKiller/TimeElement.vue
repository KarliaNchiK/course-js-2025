<template>
    <div class="times-container">
        <div
            v-for="(time, index) in times"
            :key="index"
            class="times-container__item"
            @mouseover="onRemove(index)"
        >
            {{ time }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'TimeElement',
    props: {
    // Массив дат для отображения
        times: {
            type: Array,
            required: true,
        },
        // Функция для удаления элемента, передаваемая из родителя
        onRemove: {
            type: Function,
            required: true,
        },
    },
    // Больше не нужны методы, так как используем переданную функцию
};
</script>

<style>
.times-container__item {
  padding: 10px;
  margin-bottom: 10px;
  background: #fffdb1;
  border: 1px solid #e1dfa2;
  border-radius: 4px;
  cursor: pointer;
}
</style>