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
          <TimeIcon />
          {{ recipe.cookTimeText }}
        </div>

        <p>Ингредиенты:<br>{{ recipe.ingredients }}</p>
        <p>{{ recipe.instructions }}</p>

        <button
            class="btn btn-light card-body__remove-button"
            @click="$emit('remove-recipe', index)"
        >
          Удалить рецепт
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VeganIcon from "../icons/VeganIcon.vue";
import TimeIcon from "../icons/TimeIcon.vue";

export default {
  name: 'RecipesContainer',
  components: { VeganIcon, TimeIcon },
  props: {
    recipes: {
      type: Array,
      required: true,
      default: () => []
    }
  }
};
</script>

<style scoped>
.recipe-container__no-recipes {
  color: #888;
  font-style: italic;
  padding: 20px;
  text-align: center;
}
.card {
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
}
.card-body {
  padding: 15px;
}
.card-body__header {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 12px;
  font-size: 14px;
}
.card-body__header h4 {
  margin: 0;
  flex-grow: 1;
  font-size: 18px;
}
.card-body__header svg {
  width: 20px;
  height: 20px;
}
</style>