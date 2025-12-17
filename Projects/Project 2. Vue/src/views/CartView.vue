<template>
  <div>
    <h1>Корзина</h1>

    <div v-if="cart.length === 0" class="empty">
      Корзина пуста
      <RouterLink to="/">Вернуться к покупкам</RouterLink>
    </div>

    <div v-else>
      <div class="items">
        <div v-for="item in cart" :key="item.id" class="item">
          <div class="item-image">{{ item.image }}</div>
          <div class="item-info">
            <h3>{{ item.name }}</h3>
            <p>{{ item.price }} ₽ × {{ item.quantity }} = {{ item.price * item.quantity }} ₽</p>
          </div>
          <div class="item-controls">
            <button @click="decreaseQuantity(item)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(item)">+</button>
            <button @click="removeItem(item.id)" class="remove">✕</button>
          </div>
        </div>
      </div>

      <div class="summary">
        <h2>Итого: {{ totalPrice }} ₽</h2>
        <div class="actions">
          <button @click="clearCart" class="secondary">Очистить</button>
          <button @click="checkout" class="primary">Оформить заказ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartView',
  inject: ['cart', 'removeFromCart', 'updateQuantity'], // Получаем данные и функции от родителя
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
  },
  methods: {
    increaseQuantity(item) {
      this.updateQuantity(item.id, item.quantity + 1);
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        this.updateQuantity(item.id, item.quantity - 1);
      } else {
        this.removeItem(item.id);
      }
    },
    removeItem(productId) {
      this.removeFromCart(productId);
    },
    clearCart() {
      if (confirm('Очистить корзину?')) {
        this.cart.splice(0, this.cart.length);
      }
    },
    checkout() {
      if (this.cart.length === 0) return;
      alert(`Заказ оформлен на ${this.totalPrice} ₽!`);
      this.clearCart();
    },
  },
};
</script>

<style scoped>
.items {
  margin-bottom: 30px;
}

.item {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  background: white;
}

.item-image {
  font-size: 40px;
  margin-right: 20px;
}

.item-info {
  flex: 1;
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.item-controls button {
  padding: 5px 10px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
}

.remove {
  background: #ff6b6b !important;
  color: white;
  border: none !important;
}

.summary {
  border-top: 2px solid #42b983;
  padding-top: 20px;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.actions button {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.primary {
  background: #42b983;
  color: white;
  flex: 1;
}

.secondary {
  background: #f1f1f1;
  color: #333;
}

.empty {
  text-align: center;
  padding: 40px;
  background: #f9f9f9;
  border-radius: 8px;
}

.empty a {
  display: block;
  margin-top: 20px;
  color: #42b983;
}
</style>