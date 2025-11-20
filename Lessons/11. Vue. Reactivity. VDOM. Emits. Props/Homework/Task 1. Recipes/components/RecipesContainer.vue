<template>
    <!--Начало-->
  <div class="recipe-container">
    <h3>Мои рецепты</h3>
    <div v-if="recipes.length === 0" class="recipe-container__no-recipes">Рецептов нет</div>
    <div v-else>
      <div
          v-for="(recipe, idx) in recipes"
          :key="idx"
          class="card"
      >
        <div class="card-body">
          <div class="card-body__header">
            <h4>{{ recipe.name }}</h4>
            <div class="recipe-icons">
              <VeganIcon class="icon" />
              <span>{{ recipe.isVegetarian ? 'Да' : 'Нет' }}</span>
              <TimeIcon class="icon" />
              <span>{{ getTimeText(recipe.cookTime) }}</span>
            </div>
          </div>
          <div class="ingredients">Ингредиенты: {{ recipe.ingredients }}</div>
          <button class="btn btn-light card-body__remove-button" @click="$emit('delete-recipe', idx)">
            Удалить рецепт
          </button>
        </div>
      </div>
    </div>
  </div>
<!--Конец-->
</template>

<script>
// Начало
import VeganIcon from '../icons/VeganIcon.vue';
import TimeIcon from '../icons/TimeIcon.vue';

export default {
  name: 'RecipesContainer',
  components: {
    VeganIcon,
    TimeIcon,
  },
  props: {
    recipes: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getTimeText(value) {
      const options = [
        '5 минут', '10 минут', '15 минут', '20 минут', '30 минут', '40 минут',
        '50 минут', '1 час', '1,5 часа', '2 часа', '2,5 часа', '3 часа', 'Бесконечность'
      ];
      return options[value - 1];
    },
  },
};
// Конец
</script>

<style>
.recipe-container {
  width: 100%;
}

.card {
  background: #fff;
  border-radius: 10px;
  padding: 0;
  margin-bottom: 20px;
  box-shadow: 0 1px 4px rgba(150,150,150,0.08);
  border: 1px solid #eee;
}

.card-body {
  padding: 20px;
}

.card-body__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.card-body__header h4 {
  margin: 0;
  color: #333;
  font-size: 18px;
}

.recipe-icons {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
}

.icon {
  width: 16px;
  height: 16px;
}

.ingredients {
  margin-bottom: 15px;
  color: #555;
  line-height: 1.4;
}

.btn-light {
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #ddd;
}

.btn-light:hover {
  background-color: #e2e6ea;
}

.recipe-container__no-recipes {
  color: #666;
  font-style: italic;
  text-align: center;
  padding: 40px;
}

h3 {
  margin-bottom: 20px;
  color: #333;
}
</style>
