<template>
    <div class="recipes">
        <!--Начало-->
        <div>
          <NewRecipeForm @add-recipe="addRecipe" />
        </div>
        <div>
          <RecipesContainer
              :recipes="recipes"
              @delete-recipe="deleteRecipe"
          />
        </div>
        <!--Конец-->
    </div>
</template>

<script>
import RecipesContainer from './components/RecipesContainer.vue';
import NewRecipeForm from './components/NewRecipeForm.vue';

export default {
    name: 'Recipes',
    components: { NewRecipeForm, RecipesContainer },
    // Начало
    data() {
      return { recipes: [] };
    },
    methods: {
      addRecipe(recipe) {
        this.recipes.push(recipe);
      },
      deleteRecipe(index) {
        this.recipes.splice(index, 1);
      },
    },
  // Конец
};
</script>

<style>
.recipes {
  width: 1000px;
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 30px;
  background: whitesmoke;
  border-radius: 15px;
  box-sizing: border-box;
}

.recipes > div {
  width: calc(50% - 20px);
  flex-shrink: 0;
}
</style>
