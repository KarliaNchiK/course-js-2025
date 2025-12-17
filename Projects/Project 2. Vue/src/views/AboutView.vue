<template>
  <div class="about">
    <h1>О проекте</h1>

    <div class="card">
      <h2>Про проект</h2>
      <p>Приложение на Vue, демонстрирующее функции:</p>
      <div class="features">
        <div
            class="feature"
            v-for="feature in features"
            :key="feature.id">
          <span class="feature-name">{{feature.name}}:</span>
          <span class="feature-description">{{feature.description}}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      features: [
        { id: 1, name: "Компоненты", description: " ProductCard, AppHeader, AppFooter"},
        { id: 2, name: "Маршрутизация", description: " Vue Router с 3 страницами"},
        { id: 3, name: "Директивы", description: " v-for, v-if, v-model, :class"},
        { id: 4, name: "Состояние", description: " Корзина через provide/inject"},
        { id: 5, name: "Вычисления", description: " Computed свойства для фильтрации и итогов"},
      ]
    }
  }
}
</script>

<style scoped>
.card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  max-width: 600px;
}

h2 {
  color: #42b983;
  margin: 20px 0 10px 0;
}

</style>