<template>
  <div class="card-container">
    <div
        class="card"
        v-for="card in displayCards"
        :key="card.id"
    >
      <img :src="card.src" class="card-img-top" />

      <div class="card-body">
        <h5 class="card-title">
          {{ card.head }}
        </h5>

        <h4 class="card-title">
          {{ card.price }}
        </h4>

        <p class="card-text">
          {{ card.description }}
        </p>

        <div class="card__buttons">
          <button
              class="btn btn-primary button-plus"
              @click="increment(card.id)"
          >
            +
          </button>

          <button
              class="btn btn-primary button-minus"
              @click="decrement(card.id)"
          >
            -
          </button>

          <div>{{ getCardCount(card.id) }} шт.</div>
        </div>

        <div
            v-if="getCardCount(card.id) > card.max"
            class="card__alert alert alert-danger"
        >
          Данного товара доступно только {{ card.max }} шт.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",

  props: {
    cards: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      cardCounters: {}
    };
  },

  computed: {
    displayCards() {
      return this.cards.length > 0 ? this.cards : this.getDefaultCards();
    }
  },

  methods: {
    getDefaultCards() {
      return [
        {
          id: 0,
          src: '/Lessons/10. Frameworks 101. Vue.js/Homework/Task 1. Cards/assets/iphone10.jpg',
          description: 'Packed with Innovative Features Including a Super Retina Display, TrueDepth Camera System, Face ID and A11 Bionic Chip with Neural Engine',
          head: 'Iphone X 64GB',
          price: '800$',
          max: 4,
        },
        {
          id: 1,
          src: '/Lessons/10. Frameworks 101. Vue.js/Homework/Task 1. Cards/assets/galaxys21.jpg',
          description: 'Introducing Galaxy S21 Ultra 5G. Designed with a unique contour-cut camera to create a revolution in photography — letting you capture cinematic 8K video and snap epic stills, all in one go.',
          head: 'Samsung Galaxy S21 128GB',
          price: '1000$',
          max: 10,
        },
        {
          id: 2,
          src: '/Lessons/10. Frameworks 101. Vue.js/Homework/Task 1. Cards/assets/nokia2600.jpg',
          description: 'Give me back my 2007',
          head: 'Nokia 2600',
          price: 'Priceless',
          max: 1,
        },
      ];
    },

    getCardCount(cardId) {
      return this.cardCounters[cardId] || 0;
    },

    increment(cardId) {
      if (!this.cardCounters[cardId]) {
        this.cardCounters[cardId] = 0;
      }
      this.cardCounters[cardId]++;
      this.cardCounters = { ...this.cardCounters };
    },

    decrement(cardId) {
      const currentCount = this.cardCounters[cardId] || 0;
      if (currentCount > 0) {
        this.cardCounters[cardId] = currentCount - 1;
        this.cardCounters = { ...this.cardCounters };
      }
    }
  }
};
</script>