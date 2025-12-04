<template>
    <div class="recipes">
        <NewRecipeForm
            :time-options="timeOptions"
            @add-recipe="addRecipe"
        />
        <RecipesContainer
            :recipes="recipes"
            @remove-recipe="deleteRecipe"
        />
    </div>
</template>

<script>
import { ref } from 'vue';
import RecipesContainer from './components/RecipesContainer.vue';
import NewRecipeForm from './components/NewRecipeForm.vue';

export default {
    name: 'Recipes',
    components: { NewRecipeForm, RecipesContainer },
    setup() {
        const recipes = ref([]);

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

        function addRecipe(newRecipe) {
            recipes.value.push(newRecipe);
        }

        function deleteRecipe(id) {
            recipes.value = recipes.value.filter(recipe => recipe.id !== id);
        }

        return {
            recipes,
            timeOptions,
            addRecipe,
            deleteRecipe,
        };
    },
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
