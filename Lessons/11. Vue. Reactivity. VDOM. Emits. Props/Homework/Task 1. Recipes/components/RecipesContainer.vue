<template>
    <!--Начало-->
    <div>
        <h3>
            Мои рецепты
        </h3>
        <div class="card">
            <div
                v-for="(item, index) in savedRecipes"
                :key="index"
                class="card-body"
            >
                <div class="card-body__header">
                    <h4>
                        {{ item.name }}
                    </h4>
                    <VeganIcon class="icon" />
                    {{ item.isVegan ? "Да" : "Нет" }}
                    <TimeIcon class="icon" />
                    {{ item.cookTime }}
                </div>
                Ингредиенты:
                {{ item.ingredients }}
                <button
                    @click="removeRecipe(index)"
                    class="btn btn-light card-body__remove-button"
                >
                    Удалить рецепт
                </button>
            </div>
        </div>
        <!-- Нижерасположенный div выводится в случае, если рецептов нет -->
        <div
            v-if="savedRecipes.length === 0"
            class="recipe-container__no-recipes"
        >
            Рецептов нет
        </div>
    </div>
<!--Конец-->
</template>

<script>
import TimeIcon from '../icons/TimeIcon.vue';
import VeganIcon from '../icons/VeganIcon.vue';
// Начало
export default {
    name: 'RecipesContainer',
    components: {
        TimeIcon, VeganIcon,
    },
    props: {
        savedRecipes: {
            type: Array,
            required: true,
            default: () => [],
        },
    },
    emits: ['remove-recipe'],
    methods: {
        removeRecipe(index) {
            this.$emit('remove-recipe', index);
        },
    },

};
// Конец
</script>

<style>
.icon {
  width: 16px;
  height: 16px;
}
</style>
