<template>
    <div class="time-killer">
        <button
            @click="addTime"
            type="button"
            class="btn btn-warning"
        >
            Добавить время!
        </button>
        <TimeElement
            :times="times"
            :on-remove="removeItem"
        />
    </div>
</template>

<script>
import TimeElement from './TimeElement.vue';
import { reactive } from 'vue';

export default {
    name: 'App',
    components: { TimeElement },
    // Используем reactive для создания реактивного объекта
    setup() {
        const state = reactive({
            times: [],
        });

        const addTime = () => {
            const date = new Date().toString();
            state.times.push(date);
        };

        const removeItem = (index) => {
            state.times.splice(index, 1);
        };

        return {
            times: state.times,
            addTime,
            removeItem,
        };
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
</style>