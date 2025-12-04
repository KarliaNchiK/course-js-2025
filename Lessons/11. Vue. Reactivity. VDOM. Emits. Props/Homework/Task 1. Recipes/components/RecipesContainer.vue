<template>
    <div class="recipe-container">
        <h3>Мои рецепты</h3>

        <div v-if="recipes.length === 0" class="recipe-container__no-recipes">
            Рецептов нет
        </div>

        <div v-for="(recipe, index) in recipes" :key="index" class="card">
            <div class="card-body">
                <div class="card-body__header">
                    <h4>{{ recipe.name }}</h4>
                    <VeganIcon />
                    {{ recipe.isVegan ? 'Да' : 'Нет' }}
                    <!-- Точный SVG из снапшота -->
                    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="6.25" stroke="#1F1F1F" stroke-width="1.5" />
                        <path d="M8 4.5V8H10" stroke="#1F1F1F" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5" />
                    </svg>
                    {{ getTimeText(recipe.cookTime) }}
                </div>
                Ингредиенты: {{ recipe.ingredients }}
                <button @click="removeRecipe(index)" class="btn btn-light card-body__remove-button">
                    Удалить рецепт
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import VeganIcon from '../icons/VeganIcon.vue';

defineProps({
    recipes: {
        type: Array,
        required: true
    }
});

const emit = defineEmits(['remove-recipe']);

const removeRecipe = (index) => {
    emit('remove-recipe', index);
};

const getTimeText = (value) => {
    const map = {
        1: '5 минут',
        2: '10 минут',
        3: '15 минут',
        4: '20 минут',
        5: '30 минут',
        6: '40 минут',
        7: '50 минут',
        8: '1 час',
        9: '1,5 часа',
        10: '2 часа',
        11: '2,5 часа',
        12: '3 часа',
        13: 'Бесконечность'
    };
    return map[value] || 'Неизвестно';
};
</script>


<style scoped>
.recipe-container {
    max-width: 350px;
}

.card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-body {
    padding: 20px;
}

.card-body__header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}

.card-body__header h4 {
    margin: 0;
    font-size: 18px;
}

.card-body__header svg {
    width: 16px;
    height: 16px;
}

.card-body__remove-button {
    margin-top: 10px;
    padding: 5px 10px;
    font-size: 14px;
    background: #f8f9fa;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
}

.recipe-container__no-recipes {
    text-align: center;
    padding: 20px;
    color: #666;
    font-style: italic;
}
</style>