<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div v-for="(image, index) in images"
          :key="index"
          class="carousel-item"
      >
        <img :src="image"
            class="d-block w-100"
             :class="{ active: index === currentIndex }"
        >
      </div>
    </div>
    <button @click="prevImage" class="carousel-control-prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button @click="nextImage" class="carousel-control-next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
</template>
<!-- ПРОБЛЕМА С ТЕСТАМИ -->
<script>
export default {
  name: 'Carousel',
  props: {
      images: {
        type: Array,
        required: true
      }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    prevImage() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.images.length - 1;
      } else {
        this.currentIndex--;
      }
    },

    nextImage() {
      if (this.currentIndex === this.images.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    }


  }
};
</script>
