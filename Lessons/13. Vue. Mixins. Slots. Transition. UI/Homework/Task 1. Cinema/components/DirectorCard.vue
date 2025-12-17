<template>
    <CardBlock>
        <template #image>
            <img :src="director.image || ''" :alt="director.name || ''" />
        </template>
        <template #info>
            <div class="director__info-name">{{ director.name || '' }}</div>
            <div>
                <span class="director__title">Возраст:</span>
                {{ director.age || '' }}
            </div>
            <div>
                <span class="director__title">Место рождения:</span>
                {{ director.birthPlace || '' }}
            </div>
            <div>
                <span class="director__title">Фильмы:</span>
                {{ director.movies || '' }}
            </div>
        </template>
    </CardBlock>
</template>

<script>
import CardBlock from './CardBlock.vue';

export default {
    name: 'DirectorCard',
    components: { CardBlock },
    props: {
        director: {
            type: Object,
            default: () => ({}),
        },
    },
};
</script>

<style scoped></style>