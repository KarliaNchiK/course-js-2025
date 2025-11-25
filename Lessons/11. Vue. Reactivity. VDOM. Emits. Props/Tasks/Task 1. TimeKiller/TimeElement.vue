<template>
  <div class="times-container">
    <div
        v-for="(time, index) in times"
        :key="time + index"
        class="times-container__item"
        @mouseover="$emit('remove-time', index)"
    >
      {{ time }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeElement',
  props: {
    times: {
      type: Array,
      required: true
    }
  }
};
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
