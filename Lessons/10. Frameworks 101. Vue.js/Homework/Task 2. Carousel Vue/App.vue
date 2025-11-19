<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div
          v-for="(img,index) in images"
          :key="index"
          class="carousel-item"
          :class="{ active: index === current }"
      >
        <img
            :src="img"
            class="d-block w-100"
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
        current: 0,
      };
    },

    methods: {
      next() {
        this.current = this.current === this.images.length - 1 ? 0 : this.current +1;
      },
      prev() {
        this.current = this.current === 0 ? this.images.length -1 : this.current -1;
      },
    },
};
</script>
