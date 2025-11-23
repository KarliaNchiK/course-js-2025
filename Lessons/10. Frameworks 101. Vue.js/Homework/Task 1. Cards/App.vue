<template>
  <div class="card-container">
    <div v-for="card in cards" class="card" :key="card.id" >
      <img :src="card.src" class="card-img-top"/>
      <div class="card-body">
        <h5 class="card-title">
          {{card.head}}
        </h5>
        <h4 class="card-title">
          {{card.price}}
        </h4>
        <p class="card-text">
          {{card.description}}
        </p>
        <div class="card__buttons">
          <button @click="addCard(card)" class="btn btn-primary button-plus">
            +
          </button>
          <button @click="removeCard(card)" class="btn btn-primary button-minus">
            -
          </button>
          <div>{{card.number}} шт.</div>
        </div>
        <div v-if="card.number >=  card.max" class="card__alert alert alert-danger">
          Данного товара доступно только {{card.max}} шт.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cards',
  data() {
    return {
      cards: [
        {
          id: 0,
          src: '/Lessons/10. Frameworks 101. Vue.js/Homework/Task 1. Cards/assets/iphone10.jpg',
          description: 'Packed with Innovative Features Including a Super Retina Display, TrueDepth Camera System, Face ID and A11 Bionic Chip with Neural Engine',
          head: 'Iphone X 64GB',
          price: '800$',
          number: 0,
          max: 4,
        },
        {
          id: 1,
          src: '/Lessons/10. Frameworks 101. Vue.js/Homework/Task 1. Cards/assets/galaxys21.jpg',
          description: 'Introducing Galaxy S21 Ultra 5G. Designed with a unique contour-cut camera to create a revolution in photography — letting you capture cinematic 8K video and snap epic stills, all in one go.',
          head: 'Samsung Galaxy S21 128GB',
          price: '1000$',
          number: 0,
          max: 10,
        },
        {
          id: 2,
          src: '/Lessons/10. Frameworks 101. Vue.js/Homework/Task 1. Cards/assets/nokia2600.jpg',
          description: 'Give me back my 2007',
          head: 'Nokia 2600',
          price: 'Priceless',
          number: 0,
          max: 1,
        },
      ],
    };
  },
  methods: {
    addCard(card) {
      if (card.number < card.max) {
        card.number++
      }
    },
    removeCard(card) {
      if (card.number > 0) {
        card.number--;
      }
    }
  },
};
</script>