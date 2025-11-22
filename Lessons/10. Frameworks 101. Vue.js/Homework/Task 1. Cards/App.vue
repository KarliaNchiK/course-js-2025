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
  props: {
    cards: {
      type: Array,
      required: true
    }
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
  data() {
    return {
    };
  }

};
</script>