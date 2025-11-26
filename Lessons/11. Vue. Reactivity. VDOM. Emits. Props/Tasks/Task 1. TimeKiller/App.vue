<template>
    <div class="time-killer">
        <button
            @click="addTimeDiv"
            type="button"
            class="btn btn-warning"
        >
            Добавить время!
        </button>
        <div class="times-container">
            <TimeElement
                v-for="(time, index) in timeItems"
                @mouseover="removeDate(index)"
                :key="index"
                :time="time"
                class="times-container__item"
            />
        </div>
    </div>
</template>

<script>
import TimeElement from './TimeElement.vue';

export default {
    name: 'App',
    components: {
        TimeElement,
    },
    data() {
        return {
            timeItems: [],
        };
    },
    methods: {
        addTimeDiv() {
            const currentTime = new Date().toString();
            this.timeItems.push(currentTime);
        },
        removeDate(index) {
          this.timeItems.splice(index, 1);
        },
    },
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

.times-container__item {
  padding: 10px;
  margin-bottom: 10px;
  background: #fffdb1;
  border: 1px solid #e1dfa2;
  border-radius: 4px;
}
</style>
