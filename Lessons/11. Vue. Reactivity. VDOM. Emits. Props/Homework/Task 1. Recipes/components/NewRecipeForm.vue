<!--<template>-->
<!--    <div class="recipe-form">-->
<!--        &lt;!&ndash;Начало&ndash;&gt;-->
<!--        <h3>-->
<!--            Создать новый рецепт-->
<!--        </h3>-->
<!--        <div class="recipe-form__block">-->
<!--            <input-->
<!--                v-model="name"-->
<!--                type="text"-->
<!--                class="form-control recipe-form__name"-->
<!--                placeholder="Название рецепта"-->
<!--            >-->
<!--        </div>-->
<!--        <div class="recipe-form__block">-->
<!--            <textarea-->
<!--                v-model="ingredients"-->
<!--                class="form-control recipe-form_ingredients"-->
<!--                placeholder="Ингредиенты"-->
<!--            />-->
<!--        </div>-->
<!--        <div class="recipe-form__block">-->
<!--            <textarea-->
<!--                v-model="actions"-->
<!--                class="form-control recipe-form__recipe-text"-->
<!--                placeholder="Последовательность действий"-->
<!--            />-->
<!--        </div>-->
<!--        <div class="recipe-form__block">-->
<!--            <select-->
<!--                v-model="selectedTime"-->
<!--                class="form-select recipe-form__cook-time"-->
<!--            >-->
<!--                <option-->
<!--                    v-for="option in timeOptions"-->
<!--                    :key="option.value"-->
<!--                    :value="option.value"-->
<!--                >-->
<!--                    {{ option.text }}-->
<!--                </option>-->
<!--            </select>-->
<!--        </div>-->
<!--        <div class="recipe-form__block">-->
<!--            <input-->
<!--                v-model="isVegan"-->
<!--                type="checkbox"-->
<!--                class="form-check-input"-->
<!--            >-->
<!--            <label class="form-check-label">-->
<!--                Вегетарианское блюдо-->
<!--            </label>-->
<!--        </div>-->
<!--        <div class="recipe-form__block">-->
<!--            <button-->
<!--                @click="handleAddRecipe"-->
<!--                class="btn btn-dark recipe-form__add-button"-->
<!--            >-->
<!--                Добавить рецепт-->
<!--            </button>-->
<!--        </div>-->
<!--        &lt;!&ndash;Конец&ndash;&gt;-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->

<!--export default {-->
<!--    name: 'NewRecipeForm',-->
<!--    props: {-->
<!--        addRecipe: {-->
<!--            type: Function,-->
<!--            required: true,-->
<!--        },-->
<!--    },-->
<!--    data() {-->
<!--        // Опции для селекта "Время приготовления"-->
<!--        const timeOptions = [-->
<!--            { value: 1, text: '5 минут' },-->
<!--            { value: 2, text: '10 минут' },-->
<!--            { value: 3, text: '15 минут' },-->
<!--            { value: 4, text: '20 минут' },-->
<!--            { value: 5, text: '30 минут' },-->
<!--            { value: 6, text: '40 минут' },-->
<!--            { value: 7, text: '50 минут' },-->
<!--            { value: 8, text: '1 час' },-->
<!--            { value: 9, text: '1,5 часа' },-->
<!--            { value: 10, text: '2 часа' },-->
<!--            { value: 11, text: '2,5 часа' },-->
<!--            { value: 12, text: '3 часа' },-->
<!--            { value: 13, text: 'Бесконечность' },-->
<!--        ];-->
<!--        return {-->
<!--            name: '',-->
<!--            ingredients: '',-->
<!--            actions: '',-->
<!--            selectedTime: null,-->
<!--            isVegan: false,-->
<!--            timeOptions,-->
<!--        };-->
<!--    },-->
<!--    methods: {-->
<!--        handleAddRecipe() {-->
<!--            const recipeForm = {-->
<!--                recipeName: this.name,-->
<!--                ingredients: this.ingredients,-->
<!--                actions: this.actions,-->
<!--                cookingTime: this.timeOptions[this.selectedTime].text,-->
<!--                isVegan: this.isVegan,-->
<!--            };-->

<!--            this.addRecipe(recipeForm);-->

<!--            this.name = '';-->
<!--            this.ingredients = '';-->
<!--            this.actions = '';-->
<!--            this.selectedTime = null;-->
<!--            this.isVegan = false;-->
<!--        },-->
<!--    },-->
<!--};-->
<!--</script>-->

