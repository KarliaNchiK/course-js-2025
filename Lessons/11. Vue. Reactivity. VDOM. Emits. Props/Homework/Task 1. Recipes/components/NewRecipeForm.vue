<template>
    <div class="recipe-form">
        <h3>Создать новый рецепт</h3>
        <div class="recipe-form__block">
            <label class="form-label">Название нового рецепта</label>
            <input
                type="text"
                class="form-control recipe-form__name"
                v-model="name"
            >
        </div>
        <div class="recipe-form__block">
            <label class="form-label">Ингредиенты</label>
            <textarea
                class="form-control recipe-form__ingredients"
                v-model="ingredients"
            />
        </div>
        <div class="recipe-form__block">
            <label class="form-label">Последовательность действий</label>
            <textarea
                class="form-control recipe-form__recipe-text"
                v-model="recipeText"
            />
        </div>
        <div class="recipe-form__block">
            <label class="form-label">Время приготовления</label>
            <select
                class="form-select recipe-form__cook-time"
                v-model="cookTime"
            >
                <option value="5 минут">
                    5 минут
                </option>
                <option value="10 минут">
                    10 минут
                </option>
                <option value="15 минут">
                    15 минут
                </option>
                <option value="20 минут">
                    20 минут
                </option>
                <option value="30 минут">
                    30 минут
                </option>
                <option value="40 минут">
                    40 минут
                </option>
                <option value="1 час">
                    1 час
                </option>
                <option value="1,5 часа">
                    1,5 часа
                </option>
                <option value="2 часа">
                    2 часа
                </option>
                <option value="2,5 часа">
                    2,5 часа
                </option>
            </select>
        </div>
        <div class="recipe-form__block">
            <input
                type="checkbox"
                class="form-check-input"
                v-model="isVegan"
            >
            <label class="form-check-label">Вегетарианское блюдо</label>
        </div>
        <div class="recipe-form__block">
            <button
                class="btn btn-dark recipe-form__add-button"
                @click="onAdd"
            >
                Добавить рецепт
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add']);
const name = ref('');
const ingredients = ref('');
const recipeText = ref('');
const cookTime = ref('5 минут');
const isVegan = ref(false);

function clear() {
    name.value = '';
    ingredients.value = '';
    recipeText.value = '';
    cookTime.value = '5 минут';
    isVegan.value = false;
}

function onAdd() {
    emit('add', {
        name: name.value,
        ingredients: ingredients.value,
        recipeText: recipeText.value,
        cookTime: cookTime.value,
        isVegan: isVegan.value,
    });
    clear();
}
</script>
