<template>
    <div class="times-container">
        <div
            v-for="(time, idx) in times"
            :key="idx"
            class="times-container__item"
            @mouseover="removeTime(idx)"
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
            required: true,
        },
    },
    methods: {
        removeTime(index) {
            this.$emit('remove-time', index);
        },
    },
};
</script>

<style scoped>
.times-container__item {
  padding: 10px;
  margin-bottom: 10px;
  background: #fffdb1;
  border: 1px solid #e1dfa2;
  border-radius: 4px;
  cursor: pointer;
}
</style>
