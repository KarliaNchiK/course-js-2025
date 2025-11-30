<template>
  <div class="card-container" :cards="cards">
    <div class="card" v-for="card in cards" :key="card.id">
      <img :src="card.src" class="card-img-top" />

      <div class="card-body">
        <h5 class="card-title">
          {{card.head}}
        </h5>
        <h4 class="card-title">
          {{ card.price }}
        </h4>
        <p class="card-text">
          {{ card.description}}
        </p>

        <div class="card__buttons">
          <button class="btn btn-primary button-plus" @click="plus(card)">
            +
          </button>
          <button class="btn btn-primary button-minus" @click="minus(card)">
            -
          </button>
          <div>{{card.number}} шт.</div>
        </div>

        <div v-if="card.number === card.max" class="card__alert alert alert-danger"
        >
          Данного товара доступно только {{ card.max }} шт.
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',

  props: {
    cards: {
      type: Array,
      required: true
    }
  },

  data() {
    return {};
  },

  methods: {
    plus(card) {
      if(card.number < card.max) {
        card.number++;
      }
    },

    minus(card) {
      if (card.number > 0) {
        card.number--;
      }
    },
  },

};
</script>