<template>
    <div class="satellite">
        <div class="satellite__radius">
            <span>Радиус орбиты спутника:</span>
            <input
                type="text"
                class="form-control"
                v-model="radius"
            >
            <span>км</span>
        </div>
        <div class="satellite__speed">
            <h3>Требуемая скорость спутника:</h3>
            <div>
                {{ calculateSpeed }} м/с
            </div>
            <img src="https://mediasat.info/wp-content/uploads/2015/06/sat-orbit.jpg">
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            radius: '',
        };
    },
    computed: {
        calculateSpeed() {
            const radius = parseFloat(this.radius);
            if (Number.isNaN(radius)) {
                return 'Infinity';
            }
            return Math.round(Math.sqrt((6.67 * 10 ** -11 * 6 * 10 ** 24) / (radius * 1000)));
        },
    },
};

</script>

<style>

</style>