<!--<style>-->
<!--.recipe-form {-->
<!--  max-width: 350px;-->
<!--  margin-right: 40px;-->
<!--  padding: 20px;-->
<!--}-->

<!--.recipe-form__block {-->
<!--  margin-bottom: 15px;-->
<!--}-->

<!--input, textarea, select {-->
<!--  width: 100%;-->
<!--  padding: 8px;-->
<!--  border: 1px solid #ddd;-->
<!--  border-radius: 4px;-->
<!--  box-sizing: border-box;-->
<!--}-->

<!--textarea {-->
<!--  height: 80px;-->
<!--  resize: vertical;-->
<!--}-->

<!--button {-->
<!--  color: white;-->
<!--  border: none;-->
<!--  padding: 10px 20px;-->
<!--  border-radius: 4px;-->
<!--  cursor: pointer;-->
<!--  width: 100%;-->
<!--}-->
<!--</style>-->
<template>
    <div class="recipe-form">
        <h3>
            Создать новый рецепт
        </h3>
        <div class="recipe-form__block">
            <label class="form-label">
                Название нового рецепта
            </label>
            <input
                type="text"
                class="form-control recipe-form__name"
                v-model="recipeName"
            >
        </div>
        <div class="recipe-form__block">
            <label class="form-label">
                Ингредиенты
            </label>
            <textarea
                class="form-control recipe-form__ingredients"
                v-model="ingredients"
            />
        </div>
        <div class="recipe-form__block">
            <label class="form-label">
                Последовательность действий
            </label>
            <textarea
                class="form-control recipe-form__recipe-text"
                v-model="actions"
            />
        </div>
        <div class="recipe-form__block">
            <label class="form-label">
                Время приготовления
            </label>
            <select
                class="form-select recipe-form__cook-time"
                v-model="time"
            >
                <option
                    v-for="option in timeOptions"
                    :key="option.value"
                    :value="option.value"
                />
            </select>
        </div>
        <div class="recipe-form__block">
            <input
                type="checkbox"
                class="form-check-input"
                v-model="isVegan"
            >
            <label class="form-check-label">
                Вегетарианское блюдо
            </label>
        </div>
        <div class="recipe-form__block">
            <button
                @click="addRecipe()"
                class="btn btn-dark recipe-form__add-button"
            >
                Добавить рецепт
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewRecipeForm',

    setup() {
        return {
        };
    },
    data() {
        const timeOptions = [
            { value: 1, text: '5 минут' },
            { value: 2, text: '10 минут' },
            { value: 3, text: '15 минут' },
            { value: 4, text: '20 минут' },
            { value: 5, text: '30 минут' },
            { value: 6, text: '40 минут' },
            { value: 7, text: '50 минут' },
            { value: 8, text: '1 час' },
            { value: 9, text: '1,5 часа' },
            { value: 10, text: '2 часа' },
            { value: 11, text: '2,5 часа' },
            { value: 12, text: '3 часа' },
            { value: 13, text: 'Бесконечность' },
        ];
        return {
            timeOptions,
            recipeName: '',
            ingredients: '',
            actions: '',
            time: 1,
            isVegan: false,
        };
    },
    methods: {
        addRecipe() {
            const newRecipe = {
                recipeName: this.recipeName,
                ingredients: this.ingredients,
                actions: this.actions,
                time: this.timeOptions.find(option => option.value === this.time).text,
                isVegan: this.isVegan,
            };
            this.$emit('add-recipe', newRecipe);
            this.clearFields();
        },
        clearFields() {
            this.recipeName = '';
            this.ingredients = '';
            this.actions = '';
            this.time = 1;
            this.isVegan = false;
        },
    },
};
</script>\