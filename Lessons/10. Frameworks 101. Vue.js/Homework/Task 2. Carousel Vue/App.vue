<template>
    <div class="carousel">
        <div class="carousel-inner">
            <div
                v-for="(image, index) in images"
                :key="index"
                class="carousel-item"
                :class="{ active: currentIndex === index }"
            >
                <img
                    class="d-block w-100"
                    :src="image"
                >
            </div>
        </div>
        <button
            class="carousel-control-prev"
            @click="prevSlide"
        >
            <span class="carousel-control-prev-icon" />
        </button>
        <button
            class="carousel-control-next"
            @click="nextSlide"
        >
            <span class="carousel-control-next-icon" />
        </button>
    </div>
</template>

<script>
export default {
    name: 'App',
    props: {
        images: {
            type: Array,
        },
    },
    data() {
        return {
            currentIndex: 0,
        };
    },
    methods: {
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
    },
};
</script>
