<template>
    <div class="time-killer">
        <button type="button" class="btn btn-warning" @click="addTime">
            Добавить время!
        </button>
        <div class="times-container">
            <TimeElement :times="times" @remove="removeTime" />
        </div>
    </div>
</template>

<script>
import TimeElement from './TimeElement.vue';
import { ref } from 'vue';
export default {
    name: 'TimeKiller',
    components: {
        TimeElement
    },
    setup() {
        const times = ref([]);

        const addTime = () => {
            times.value.push(new Date().toString());
        };

        const removeTime = (index) => {
            times.value.splice(index, 1);
        };

        return {
            times,
            addTime,
            removeTime
        };
    }
};
</script>

<style>
.time-killer {
    margin: 100px;
    display: flex;
}

.time-killer>button {
    margin-right: 20px;
    align-self: baseline;
}
</style>
