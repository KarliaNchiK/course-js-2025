<template>
    <div class="card-container">
        <div
            class="card"
            v-for="item in cards"
            :key="item.id"
        >
            <img :src="item.src" class="card-img-top"/>

            <div class="card-body">
                <h5 class="card-title">
                    {{ item.head }}
                </h5>

                <h4 class="card-title">
                    {{ item.price }}
                </h4>

                <p class="card-text">
                    {{ item.description }}
                </p>

                <div class="card__buttons">
                    <button
                        class="btn btn-primary button-plus"
                        @click="increase(item)"
                    >
                        +
                    </button>

                    <button
                        class="btn btn-primary button-minus"
                        @click="decrease(item)"
                    >
                        -
                    </button>

                    <div>{{ item.number }} шт.</div>
                </div>

                <div
                    v-if="item.number > item.max"
                    class="card__alert alert alert-danger"
                >
                    Данного товара доступно только {{ item.max }} шт.
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
            required: true
        }
    },

    methods: {
        increase(item) {
            item.number++;
        },

        decrease(item) {
            if (item.number > 0) {
                item.number--;
            }
        }
    }
};
</script>

<style scoped>
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    width: 300px;
}

.card__buttons {
    display: flex;
    align-items: center;
    gap: 10px;
}

.card__alert {
    margin-top: 10px;
}
</style>
