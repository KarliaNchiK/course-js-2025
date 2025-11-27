<template>
  <Carousel :images="images" />
</template>

<script>
import Carousel from './Carousel.vue'

export default {
  name: 'App',
  components: { Carousel },
  data() {
    return {
      images: [
        '/Lessons/10. Frameworks 101. Vue.js/Homework/Task 2. Carousel Vue/assets/carousel-1.jpg',
        '/Lessons/10. Frameworks 101. Vue.js/Homework/Task 2. Carousel Vue/assets/carousel-2.jpg',
        '/Lessons/10. Frameworks 101. Vue.js/Homework/Task 2. Carousel Vue/assets/carousel-3.jpg',
      ]
    }
  }
}
</script>