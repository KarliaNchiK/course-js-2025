<template>
    <div class="time-killer">
        <!--Начало-->
      <button
        @click="addBlock"
        class="btn btn-warning">
        Добавить время!
      </button>
      <div class="times-container">
        <TimeElement
            :blocks="blocks"
            @remove-block="removeBlock"/>
      </div>
        <!--Конец-->
    </div>
</template>

<script>
import TimeElement from "./TimeElement.vue";

export default {
  name: 'TimeKiller',
    // Начало
  components: {TimeElement},
  data() {
    return {
      blocks:[]
    }
  },
  methods: {
    addBlock() {
      this.blocks.push({
        timestamp: new Date()
      })
    },
    removeBlock(index) {
      this.blocks.splice(index, 1)
    }

  }

};
// Конец
</script>

<style>
.time-killer {
    margin: 100px;
    display: flex;
}

.time-killer > button {
    margin-right: 20px;
    align-self: baseline;
}

</style>
