<template>
    <div class="recipes">
        <!--Начало-->
      <NewRecipeForm
          @add-recipe="addRecipe"/>
      <div class="recipe-container">
        <RecipesContainer
          :savedRecipes="savedRecipes"
          @remove-recipe="removeRecipe"/>
      </div>
        <!--Конец-->
  </div>
</template>

<script>
import NewRecipeForm from "./components/NewRecipeForm.vue";
import RecipesContainer from "./components/RecipesContainer.vue";

export default {
  name: 'Recipes',
  components:
      {NewRecipeForm, RecipesContainer},
  data() {
    return {
      savedRecipes: []
    };
  },
  methods: {
    addRecipe(recipeData) {
      this.savedRecipes.push(recipeData);
    },
    removeRecipe(index) {
      this.savedRecipes.splice(index,1);
    }

  }
    // Начало
    // Конец
};
</script>

<style>
.recipes {
    width: 1000px;
    margin: 40px;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    background: whitesmoke;
    border-radius: 15px;
}

.recipes > div {
    width: 50%;
}
</style>
