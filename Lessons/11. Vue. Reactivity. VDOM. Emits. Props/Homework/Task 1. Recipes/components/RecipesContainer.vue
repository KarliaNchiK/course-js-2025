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
                    <VeganIcon />
                    {{ recipe.isVegan ? 'Да' : 'Нет' }}
                    <TimeIcon />
                    {{ recipe.time }}
                </div>
                Ингредиенты:
                {{ recipe.ingredients }}
                <button
                    @click="removeItem(index)"
                    class="btn btn-light card-body__remove-button"
                >
                    Удалить рецепт
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
            default: () => [],
        },
    },
    methods: {
        removeItem(index) {
            this.$emit('remove-recipe', index);
        },
    },

};
// Конец
</script>

<style>
.recipe-container {
  padding: 20px;
}

.card {
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
}

.card-body {
  padding: 15px;
}

.card-body__header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.card-body__header h4 {
  margin: 0;
  margin-right: auto;
}

.card-body__remove-button {
  margin-top: 10px;
  background: #dc3545;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.card-body__remove-button:hover {
  background: #c82333;
}
</style>
