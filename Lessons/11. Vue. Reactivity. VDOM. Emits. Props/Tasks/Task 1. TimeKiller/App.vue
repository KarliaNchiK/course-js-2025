<template>
  <div class="time-killer">
    <button
        type="button"
        class="btn btn-warning"
        @click="addTime"
    >
      Добавить время!
    </button>
    <TimeElement
        :times="times"
        @remove-time="removeTime"
    />
  </div>
</template>

<script>
import TimeElement from './TimeElement.vue'

export default {
  name: 'TimeKiller',
  components: {
    TimeElement
  },
  data() {
    return {
      times: []
    }
  },
  methods: {
    addTime() {
      const currentTime = new Date().toString();
      this.times.push(currentTime);
    },
    removeTime(index) {
      this.times.splice(index, 1);
    }
  }
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