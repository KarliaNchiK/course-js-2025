<template>
  <div id="app">
    <AppHeader />
    <main class="main">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';

export default {
  name: 'App',
  components: {  // Регистрируем дочерние компоненты
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      cart: []
    };
  },
  provide() { // Провайдим данные для дочерних компонентов (глобальное состояние)
    return {
      cart: this.cart,
      addToCart: this.addToCart,
      removeFromCart: this.removeFromCart,
      updateQuantity: this.updateQuantity
    };
  },
  methods: {
    addToCart(product) {
      const item = this.cart.find(p => p.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        this.cart.push({
          ...product,
          quantity: 1
        });
      }
    },
    removeFromCart(productId) {
      const index = this.cart.findIndex(item => item.id === productId);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
    updateQuantity(productId, quantity) {
      const item = this.cart.find(p => p.id === productId);
      if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
          this.removeFromCart(productId);
        }
      }
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.main {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}
</style>