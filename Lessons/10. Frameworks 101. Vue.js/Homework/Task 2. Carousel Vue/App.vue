<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div
          v-for="(image, index) in images"
          :key="index"
          class="carousel-item"
          :class="{ active: index === currentIndex }"
      >
        <img
            :src="image"
            class="d-block w-100"
        />
      </div>
    </div>

    <button
        class="carousel-control-prev"
        @click="prev"
    >
      <span class="carousel-control-prev-icon"></span>
    </button>

    <button
        class="carousel-control-next"
        @click="next"
    >
      <span class="carousel-control-next-icon"></span>
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
      currentIndex: 0,
    };
  },

  methods: {
    next() {
      this.currentIndex =
          (this.currentIndex + 1) % this.images.length;
    },

    prev() {
      this.currentIndex =
          (this.currentIndex - 1 + this.images.length) %
          this.images.length;
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
