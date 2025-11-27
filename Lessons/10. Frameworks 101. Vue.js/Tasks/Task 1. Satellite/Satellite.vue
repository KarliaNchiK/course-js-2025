<template>
    <div class="satellite">
        <div class="satellite__radius">
            <span>Радиус орбиты спутника:</span>
            <input
                type="text"
                class="form-control"
                v-model.number="radius"
            >
            <span>км</span>
        </div>

        <div class="satellite__speed">
            <h3>Требуемая скорость спутника:</h3>
            <div>{{ speed }} м/с </div>

            <img src="https://mediasat.info/wp-content/uploads/2015/06/sat-orbit.jpg">
        </div>
    </div>
</template>

<script>
export default {
    name: "Satellite",

    data() {
        return {
            radius: null
        };
    },

    computed: {
        speed() {
            const G = 6.67e-11;
            const M = 6e24;

            
            if (!this.radius && this.radius !== 0) {
                return Infinity;
            }

            const r = this.radius * 1000;
            return Math.round(Math.sqrt(G * M / r));
        }
    }
};
</script>
