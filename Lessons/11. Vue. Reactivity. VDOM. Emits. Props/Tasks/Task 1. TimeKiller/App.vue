<template>
    <div class="time-killer">
        <button 
        type="button"
        class="btn btn-warning"
        @click="addTime">
            Добавить время!
        </button>
        <TimeElement :times="times" @remove-time="removeTime"/>
    </div>
</template>

<script>
import { ref } from 'vue';
import TimeElement from './TimeElement.vue';
export default {
    name: 'TimeKiller',
    components: {
        TimeElement
    },
    setup() {
        const times = ref([]);
        
        const addTime = () => {
            const currentDate = new Date().toString();
            times.value.push(currentDate);
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

.time-killer > button {
    margin-right: 20px;
    align-self: baseline;
}
</style>
