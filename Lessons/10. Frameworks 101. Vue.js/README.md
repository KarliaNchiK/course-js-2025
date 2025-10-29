## Что такое SPA и зачем нужен Vue?

### ❓ Что такое SPA?

SPA (Single Page Application) — это веб-приложение, которое работает **без полной перезагрузки страницы**. Страница загружается один раз, а потом содержимое **обновляется динамически**, без перезагрузки.

#### Пример:

* Вы заходите в сайт ToDo.
* Нажимаете кнопку "Добавить".
* Новый элемент появляется **без перезагрузки страницы**.

Это и есть **SPA**.

---

## Что делает фреймворк?

`JavaScript` - крайне функциональный язык программирования, позволяющий создавать
интерфейсы любого уровня сложности, наполнять приложения любым функционалом. <br>
В то же время нативный (`native` - природный) `JS` не предусматривает в себе технологий
для удобной разработки интерфейсов. При этом современные (и не только современные)
тенденции в архитектурном проектировании приложений (`web` и `server`) создают предпосылки
для использования паттернов проектирования.

Для удобства разработки было разработано множество фреймворков. <br>
**Фреймворк** - программная платформа, определяющая структуру программной системы;
программное обеспечение, облегчающее разработку и объединение разных компонентов большого
программного проекта.

