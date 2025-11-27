<template>
  <div class="time-killer">
    <!--Начало-->
    <button type="button" class="btn btn-warning" @click="addTime">
      Добавить время!
    </button>
    <TimeElement
        :times="times"
        @remove-time="removeTime"
    />
    <!--Конец-->
  </div>
</template>

<script>
import TimeElement from './TimeElement.vue';
export default {
  name: 'TimeKiller',
  // Начало
  components: {
    TimeElement,
  },
  data() {
    return {
      times: []
    };
  },
  methods: {
    addTime() {
      this.times.push(new Date().toString());
    },
    removeTime(index) {
      this.times.splice(index,1)
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
