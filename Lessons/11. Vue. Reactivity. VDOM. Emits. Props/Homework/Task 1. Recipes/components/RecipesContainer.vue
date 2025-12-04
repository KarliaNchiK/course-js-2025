<template>
  <!--Начало-->
  <div class="recipe-container">
    <h3>
      Мои рецепты
    </h3>
    <RecipesItem
        @remove-item="removeItem"
        v-for="(item, index) in recipes"
        :key="index"
        :recipeName="item.recipeName"
        :ingredients="item.ingredients"
        :actions="item.actions"
        :time="item.time"
        :is-vegan="item.isVegan"
        :index="index"
        class="card"
    />
    <!--v-if-->
    <div
        class="recipe-container__no-recipes"
        v-if="recipes.length === 0"
    >
      Рецептов нет
    </div>
  </div>
</template>

<script>
import RecipesItem from './RecipesItem.vue';

export default {
  name: 'RecipesContainer',
  components: {
    RecipesItem,
  },
  props: {
    recipes: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    removeItem(index) {
      this.$emit('remove-recipe', index);
    },
  },
};
</script>

<style>
</style>