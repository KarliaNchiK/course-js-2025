<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div
          class="carousel-item"
          v-for="(img, index) in displayImages"
          :key="index"
          :class="{ active: index === current }"
          :style="{ display: index === current ? 'block' : 'none' }"
      >
        <img
            class="d-block w-100"
            :src="img"
        />
      </div>
    </div>

    <button class="carousel-control-prev" @click="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>

    <button class="carousel-control-next" @click="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
</template>

<script>
import carousel1 from './assets/carousel-1.jpg'
import carousel2 from './assets/carousel-2.jpg'
import carousel3 from './assets/carousel-3.jpg'

export default {
  name: "Carousel",
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      current: 0
    };
  },
  computed: {
    displayImages() {
      return this.images.length > 0 ? this.images : [carousel1, carousel2, carousel3];
    }
  },
  methods: {
    next() {
      this.current = (this.current + 1) % this.displayImages.length;
    },
    prev() {
      this.current = (this.current - 1 + this.displayImages.length) % this.displayImages.length;
    }
  }
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