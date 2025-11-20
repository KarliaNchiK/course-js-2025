<template>
    <div class="recipes">
        <NewRecipeForm
            @add="addRecipe"
        />

        <RecipesContainer
            :recipes="recipes"
            @remove="removeRecipe"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import NewRecipeForm from './components/NewRecipeForm.vue';
import RecipesContainer from './components/RecipesContainer.vue';

const recipes = ref([]);

const addRecipe = (recipe) => {
    recipes.value.push(recipe);
};

const removeRecipe = (index) => {
    recipes.value.splice(index, 1);
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
