<template>
    <div class="recipes">
        <!--Начало-->
        <NewRecipeForm />
        <RecipesContainer
            :recipes="recipes"
            :remove-recipe="removeRecipe"
        />
        <!--Конец-->
    </div>
</template>

<script>
import NewRecipeForm from './components/NewRecipeForm.vue';
import RecipesContainer from './components/RecipesContainer.vue';
import { reactive } from 'vue';

export default {
    name: 'App',
    components: { RecipesContainer, NewRecipeForm },
    // Начало
    setup() {
        const state = reactive({
            recipes: [],
        });
        const addRecipe = () => {
            return state.recipes.push();
        };
        const removeRecipe = (index) => {
            return state.recipes.splice(index, 1);
        };
        return {
            recipes: state.recipes,
            addRecipe,
            removeRecipe,
        };
    },
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
