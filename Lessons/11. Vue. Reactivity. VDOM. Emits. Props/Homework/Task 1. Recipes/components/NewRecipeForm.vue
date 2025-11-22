<template>
    <div class="recipe-form">
        <!--Начало-->
        <h3>Создать новый рецепт</h3>
        <div class="recipe-form__block">
          <label for="name" class="form-label">Название нового рецепта</label>
          <input id="name" v-model="name" type="text" class="form-control recipe-form__name" />
        </div>
        <div class="recipe-form__block">
          <label for="ingredients" class="form-label">Ингредиенты</label>
          <textarea id="ingredients" v-model="ingredients" class="form-control recipe-form__ingredients" rows="4"></textarea>
        </div>
        <div class="recipe-form__block">
          <label for="steps" class="form-label">Последовательность действий</label>
          <textarea id="steps" v-model="steps" class="form-control recipe-form__recipe-text" rows="4"></textarea>
        </div>
        <div class="recipe-form__block">
          <label for="cookTime" class="form-label">Время приготовления</label>
          <select id="cookTime" v-model="cookTime" class="form-select recipe-form__cook-time">
            <option v-for="option in timeOptions" :key="option.value" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
        <div class="recipe-form__block form-check">
          <input id="isVegetarian" type="checkbox" v-model="isVegetarian" class="form-check-input" />
          <label for="isVegetarian" class="form-check-label">Вегетарианское блюдо</label>
        </div>
        <div class="recipe-form__block">
          <button class="btn btn-dark recipe-form__add-button" @click="sendRecipe">
            Добавить рецепт
          </button>
        </div>
        <!--Конец-->
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'NewRecipeForm',
  setup(props, { emit }) {
    const name = ref('');
    const ingredients = ref('');
    const steps = ref('');
    const cookTime = ref(1);
    const isVegetarian = ref(false);

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

    function sendRecipe() {
      if (!name.value.trim() || !ingredients.value.trim() || !steps.value.trim()) {
        alert('Пожалуйста, заполните все поля');
        return;
      }
      emit('add-recipe', {
        name: name.value,
        ingredients: ingredients.value,
        steps: steps.value,
        cookTime: cookTime.value,
        isVegetarian: isVegetarian.value,
      });
      name.value = '';
      ingredients.value = '';
      steps.value = '';
      cookTime.value = 1;
      isVegetarian.value = false;
    }

    return {
      name,
      ingredients,
      steps,
      cookTime,
      isVegetarian,
      timeOptions,
      sendRecipe,
    };
  },
};
</script>

<style>
.recipe-form {
  max-width: 100%;
  margin-right: 20px;
}

.recipe-form__block {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.form-control {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.form-select {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.form-check {
  display: flex;
  align-items: center;
}

.form-check-input {
  margin-right: 8px;
}

.form-check-label {
  margin: 0;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn-dark {
  background-color: #333;
  color: white;
}

.btn-dark:hover {
  background-color: #555;
}

h3 {
  margin-bottom: 20px;
  color: #333;
}
</style>
