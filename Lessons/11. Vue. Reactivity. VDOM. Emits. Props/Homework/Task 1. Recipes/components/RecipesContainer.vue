<template>
    <!--Начало-->
    <div class="recipe-container">
        <h3>
            Мои рецепты
        </h3>
        <div
            v-for="(recipe, index) in recipes"
            :key="index"
            class="card"
        >
            <div class="card-body">
                <div class="card-body__header">
                    <h4>
                        {{ recipe.name }}
                    </h4>
                    <svg><VeganIcon /></svg>
                    {{ recipe.vegan }}
                    <svg><TimeIcon /></svg>
                    {{ recipe.time }}
                </div>
                Ингредиенты:
                {{ recipe.ingredients }}
                <button class="btn btn-light card-body__remove-button">
                    
                </button>
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
    components: { TimeIcon, VeganIcon },
    props: {
        recipes: {
            type: Array,
            required: true,
        },
        onClick: {
            type: Function,
            required: true,
        },
    },
};
// Конец
</script>

<style>
</style>
