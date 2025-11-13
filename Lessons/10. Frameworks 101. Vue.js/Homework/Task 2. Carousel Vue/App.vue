<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div
          v-for="(image, index) in images"
          :key="index"
          :class="['carousel-item', { active: index === currentIndex }]"
      >
        <img
            :src="image"
            class="d-block w-100"
        />
      </div>
    </div>
    <button
        class="carousel-control-prev"
        @click="prevSlide"
    >
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button
        class="carousel-control-next"
        @click="nextSlide"
    >
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      currentIndex: 0,
      images: [
        '/Lessons/10. Frameworks 101. Vue.js/Homework/Task 2. Carousel Vue/assets/carousel-1.jpg',
        '/Lessons/10. Frameworks 101. Vue.js/Homework/Task 2. Carousel Vue/assets/carousel-2.jpg',
        '/Lessons/10. Frameworks 101. Vue.js/Homework/Task 2. Carousel Vue/assets/carousel-3.jpg',
      ]
    };
  },
  methods: {
    nextSlide() {
      if (this.currentIndex === this.images.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
    prevSlide() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.images.length - 1;
      } else {
        this.currentIndex--;
      }
    }
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
}

.carousel-item {
  display: none;
}

.carousel-item.active {
  display: block;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: black;
  color: white;
  border: none;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
}

.carousel-control-prev {
  left: 10px;
}

.carousel-control-next {
  right: 10px;
}

.d-block {
  display: block;
}

.w-100 {
  width: 100%;
}
</style>