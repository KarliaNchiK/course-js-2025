<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div
        v-for="(image, index) in imagesSafe"
        :key="index"
        :class="['carousel-item', { active: index === currentIndex }]"
      >
        <img
          :src="image"
          class="d-block w-100"
        />
      </div>
    </div>
    <button class="carousel-control-prev" @click="prevSlide">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" @click="nextSlide">
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
      default: () => []
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  computed: {
    imagesSafe() {
      return this.images.length
        ? this.images
        : [
            '/Lessons/10. Frameworks 101. Vue.js/Homework/Task 2. Carousel Vue/assets/carousel-1.jpg',
            '/Lessons/10. Frameworks 101. Vue.js/Homework/Task 2. Carousel Vue/assets/carousel-2.jpg',
            '/Lessons/10. Frameworks 101. Vue.js/Homework/Task 2. Carousel Vue/assets/carousel-3.jpg'
          ];
    }
  },
  methods: {
    nextSlide() {
      this.currentIndex =
        this.currentIndex === this.imagesSafe.length - 1
          ? 0
          : this.currentIndex + 1;
    },
    prevSlide() {
      this.currentIndex =
        this.currentIndex === 0
          ? this.imagesSafe.length - 1
          : this.currentIndex - 1;
    }
  }
}
</script>