<template>
    <div class="recipe-form">
        <h3>Создать новый рецепт</h3>

        <div class="recipe-form__block">
            <label
                class="form-label"
                for="name"
            >Название нового рецепта</label>
            <input
                v-model="name"
                id="name"
                type="text"
                class="form-control recipe-form__name"
            >
        </div>

        <div class="recipe-form__block">
            <label
                class="form-label"
                for="ingredients"
            >
              Ингредиенты
            </label>
            <textarea
                v-model="ingredients"
                id="ingredients"
                class="form-control recipe-form__ingredients"
            />
        </div>

        <div class="recipe-form__block">
            <label
                class="form-label"
                for="steps"
            >Последовательность действий</label>
            <textarea
                v-model="steps"
                id="steps"
                class="form-control recipe-form__recipe-text"
            />
        </div>

        <div class="recipe-form__block">
            <label
                class="form-label"
                for="cookTime"
            >Время приготовления</label>
            <select
                v-model="cookTime"
                id="cookTime"
                class="form-select recipe-form__cook-time"
            >
                <option
                    v-for="option in timeOptions"
                    :key="option.value"
                    :value="option.value"
                >
                    {{ option.text }}
                </option>
            </select>
        </div>

        <div class="recipe-form__block form-check">
            <input
                v-model="isVegan"
                type="checkbox"
                id="isVegan"
                class="form-check-input"
            >
            <label
                class="form-check-label"
                for="isVegan"
            >Вегетарианское блюдо</label>
        </div>

        <div class="recipe-form__block">
            <button
                class="btn btn-dark recipe-form__add-button"
                @click="addRecipe"
                :disabled="!name.trim()"
            >
                Добавить рецепт
            </button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'NewRecipeForm',
    props: {
        timeOptions: {
            type: Array,
            required: true,
        },
    },
    emits: ['add-recipe'],
    setup(props, { emit }) {
        const name = ref('');
        const ingredients = ref('');
        const steps = ref('');
        const cookTime = ref(1);
        const isVegan = ref(false);

        function addRecipe() {
            if (!name.value.trim()) {
                return;
            }

            emit('add-recipe', {
                id: Date.now(),
                name: name.value.trim(),
                ingredients: ingredients.value.trim(),
                steps: steps.value.trim(),
                cookTime: cookTime.value,
                isVegan: isVegan.value,
            });

            name.value = '';
            ingredients.value = '';
            steps.value = '';
            cookTime.value = 1;
            isVegan.value = false;
        }

        return {
            name,
            ingredients,
            steps,
            cookTime,
            isVegan,
            addRecipe,
            timeOptions: props.timeOptions,
        };
    },
};
</script>

<style scoped>
.recipe-form__block {
  margin-bottom: 15px;
}
</style>
