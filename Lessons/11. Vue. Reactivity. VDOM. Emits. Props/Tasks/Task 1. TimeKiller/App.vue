<template>
  <div class="time-killer">
    <!--Начало-->
    <button
        type="button"
        class="btn btn-warning"
        @click="addTime"
    >
      Добавить время!
    </button>
    <div class="times-container">
      <TimeElement
        v-for="(time, index) in times"
        :key="index"
        :time="time"
        @remove="removeTime(index)"
        />
    </div>
  </div>
    <!--Конец-->
</template>

<script>
import TimeElement from "./TimeElement.vue";

export default {
  name: 'TimeKiller',
  components: {TimeElement},
  // Начало
  data() {
    return {
      times: []
    };
  },

  methods: {
    addTime() {
      this.times.push(new Date());
    },

    removeTime(index) {
      this.times.splice(index, 1);
    }
  }
  // Конец
};
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