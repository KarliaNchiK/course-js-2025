<template>
  <div class="card-body">
    <div class="card-body__header">
      <h4>
        {{ recipeName }}
      </h4>
      <VeganIcon />
      {{ isVegan ? 'Да' : 'Нет' }}
      <TimeIcon />
      {{ time }}
    </div>
    Ингредиенты:
    {{ ingredients }}
    <button
        @click="removeRecipe(index)"
        class="btn btn-light card-body__remove-button"
    >
      Удалить рецепт
    </button>
  </div>
</template>

<script>
import TimeIcon from '../icons/TimeIcon.vue';
import VeganIcon from '../icons/VeganIcon.vue';

export default {
  name: 'RecipesItem',
  components: {
    TimeIcon,
    VeganIcon,
  },
  props: {
    recipeName: {
      type: String,
      required: true,
    },
    isVegan: {
      type: Boolean,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    removeRecipe(index) {
      this.$emit('remove-item', index);
    },
  },
};
</script>