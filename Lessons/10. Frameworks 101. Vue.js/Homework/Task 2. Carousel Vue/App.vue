
<template>
<<<<<<< HEAD
  <!--Начало-->
  <div class="carousel">
    <div class="carousel-inner">
      <div
          v-for="(src, index) in images"
          :key="index"
          class="carousel-item"
          :class="{ active: index === current }"
      >
        <img
            class="d-block w-100"
            :src="src"
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
  <!--Конец-->
</template>
=======
  <div class="carousel">
    <div class="carousel-inner">
      <div v-for="(image, index) in images"
           :key="index"
           class="carousel-item"
           :class="{ active: index === currentIndex }"
      >
        <img :src="image"
             class="d-block w-100"
>>>>>>> origin/main

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
<<<<<<< HEAD
    name: 'Carousel',

    props: {
      images: {
        type: Array,
        default: () => [
          '/Lessons/10. Frameworks 101. Vue.js/Homework/Task 2. Carousel Vue/assets/carousel-1.jpg',
          '/Lessons/10. Frameworks 101. Vue.js/Homework/Task 2. Carousel Vue/assets/carousel-2.jpg',
          '/Lessons/10. Frameworks 101. Vue.js/Homework/Task 2. Carousel Vue/assets/carousel-3.jpg'
        ],
      },
    },

    data() {
      return {
        current: 0,
      };
    },

    methods: {
      next() {
        if (!this.images || this.images.length === 0) return;
        this.current = this.current === this.images.length - 1 ? 0 : this.current +1;
      },
      prev() {
        if (!this.images || this.images.length === 0) return;
        this.current = this.current === 0 ? this.images.length -1 : this.current -1;
      },
    },
};
</script>


<style></style>

=======
  name: 'Carousel',
  props: {
    images: {
      type: Array,
      required: true,
      default: () => ['/Lessons/10. Frameworks 101. Vue.js/Homework/Task 2. Carousel Vue/assets/carousel-1.jpg',
        '/Lessons/10. Frameworks 101. Vue.js/Homework/Task 2. Carousel Vue/assets/carousel-2.jpg',
        '/Lessons/10. Frameworks 101. Vue.js/Homework/Task 2. Carousel Vue/assets/carousel-3.jpg']
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
>>>>>>> origin/main
