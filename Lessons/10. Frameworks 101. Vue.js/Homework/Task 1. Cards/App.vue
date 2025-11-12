<template>
    <div class="card-container">
        <div
            v-for="card in cardStates"
            :key="card.id"
            class="card"
        >
            <img
                :src="card.src"
                class="card-img-top"
            >
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
                        @click="increment(card)"
                    >
                        +
                    </button>
                    <button
                        class="btn btn-primary button-minus"
                        @click="decrement(card)"
                    >
                        -
                    </button>
                    <div>{{ card.number }} шт.</div>
                </div>
                <div
                    v-if="card.number > card.max"
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
    name: 'Cards',
    props: {
        cards: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            cardStates: this.cards.map(card => ({ ...card })),
        };
    },
    methods: {
        increment(card) {
            // eslint-disable-next-line no-plusplus
            card.number++;
        },
        decrement(card) {
            if (card.number > 0) {
                // eslint-disable-next-line no-plusplus
                card.number--;
            }
        },
    },
};
</script>
