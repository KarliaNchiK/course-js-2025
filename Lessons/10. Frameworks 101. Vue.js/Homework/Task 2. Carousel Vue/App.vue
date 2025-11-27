<template>
    <div class="carousel">
        <div class="carousel-inner">
            <div v-for="(image, index) in images" :key="index" class="carousel-item"
                :class="{ active: index === currentIndex }">
                <img :src="image" class="d-block w-100" />
            </div>
        </div>
        <button class="carousel-control-prev" @click="goToPrev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" @click="goToNext">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    images: {
        type: Array,
        required: true,
    },
});



const currentIndex = ref(0);

const goToNext = () => {
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const goToPrev = () => {
    currentIndex.value =
        (currentIndex.value - 1 + props.images.length) % props.images.length - 1 + 1;
};
</script>
