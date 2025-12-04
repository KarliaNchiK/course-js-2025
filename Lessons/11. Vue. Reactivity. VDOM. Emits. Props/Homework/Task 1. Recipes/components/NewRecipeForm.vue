<template>
    <div class="recipe-form">
        <h3>Создать новый рецепт</h3>

        <div class="recipe-form__block">
            <label class="form-label">Название нового рецепта</label>
            <input v-model="recipeName" type="text" class="form-control recipe-form__name" />
        </div>

        <div class="recipe-form__block">
            <label class="form-label">Ингредиенты</label>
            <textarea v-model="ingredients" class="form-control recipe-form__ingredients"></textarea>
        </div>

        <div class="recipe-form__block">
            <label class="form-label">Последовательность действий</label>
            <textarea v-model="steps" class="form-control recipe-form__recipe-text"></textarea>
        </div>

        <div class="recipe-form__block">
            <label class="form-label">Время приготовления</label>
            <select v-model.number="cookTime" class="form-select recipe-form__cook-time">
                <option v-for="option in timeOptions" :key="option.value" :value="option.value">
                    {{ option.text }}
                </option>
            </select>
        </div>

        <div class="recipe-form__block">
            <input v-model="isVegan" type="checkbox" class="form-check-input" />
            <label class="form-check-label">Вегетарианское блюдо</label>
        </div>

        <div class="recipe-form__block">
            <button @click="submitRecipe" class="btn btn-dark recipe-form__add-button">
                Добавить рецепт
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const timeOptions = [
    { value: 1, text: '5 минут' },
    { value: 2, text: '10 минут' },
    { value: 3, text: '15 минут' },
    { value: 4, text: '20 минут' },
    { value: 5, text: '30 минут' },
    { value: 6, text: '40 минут' },
    { value: 7, text: '50 минут' },
    { value: 8, text: '1 час' },
    { value: 9, text: '1,5 часа' },
    { value: 10, text: '2 часа' },
    { value: 11, text: '2,5 часа' },
    { value: 12, text: '3 часа' },
    { value: 13, text: 'Бесконечность' },
];

const recipeName = ref('');
const ingredients = ref('');
const steps = ref('');
const cookTime = ref(1);
const isVegan = ref(false);

const emit = defineEmits(['add-recipe']);

const submitRecipe = () => {
    if (!recipeName.value.trim()) return;

    emit('add-recipe', {
        name: recipeName.value,
        ingredients: ingredients.value,
        steps: steps.value,
        cookTime: cookTime.value,
        isVegan: isVegan.value
    });

    recipeName.value = '';
    ingredients.value = '';
    steps.value = '';
    cookTime.value = 1;
    isVegan.value = false;
};
</script>

<style scoped>
.recipe-form {
    max-width: 350px;
    margin-right: 40px;
}

.recipe-form__block {
    margin-bottom: 20px;
}

.form-label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.form-control,
.form-select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.form-check-input {
    margin-right: 8px;
}

.form-check-label {
    display: inline-block;
}

.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn-dark {
    background-color: #222;
    color: white;
}
</style>
