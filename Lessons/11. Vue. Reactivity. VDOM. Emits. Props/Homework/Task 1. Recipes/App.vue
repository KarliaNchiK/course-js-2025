<template>
    <div class="recipes">
        <NewRecipeForm @recipe-added="addNewRecipeToList" />
        <RecipesContainer :recipes-list="allRecipes" @remove-recipe="removeRecipe" />
    </div>
</template>

<script>
import { ref } from 'vue';

import NewRecipeForm from './components/NewRecipeForm.vue';
import RecipesContainer from './components/RecipesContainer.vue';

export default {
    name: 'Recipes',
    components: {
        NewRecipeForm,
        RecipesContainer
    },
    setup() {
        // Храним список рецептов здесь
        const allRecipes = ref([]);
        
        // Обработчик добавления нового рецепта
        const addNewRecipeToList = (newRecipeData) => {
            
            // Добавляем рецепт в список
            allRecipes.value.push({
                id: Date.now(), // Генерируем уникальный ID
                ...newRecipeData
            });
            
        };
        
        // Обработчик удаления рецепта
        const removeRecipe = (recipeId) => {
            allRecipes.value = allRecipes.value.filter(recipe => recipe.id !== recipeId);
        };

        return {
            allRecipes,
            addNewRecipeToList,
            removeRecipe
        };
    }
};
</script>

<style>
.recipes {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    margin: 40px auto;
    justify-content: center;
    padding: 20px 0;
    background: whitesmoke;
    border-radius: 15px;
    gap: 40px;
}

.recipes > div {
    width: 50%;
    min-width: 300px;
}
</style>