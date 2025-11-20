<template>
    <div class="card-container">
        <div
            v-for="card in cards"
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
                        @click="increment(card.id)"
                        class="btn btn-primary button-plus"
                    >
                        +
                    </button>
                    <button
                        @click="decrement(card.id)"
                        class="btn btn-primary button-minus"
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
    name: 'App',
    props: {
        cards: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {

        };
    },
    methods: {
        increment(index) {
            this.cards[index].number += 1;
        },
        decrement(index) {
            if (this.cards[index].number > 0) {
                this.cards[index].number -= 1;
            }
        },
    },
};
</script>
