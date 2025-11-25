<!--<template>-->
<!--    <div class="recipes">-->
<!--        &lt;!&ndash;Начало&ndash;&gt;-->
<!--        <NewRecipeForm-->
<!--            :add-recipe="addRecipe"-->
<!--        />-->
<!--        <RecipesContainer-->
<!--            :recipes="recipes"-->
<!--            :remove-recipe="removeRecipe"-->
<!--        />-->
<!--        &lt;!&ndash;Конец&ndash;&gt;-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--import NewRecipeForm from './components/NewRecipeForm.vue';-->
<!--import RecipesContainer from './components/RecipesContainer.vue';-->

<!--export default {-->
<!--    name: 'App',-->
<!--    // Начало-->
<!--    components: { RecipesContainer, NewRecipeForm },-->
<!--    data() {-->
<!--        return {-->
<!--            state: [],-->
<!--        };-->
<!--    },-->
<!--    methods: {-->
<!--        addRecipe(newRecipe) {-->
<!--            return this.state.push(newRecipe);-->
<!--        },-->
<!--        removeRecipe(index) {-->
<!--            return this.state.splice(index, 1);-->
<!--        },-->
<!--    },-->
<!--    // Конец-->
<!--};-->
<!--</script>-->

<!--<style>-->
<!--.recipes {-->
<!--  width: 1000px;-->
<!--  margin: 40px;-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  padding: 20px 0;-->
<!--  background: whitesmoke;-->
<!--  border-radius: 15px;-->
<!--}-->

<!--.recipes > div {-->
<!--  width: 50%;-->
<!--}-->
<!--</style>-->
<template>
    <div class="recipes">
        <NewRecipeForm @add-recipe="addRecipe" />
        <RecipesContainer
            :recipes="recipes"
            @remove-recipe="removeRecipe"
        />
    </div>
</template>

<script>
import NewRecipeForm from './components/NewRecipeForm.vue';
import RecipesContainer from './components/RecipesContainer.vue';

export default {
    name: 'App',
    components: { RecipesContainer, NewRecipeForm },
    data() {
        return {
            recipes: [],
        };
    },
    methods: {
        addRecipe(newRecipe) {
            this.recipes.push(newRecipe);
        },
        removeRecipe(index) {
            this.recipes.splice(index, 1);
        },
    },
};
</script>