<template>
    <div class="recipe-container">
        <h3>Мои рецепты</h3>
        <div
            v-if="recipes.length === 0"
            class="recipe-container__no-recipes"
        >
            Рецептов нет
        </div>
        <div
            v-for="(recipe, idx) in recipes"
            :key="idx"
            class="card"
        >
            <div class="card-body">
                <div class="card-body__header">
                    <h4>{{ recipe.name }}</h4>
                    <VeganIcon />
                    {{ recipe.isVegan ? 'Да' : 'Нет' }}
                    <TimeIcon />
                    {{ recipe.cookTime }}
                </div>
                Ингредиенты:
                {{ recipe.ingredients }}
                <div>
                    {{ recipe.recipeText }}
                </div>
                <button
                    class="btn btn-light card-body__remove-button"
                    @click="remove(idx)"
                >
                    Удалить рецепт
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import VeganIcon from '../icons/VeganIcon.vue';
import TimeIcon from '../icons/TimeIcon.vue';

const props = defineProps({
    recipes: { type: Array, default: () => [] },
});
const emit = defineEmits(['remove']);
function remove(idx) {
    emit('remove', idx);
}
</script>
