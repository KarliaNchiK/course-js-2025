### State manager. Pinia

### 1. Введение в Pinia

**Что такое Pinia?**  
Pinia — это библиотека управления состоянием для `Vue 3`, которая заменяет `Vuex`. Она интегрируется с `Composition API`, упрощает синтаксис и поддерживает `TypeScript`.

**Почему Composition API в сторах?**
- **Гибкость:** Логика стора пишется как обычная функция, используя `ref`, `reactive` и другие хуки.
- **Читаемость:** Код ближе к стандартному `JavaScript`.
- **Повторное использование:** Легко выносить логику в хуки.

**Преимущества Pinia:**
- Нет разделения на действия и мутации.
- Полная поддержка `TypeScript`.
- Интуитивный `API`, схожий с `Composition API`.

**Аналогия:** `Pinia` с `Composition API` — это как умный органайзер, где всё организовано в одном месте и легко доступно.

---

### 2. Создание стора с Composition API

Pinia позволяет определять сторы с помощью `defineStore`, используя синтаксис `setup` для Composition API. Это даёт доступ к `ref`, `computed` и другим хукам Vue.

**Пример стора:**

```javascript
// stores/todos.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodosStore = defineStore('todos', () => {
  // Состояние
  const todos = ref([])
  const filter = ref('all') // all, done, pending

  // Действия
  const addTodo = (text) => {
    todos.value.push({ text, done: false })
  }
  const toggleTodo = (index) => {
    todos.value[index].done = !todos.value[index].done
  }
  const clearCompleted = () => {
    todos.value = todos.value.filter(todo => !todo.done)
  }

  // Геттеры
  const filteredTodos = computed(() => {
    if (filter.value === 'done') {
        return todos.value.filter(todo => todo.done);
    }
    if (filter.value === 'pending') {
        return todos.value.filter(todo => !todo.done);
    }

    return todos.value
  });

  const todoCount = computed(() => todos.value.length)

  return {
    todos,
    filter,
    addTodo,
    toggleTodo,
    clearCompleted,
    filteredTodos,
    todoCount,
  };
});
```

**Использование в компоненте:**

```html
<template>
  <input v-model="newTodo" @keyup.enter="add" placeholder="Добавить задачу" />
  <button @click="store.clearCompleted">Очистить завершённые</button>
  <select v-model="store.filter">
    <option value="all">Все</option>
    <option value="done">Завершённые</option>
    <option value="pending">Активные</option>
  </select>
  <ul>
    <li v-for="(todo, index) in store.filteredTodos" :key="index" @click="store.toggleTodo(index)">
      {{ todo.text }} {{ todo.done ? '✔' : '' }}
    </li>
  </ul>
  <p>Всего задач: {{ store.todoCount }}</p>
</template>

<script setup>
   import { ref } from 'vue'
   import { useTodosStore } from './stores/todos'

   const store = useTodosStore()
   const newTodo = ref('')

   const add = () => {
      if (newTodo.value) {
         store.addTodo(newTodo.value)
         newTodo.value = ''
      }
   }
</script>
```

**Интерактив:** Измените `store.filter` через консоль (`store.filter = 'done'`) и проверьте, как обновляется список задач.

**Аналогия:** Стор с `Composition API` — это как умный блокнот, где вы записываете задачи, а фильтры автоматически сортируют их.

---

### 3. Модульная структура и пространства имён

`Pinia` использует модульную структуру, где каждый стор — это отдельный модуль с уникальным идентификатором, заданным в `defineStore`.

**Пример второго стора:**

```javascript
// stores/user.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const name = ref('Гость')
  const isAuthenticated = ref(false)

  const login = (userName) => {
    name.value = userName
    isAuthenticated.value = true
  }
  const logout = () => {
    name.value = 'Гость'
    isAuthenticated.value = false
  }

  const greeting = computed(() => `Привет, ${name.value}!`)

  return { name, isAuthenticated, login, logout, greeting }
})
```

**Комбинирование сторов:**

```html
<template>
  <p>{{ userStore.greeting }}</p>
  <button @click="userStore.login('Алиса')">Войти</button>
  <button @click="userStore.logout">Выйти</button>
  <ul>
    <li v-for="(todo, index) in todosStore.filteredTodos" :key="index">
      {{ todo.text }}
    </li>
  </ul>
</template>

<script setup>
   import { useTodosStore } from './stores/todos'
   import { useUserStore } from './stores/user'

   const todosStore = useTodosStore()
   const userStore = useUserStore()
</script>
```

**Пространства имён:** Уникальный идентификатор (`'todos'`, `'user'`) предотвращает конфликты. Сторы автоматически разделены, но могут взаимодействовать через прямые вызовы.

**Аналогия:** Каждый стор — это отдельная папка в органайзере, где всё чётко разделено, но доступно для совместной работы.

---

### 4. Интеграция с v-model и TypeScript

**v-model с Pinia:**  
Используйте `computed` для двустороннего связывания.

**Пример:**

```html
<template>
  <input v-model="userName" placeholder="Введите имя" />
  <p>{{ store.greeting }}</p>
</template>

<script setup>
   import { computed } from 'vue'
   import { useUserStore } from './stores/user'

   const store = useUserStore()
   const userName = computed({
      get: () => store.name,
      set: (value) => store.$patch({ name: value })
   })
</script>
```

**TypeScript в сторе:**

```javascript
// stores/user.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface UserState {
  name: string
  isAuthenticated: boolean
}

export const useUserStore = defineStore('user', () => {
  const name = ref<string>('Гость')
  const isAuthenticated = ref<boolean>(false)

  const login = (userName: string) => {
    name.value = userName
    isAuthenticated.value = true
  }
  const logout = () => {
    name.value = 'Гость'
    isAuthenticated.value = false
  }

  const greeting = computed<string>(() => `Привет, ${name.value}!`)

  return { name, isAuthenticated, login, logout, greeting }
})
```

**Аналогия:** `v-model` с `Pinia` — это как пульт, который мгновенно синхронизирует данные между компонентом и стором.

---

### 5. Сохранение состояния с Pinia Persist

**pinia-plugin-persistedstate** сохраняет состояние в `localStorage`.

**Установка:**

```bash
npm install pinia-plugin-persistedstate
```

**Настройка:**

```javascript
// main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia).mount('#app')
```

**Пример:**

```javascript
// stores/todos.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref([])

  const addTodo = (text: string) => {
    todos.value.push({ text, done: false })
  }

  return { todos, addTodo }
}, {
  persist: true // Сохраняет todos в localStorage
})
```

**Аналогия:** `Persist` — это сейф, сохраняющий данные даже при перезагрузке страницы.

---

### 6. Заключение

**Итоги:**
- `Pinia` с `Composition API` упрощает управление состоянием.
- Сторы интуитивны, модульны и типобезопасны.
- Интеграция с `v-model` и `localStorage` делает разработку удобной.

**Аналогия:** `Pinia` с `Composition API` — это ваш личный ассистент, который держит данные в порядке и синхронизирует их с интерфейсом.

---
