<template>
  <!--Начало-->
  <div class="carousel">
    <div class="carousel-inner">
      <div
          class="carousel-item"
          v-for="(img, index) in images"
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
  <!--Конец-->
</template>

<script>
import carousel1 from './assets/carousel-1.jpg'
import carousel2 from './assets/carousel-2.jpg'
import carousel3 from './assets/carousel-3.jpg'

export default {
  name: "Carousel",
  data() {
    return {
      current: 0,
      images: [carousel1, carousel2, carousel3]
    };
  },
  methods: {
    next() {
      this.current = (this.current + 1) % this.images.length;
    },
    prev() {
      this.current = (this.current - 1 + this.images.length) % this.images.length;
    }
  }
};
</script>