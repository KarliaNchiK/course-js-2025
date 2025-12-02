<template>
    <div class="carousel">
        <div class="carousel-inner">
            <div
                v-for="(img, idx) in images"
                :key="idx"
                class="carousel-item"
                :class="{ active: idx === current }"
            >
                <img
                    :src="img"
                    class="d-block w-100"
                >
            </div>
        </div>
        <button
            class="carousel-control-prev"
            @click="prev"
        >
            <span class="carousel-control-prev-icon" />
        </button>
        <button
            class="carousel-control-next"
            @click="next"
        >
            <span class="carousel-control-next-icon" />
        </button>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    props: {
        images: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            current: 0,
        };
    },
    methods: {
        next() {
            this.current = (this.current + 1) % this.images.length;
        },
        prev() {
            this.current = (this.current - 1 + this.images.length) % this.images.length;
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
