<template>
    <div class="satellite">
        <div class="satellite__radius">
            <span>Радиус орбиты спутника:</span>
            <input
                type="text"
                class="form-control"
                v-model="radiusInput"
                @input="onRadiusInput"
            >
            <span>км</span>
        </div>
        <div class="satellite__speed">
            <h3>Требуемая скорость спутника:</h3>
            <div>
                {{ speed }} м/с
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
            radiusInput: '',
            radius: 0,
        };
    },
    computed: {
        speed() {
            const G = 6.67e-11;
            const M = 6e24;
            const r = Number(this.radius) * 1000;
            if (!r || isNaN(r)) {
                return 0;
            }
            return Math.round(Math.sqrt(G * M / r));
        },
    },
    methods: {
        onRadiusInput() {
            this.radius = parseFloat(this.radiusInput.replace(/\D/g, ''));
        },
    },
};
</script>
