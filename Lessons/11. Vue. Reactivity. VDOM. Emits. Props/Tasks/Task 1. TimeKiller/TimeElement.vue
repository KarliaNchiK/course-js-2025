<template>
  <div class="times-container__item"
       v-for="(block, index) in blocks"
       :key="index"
       @mouseover="removeBlock(index)">
    {{block.timestamp}}
  </div>

</template>

<script>
export default {
  name: 'TimeElement',
  emits: ["remove-block"],
  props: {
    blocks: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeBlock(index) {
      this.$emit("remove-block", index);
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