<template>
  <div class="time-killer">
    <button
        type="button"
        class="btn btn-warning"
        @click="addTime"
    >
      Добавить время!
    </button>
    <TimeElement :times="times" @remove-time="removeTime" />
  </div>
</template>

<script>
import TimeElement from './TimeElement.vue';

export default {
  name: 'TimeKiller',
  components: {
    TimeElement
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
      this.times.splice(index, 1);
    }
  }
};
</script>
