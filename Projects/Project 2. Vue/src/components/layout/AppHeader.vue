<template>
  <header>
    <RouterLink to="/" class="logo">
      Магазин
    </RouterLink>
    <nav>
      <RouterLink to="/">
        Главная
      </RouterLink>
      <RouterLink to="/cart">
        Корзина ({{ cartCount }})
      </RouterLink>
      <RouterLink to="/about">
        О проекте
      </RouterLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  inject: ['cart'], // Получаем корзину из родительского компонента
  computed: {
    cartCount() { // Вычисляемые свойства
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    },
  },
};
</script>

<style scoped>
header {
  background: #42b983;
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

nav {
  display: flex;
  gap: 15px;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
}

nav a:hover {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}
</style>