- Фронтенд фреймворки / библиотеки:
    * **[React.js](https://ru.reactjs.org/)**
    * **[Angular](https://angular.io/)**
    * **[Vue.js](https://vuejs.org/)**
    * **[Ember.js](https://emberjs.com/)**
    * etc.

- Бэкенд фреймворки:
    * **[Express.js](https://expressjs.com/ru/)**
    * **[Koa](https://koajs.com/)**
    * **[Nest js](https://nestjs.com/)**
    * etc.

Внедрение фреймворка дает возможность более быстро и эффективно разрабатывать приложение,
а также в дальнейшем его поддерживать, дорабатывать и расширять.

Вот некоторые преимущества использования фреймворков:

- в проекте образуется отчетливая структура кода (а не один файл с 10 000 строк кода)
- реактивность - способность динамически связывать данные приложения и визуальное
  отображение
- возможность создания модульной системы кода (компонентный подход)
- возможность более удобного выделения состояния приложения (и работы с ним)
- простые задачи делаются просто (правда, зависит от разработчика)

Стоит заметить, что фреймворки хоть и крайне удобная вещь, но:

1. Их использование не всегда уместно (например, если ваше приложение крайне мало)
2. Внутри они работают на базовых синтаксических конструкциях языка программирования (`JS`
   в данном случае)

Так что фреймворки - это не панацея, а их использование опционально.

---

### Vue.js

Как написано на официальном сайте фреймворка, **Vue** (произносится /vjuː/, примерно как
view) — это прогрессивный фреймворк для создания пользовательских интерфейсов. <br>
Разработал
его [Evan You](https://twitter.com/youyuxi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)
в 2014 году

На данный момент самая новая версия `vue` - `3`, однако самая стабильная и используемая
версия - `2`. Заметим также, что в плане
использования разница между второй и третьей версией невелика, основные различия кроются
во внутренних технологиях, оптимизации и производительности.

Данный фреймворк позволяет разрабатывать клиентскую часть приложений (одностраничные и
многостраничные приложения)

---

## Что такое компонент?

Компонент — это **функциональный блок интерфейса**, который:

* Содержит шаблон (HTML).
* Содержит данные и методы (JS).
* Может быть переиспользуем.

Компоненты можно **встраивать друг в друга**, как "кубики LEGO".

---

## Как работает Vue-приложение?

## Простое приложение (CDN)

```html
<div id="app"></div>

<script>
    const { createApp, ref } = Vue;

    const App = {
        setup() {
            const name = ref('Kimi');
            const number = ref(42);
            return { name, number };
        },
        template: `
    <div>
      <p>Name: {{ name }}</p>
      <p>Number: {{ number }}</p>
    </div>
  `
    };

    createApp(App).mount('#app');
</script>
```
> Да-да, вот так просто. Vue 3 не требует ритуалов и жертвоприношений.

Vue-приложение начинается с точки входа:

```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

### Что делает этот код:

1. **Импортирует корневой компонент `App.vue`**.
2. Создаёт экземпляр приложения Vue.
3. **"Монтирует" компонент в DOM** — в элемент с id="app".

### А что в `App.vue`?

```vue
<template>
  <h1>Привет, Vue!</h1>
</template>

<script setup>
  // логика
</script>
```

---

## Что значит «монтировать компонент»?

**Монтирование** — это процесс, когда Vue:

1. Находит элемент в DOM (например, `<div id="app">`)
2. Загружает компонент (например, `App.vue`)
3. Запускает `setup()` (если есть)
4. Обрабатывает `<template>` и генерирует виртуальное представление DOM (VNode)
5. Отрисовывает этот шаблон в реальный DOM

---

## Что делает `setup()`

`setup()` — это **функция**, которая выполняется **один раз при создании компонента**.

```vue
<script setup>
  import { ref } from 'vue'

  const count = ref(0)
</script>
```

### Пошагово:

1. Vue вызывает `setup()` до рендеринга компонента.
2. Всё, что мы создаём в `setup()`, становится **доступно в шаблоне**.
3. Возвращать данные не нужно в `<script setup>` — это делается автоматически.

---

## Разберём на примере

```vue
<template>
  <h2>{{ message }}</h2>
</template>

<script setup>
  import { ref } from 'vue';

  const message = ref('Привет!')
</script>
```

### Что делает Vue:

1. Вызывает `setup()`, создаёт `message` как реактивную переменную.
2. Обрабатывает шаблон `<h2>{{ message }}</h2>`.
3. Подписывает шаблон на `message` → "Если изменится — обновить DOM".
4. Отображает в браузере `<h2>Привет!</h2>`.
5. Если `message.value = 'Пока!'`, Vue перерисует заголовок.

---

## `<script setup>` vs обычный `setup`

### Обычный `setup()`:

```vue
<script>
  export default {
    setup() {
      const count = ref(0)
      return { count }
    }
  }
</script>
```

### `<script setup>` (рекомендуемый):

```vue
<script setup>
  const count = ref(0)
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>
```

Преимущества `<script setup>`:

- короче;
- автодоступ к переменным в шаблоне;
- лучший опыт с TypeScript.

---

## Как работает реактивность в Vue?

Vue использует **прокси-объекты**, чтобы «подслушивать» изменения.

```js
const count = ref(0)
```

Когда вы пишете:

```js
count.value++
```

Vue:

1. Видит, что `value` изменилось.
2. Помечает часть шаблона, где используется `count`, как "грязную".
3. В следующем тике (через `requestAnimationFrame`) обновляет DOM.

Это называется **реактивное обновление**.

---

### 🧠 Аналогия с Excel:

1. Вы создаёте ячейку A1 = 10.
2. Ячейка B1 = A1 \* 2.
3. Меняете A1 на 15 → B1 автоматически становится 30.

Вот так Vue обновляет DOM при изменении `ref`.

---

## Директивы Vue

### `v-bind` / `:` — привязка к атрибутам

Например, для подставки в атрибут `src` элемента `img` ссылку на картинку, можно
использовать директиву `v-bind`, связывающую атрибут с данными приложения. Все директивы
во `vue` начинаются с `v-`

```html
<img v-bind:src="imageUrl" />
<img :src="imageUrl" />
<div :style="{ color: 'red' }">Text</div>
```

### `v-model` — двусторонняя привязка

Связь полей ввода и состояния приложения: <br>
При наборе текста в инпуте переменная `text` обновится автоматически

```vue
<input v-model="text">
<input v-model:model-value="text">

<input
    :model-value="text"
    @update:model-value="(newValue) => text = newValue"
>

<Item v-model:user="user" />

<Item
    :user="user"
    @update:user="(newValue) => user = newValue"
/>

<Item
    v-model:user="user"
    v-model="text"
/>

<Item
    :user="user"
    @update:user="(newValue) => user = newValue"

    :model-value="text"
    @update:model-value="(newValue) => text = newValue"
/>
```

### `v-on` / `@` — события

```vue
<button v-on:click="doSomething">Click</button>
<button @click="doSomething">Click</button>
```

Во `vue` также реализованы модификаторы событий:

```
<a href="#" @click.prevent="doSomething">
    doSomething
</a>
```

Вот некоторые из них:

- `.stop`
- `.prevent`
- `.capture`
- `.self`
- `.once`
- `.passive`
- etc

Таким образом можно обрабатывать любые другие события:

- `submit`
- `focus`
- `blur`
- `input`
- `change`
- `click`
- etc

### `v-for` — цикл

```vue
<li v-for="(item, i) in list" :key="i">{{ item }}</li>
```

При переборе коллекций `vue` просит в повторяемый тег добавить атрибут `key`. Данный
атрибут позволяет `vue` более оптимизированно перерисовывать элементы коллекции при
каких-либо изменениях в ней. В данный атрибут **не рекомендуется устанавливать индекс
элемента в массиве** (как в примере выше), так как при добавлении новых элементов в
массив (и при их удалении) `vue` не сможет определить, какие элементы уже находятся
в `DOM`-дереве, и полностью перерисует весь массив.

### `v-if`, `v-else-if`, `v-else` — условный рендеринг

```vue
<p v-if="ok">OK</p>
<p v-else>Not OK</p>
```

### `v-show` — отображение через `display: none`

```vue
<p v-show="visible">Visible</p>
```
---

## `ref` и `reactive`

### `ref()` — реактивность для примитивов:

```js
const counter = ref(0)
counter.value++
```

### `reactive()` — для объектов:

```js
const user = reactive({ name: 'John', age: 30 })
user.age++
```

---

## `computed` — вычисляемые свойства

```js
const name = ref('vue')
const upper = computed(() => name.value.toUpperCase())
```

---

## `watch` — отслеживание изменений

```js
watch(count, (newVal, oldVal) => {
    console.log(newVal, oldVal)
})
```

---

## Что происходит при изменении данных?

Пример:

```vue
<script setup>
  import { ref } from 'vue'
  const count = ref(0)

  const increment = () => {
    count.value++
  }
</script>

<template>
  <button @click="increment">+1</button>
  <p>Текущее значение: {{ count }}</p>
</template>
```

### Vue делает:

1. Отрисовывает кнопку и параграф.
2. Подписывает параграф на `count`.
3. При клике вызывается `increment()`.
4. `count.value++` → Vue видит изменение.
5. Обновляется только `<p>` — кнопка не трогается.

---

## Создание первого компонента «Задачи»

```vue
<script setup>
  import { ref } from 'vue'

  const newTask = ref('')
  const tasks = ref([])

  const addTask = () => {
    if (newTask.value.trim()) {
      tasks.value.push(newTask.value.trim())
      newTask.value = ''
    }
  }
</script>

<template>
  <input v-model="newTask" placeholder="Новая задача" />
  <button @click="addTask">Добавить</button>

  <ul>
    <li v-for="(task, i) in tasks" :key="i">{{ task }}</li>
  </ul>
</template>
```

---

## Объяснение по шагам:

* `newTask` и `tasks` — реактивные переменные.
* `v-model="newTask"` — двусторонняя связь input ↔ `newTask`.
* `v-for` — перебирает массив и создаёт список.
* `@click="addTask"` — вызывает функцию добавления.

---

### Компонентный подход

Компонентный подход - наиболее прогрессивный и удобный способ разработки приложения
на `vue`. <br>
Его суть заключается в том, что код делится на отдельные компоненты, образующие **дерево
компонентов**.

Компонент во `vue` можно реализовать в виде одно файлового компонента (в отдельном файле `.vue`)

### Hello.vue:

```vue
<script setup>
  const message = 'Hello from component!'
</script>

<template>
  <p>{{ message }}</p>
</template>
```

```vue
<script setup>
  import Hello from './Hello.vue'
</script>

<template>
  <Hello />
</template>
```


```vue
<template>
  <div class="order-to-item">
        <span :class="titleLabelClassList">
            Поручение {{ toItem.vspravku ? `№ ${toItem.vspravku}` : '' }}
        </span>
    <ul class="order-to-item__user-list">
      <template v-for="(toUser, toUserIndex) of toItem.user_list">
        <li
            v-if="Number(toUser.id) > 0 || toUser.rlist_name"
            :key="toUserIndex"
            class="order-to-item__user-item"
        >
          <template v-if="Number(toUser.id) > 0">
            <UserInfo
                :design-type="designType"
                :user-name="toUser.name"
                :org-name="toUser.org_name"
                :user-id="Number(toUser.id)"
            />
          </template>
          <template v-else>
            Группа исполнителей: <strong>{{ toUser.rlist_name }}</strong>
          </template>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
  import { inject } from 'vue';
  import { UserInfo } from '@ui';

  defineProps({
    toItem: {
      type: Object,
      required: true,
    },
  });

  const designType = inject('designType');
  const titleLabelClassList = inject('titleLabelClassList');
</script>

<style scoped>
  .order-to-item {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }

  .order-to-item__user-list {
    display: flex;
    flex-direction: column;
    row-gap: 2px;
    padding: 0;
    margin: 0;

    list-style: none;
  }
</style>
```

Основными преимуществами данного подхода являются:

- удобство при разработке приложения в виде модульной системы;
- все в одном месте (и шаблон, и данные, и стили);
- интуитивно понятный внешний вид компонента упрощает работу с ним.

Компоненты во `vue` принято именовать с заглавной буквы.

---

## Итоги лекции

* Vue — это фреймворк для создания реактивных интерфейсов.
* Компонент — часть интерфейса с логикой.
* Vue «монтирует» компонент, вызывая `setup()`.
* `ref()` делает переменные реактивными.
* Vue отслеживает и автоматически обновляет шаблон.
* Всё внутри `setup()` — это основа логики компонента.

---
