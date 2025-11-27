<template>
  <div class="recipe-container">
    <h3>Мои рецепты</h3>

    <div v-if="recipes.length === 0" class="recipe-container__no-recipes">
      Рецептов нет
    </div>

    <div v-else>
      <div
          v-for="recipe in recipes"
          :key="recipe.id"
          class="card"
      >
        <div class="card-body">
          <div class="card-body__header">
            <h4>{{ recipe.name }}</h4>
            <VeganIcon />
            {{ recipe.isVegan ? 'Да' : 'Нет' }}
            <TimeIcon />
            {{ getCookTimeText(recipe.cookTime) }}
          </div>
          Ингредиенты: {{ recipe.ingredients }}
          <button
              class="btn btn-light card-body__remove-button"
              @click="removeRecipe(recipe.id)"
          >
            Удалить рецепт
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VeganIcon from '../icons/VeganIcon.vue'
import TimeIcon from '../icons/TimeIcon.vue'

export default {
  name: 'RecipesContainer',
  components: {
    VeganIcon,
    TimeIcon
  },
  props: {
    recipes: {
      type: Array,
      required: true
    }
  },
  emits: ['remove-recipe'],
  methods: {
    removeRecipe(recipeId) {
      this.$emit('remove-recipe', recipeId);
    },
    getCookTimeText(cookTimeValue) {
      const cookTimes = {
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
      return cookTimes[cookTimeValue] || '5 минут';
    }
  }
};
</script>

<style>
.recipe-container {
  max-width: 350px;
}
</style>