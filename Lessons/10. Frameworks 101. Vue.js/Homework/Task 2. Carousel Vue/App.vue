
<template>
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

<script>
export default {
    name: 'Carousel',

    props: {
      images: {
        type: Array,
        default: () => []
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

