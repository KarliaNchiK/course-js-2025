<template>
    <div class="carousel">
        <div class="carousel-inner">
            <div
                v-for="image in activePhoto"
                :key="image"
                class="carousel-item"
            >
                <img
                    :src="image.src"
                    class="d-block w-100"
                >
            </div>
        </div>
        <button
            @click="next"
            class="carousel-control-prev"
        >
            <span class="carousel-control-prev-icon" />
        </button>
        <button
            @click="previous"
            class="carousel-control-next"
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
            default: () => {},
            isActive: false,
        },
    },
    data() {
        return {
            activePhotoIndex: 0,
        };
    },
    computed: {
        activePhoto() {
            return this.images[this.activePhotoIndex];
        },
    },
    methods: {
        next() {
            this.activePhotoIndex += 1;
        },
        previous() {
            this.activePhotoIndex -= 1;
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
