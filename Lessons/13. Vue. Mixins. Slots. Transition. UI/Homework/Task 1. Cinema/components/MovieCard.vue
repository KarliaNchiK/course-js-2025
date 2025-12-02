<template>
    <!--Начало-->
    <CardBlock>
        <template #image>
            <img :src="movie.image">
        </template>

        <template #info>
            <div class="movie__info-name">
                {{ movie.name }}
            </div>
            <div>
                <span class="movie__title">
                    Год:
                </span>
                {{ movie.year }}
            </div>
            <div>
                <span class="movie__title">
                    Режиссер:
                </span>
                {{ movie.director }}
            </div>
            <div>
                <span class="movie__title">
                    Жанр:
                </span>
                {{ movie.genre }}
            </div>
        </template>
    </CardBlock>
    <!--Конец-->
</template>

<script>
import CardBlock from './CardBlock.vue';

export default {
    name: 'MovieCard',
    components: { CardBlock },
    // Начало
    props: {
        movie: {
            type: Object,
            required: true,
        },
    },
    // Конец
};
</script>

<style>
.movie__info-name {
    font-size: 18px;
    font-weight: bold;
}

.movie__title {
    font-size: 16px;
    font-weight: bold;
}
</style>
