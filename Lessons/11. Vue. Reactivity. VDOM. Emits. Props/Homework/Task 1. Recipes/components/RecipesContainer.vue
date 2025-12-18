<template>
    <div class="recipe-container">
        <h3> Мои рецепты </h3>
        <div class="card" v-for="recipe in recipesList" :key="recipe.id">
            <div class="card-body">
                <div class="card-body__header">
                    <h4>{{ recipe.name }}</h4>
                    <VeganIcon />
                    {{ recipe.isVegan ? 'Да' : 'Нет' }}
                    <TimeIcon />
                    {{ formatCookTime(recipe.cookTime) }}
                </div>
                Ингредиенты: {{ recipe.ingredients }}
                <button 
                    class="btn btn-light card-body__remove-button" 
                    @click="$emit('remove-recipe', recipe.id)">
                    Удалить рецепт
                </button>
            </div>
        </div>
        <div v-if="conditionForShowing" class="recipe-container__no-recipes">
            Рецептов нет
        </div>6
    </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';
import TimeIcon from '../icons/TimeIcon.vue';
import VeganIcon from '../icons/VeganIcon.vue';

// Определяем пропсы и события
const props = defineProps({
    recipesList: {
        type: Array,
        default: () => []
    }
});

const emit = defineEmits(['remove-recipe']);
const conditionForShowing = computed(() => props.recipesList.length === 0);
// Вспомогательный метод для времени
const formatCookTime = (timeValue) => {
    const timeMap = {
        1: '5 минут', 2: '10 минут', 3: '15 минут', 4: '20 минут',
        5: '30 минут', 6: '40 минут', 7: '50 минут', 8: '1 час',
        9: '1,5 часа', 10: '2 часа', 11: '2,5 часа', 12: '3 часа',
        13: 'Бесконечность',
    };
    return timeMap[timeValue] || timeValue;
};
</script>

<style>
.recipe-container {
    max-width: 600px;
    width: 100%;
}
.card {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 15px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.card-body {
    padding: 15px;
}
.card-body__header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}
.card-body__header h4 {
    margin: 0;
    margin-right: auto;
}
.card-body__header svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
}
.btn {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
}
.btn-light {
    background-color: #f8f9fa;
}
.recipe-container__no-recipes {
    padding: 15px;
    border: 1px dashed #ccc;
    text-align: center;
    color: #888;
    border-radius: 5px;
}
</style>