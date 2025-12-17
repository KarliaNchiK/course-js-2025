<template>
  <div class="home">
    <h1>Продукты</h1>

    <div class="filter">
      <label for="category">Фильтр по категории:</label>
      <select id="category" v-model="selectedCategory" class="category-select">
        <option value="">
          Все
        </option>
        <option value="овощи">
          Овощи
        </option>
        <option value="фрукты">
          Фрукты
        </option>
        <option value="молочные">
          Молочные
        </option>
      </select>
    </div>

    <div class="products">
      <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart(product)"
      />
    </div>

    <div
        v-if="filteredProducts.length === 0"
        class="empty"
    >
      Нет продуктов по выбранной категории
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';

export default {
  name: 'HomeView',
  components: { ProductCard },
  inject: ['addToCart'], // Получаем функцию добавления в корзину от родителя
  data() {
    return {
      selectedCategory: '',
      products: [
        {
          id: 1, name: 'Яблоки', price: 100, category: 'фрукты', image: '🍎', inStock: true,
        },
        {
          id: 2, name: 'Морковь', price: 50, category: 'овощи', image: '🥕', inStock: true,
        },
        {
          id: 3, name: 'Молоко', price: 80, category: 'молочные', image: '🥛', inStock: true,
        },
        {
          id: 4, name: 'Помидоры', price: 120, category: 'овощи', image: '🍅', inStock: false,
        },
        {
          id: 5, name: 'Бананы', price: 70, category: 'фрукты', image: '🍌', inStock: true,
        },
        {
          id: 6, name: 'Сыр', price: 200, category: 'молочные', image: '🧀', inStock: true,
        },
      ],
    };
  },
  computed: {
    filteredProducts() {
      if (!this.selectedCategory) {
        return this.products;
      }
      return this.products.filter(p => p.category === this.selectedCategory);
    },
  },
};
</script>

<style scoped>
h1 {
  color: #333;
  margin-bottom: 20px;
}

.filter {
  margin-bottom: 20px;
}

select {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 200px;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.empty {
  text-align: center;
  padding: 40px;
  color: #666;
  background: #f9f9f9;
  border-radius: 8px;
  margin-top: 20px;
}
</style>