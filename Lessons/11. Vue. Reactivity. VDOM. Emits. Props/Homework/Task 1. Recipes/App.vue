<template>
    <div class="recipes">
        <!--Начало-->
      <div class="recipe-form">
        <h3>
          Создать новый рецепт
        </h3>
        <div class="recipe-form__block">
          <label class="form-label">
            Название нового рецепта
          </label>
        <!--Конец-->
    </div>
</template>

<script>
export default {
    name: 'Recipes',
    // Начало
    // Конец
};
</script>

<style>
.recipes {
    width: 1000px;
    margin: 40px;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    background: whitesmoke;
    border-radius: 15px;
}

.recipes > div {
    width: 50%;
}
</style>
