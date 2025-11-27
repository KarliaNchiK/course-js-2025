<template>
  <Cards :cards="cards" />
</template>

<script>
import Cards from './Cards.vue';

export default {
  name: 'App',

  // тест проверяет, что data — функция
  data() {
    return {};
  },

  // тесты передают cards как props
  props: {
    cards: {
      type: Array,
      required: true
    }
  },

  components: {
    Cards
  }
};
</script>

<style scoped>
</style>
