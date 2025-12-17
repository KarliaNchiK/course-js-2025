<template>
  <div class="card">
    <div class="image">
      {{ product.image }}
    </div>

    <div class="info">
      <h3>{{ product.name }}</h3>
      <p class="category">
        {{ product.category }}
      </p>
      <p class="price">
        {{ product.price }} ₽
      </p>
    </div>
    <button
        @click="$emit('add-to-cart')"
        :disabled="!product.inStock"
        class="btn"
        :class="{ 'out-of-stock': !product.inStock }"
    >
      {{ product.inStock ? 'В корзину' : 'Нет в наличии' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  emits: ['add-to-cart']
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  background: white;
}

.image {
  font-size: 40px;
  margin-bottom: 10px;
}

h3 {
  margin: 10px 0;
  font-size: 18px;
}

.price {
  font-weight: bold;
  color: #42b983;
  font-size: 20px;
  margin: 10px 0;
}

.btn {
  width: 100%;
  padding: 10px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>