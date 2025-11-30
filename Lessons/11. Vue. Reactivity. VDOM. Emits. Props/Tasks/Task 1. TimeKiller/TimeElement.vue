<template>
  <div
    class="times-container__item"
    @mouseover="remove"
    >
    {{time}}
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: Date,
      required: true
    }
  },

  emits: ['remove'],

  methods: {
    remove() {
      this.$emit('remove');
    }
  }
}
</script>

<style>
.times-container__item {
  padding: 10px;
  margin-bottom: 10px;
  background: #fffdb1;
  border: 1px solid #e1dfa2;
  border-radius: 4px;
}
</style>