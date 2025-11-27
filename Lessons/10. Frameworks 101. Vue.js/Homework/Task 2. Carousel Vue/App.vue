<template>
    <div class="carousel">
        <div class="carousel-inner">
            <div
                v-for="(image, index) in images"
                :key="index"
                class="carousel-item"
                :class="{ active: index === activeIndex }"
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
            default: () => [],
        },
    },
    data() {
        return {
            activeIndex: 0,
        };
    },
    methods: {
        nextSlide() {
            if (this.images.length === 0) {
                return;
            }

            this.activeIndex += 1;
            if (this.activeIndex > this.images.length - 1) {
                this.activeIndex = 0;
            }
        },

        prevSlide() {
            if (this.images.length === 0) {
                return;
            }

            this.activeIndex -= 1;
            if (this.activeIndex < 0) {
                this.activeIndex = this.images.length - 1;
            }
        },
    },
};
</script>

<style>
.carousel {
    background: #f6f6f6;
    display: block;
    padding: 30px;
    margin: 40px;
    font-family: Verdana, Tahoma, sans-serif;
    border-radius: 10px;
    align-items: center;
    width: 1000px;
}

.carousel-item {
    min-height: 325px;
}

.carousel-item.active {
    display: flex;
}
</style>
