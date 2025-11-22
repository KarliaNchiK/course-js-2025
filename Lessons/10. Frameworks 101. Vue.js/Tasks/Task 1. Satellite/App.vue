<template>
    <div class="satellite">
        <div class="satellite__radius">
            <span>Радиус орбиты спутника:</span>
            <input
                type="text"
                class="form-control"
                v-model="radius"
                @input="calculateSpeed"
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
    name: 'Satellite',
    data() {
        return {
            radius: '',
            speed: 0,
            G: 6.67e-11,
            M: 6e24,
        };
    },
    mounted() {
        this.radius = '7400';
        this.calculateSpeed();
    },
    methods: {
        calculateSpeed() {
          // eslint-disable-next-line no-restricted-globals
            if (!this.radius || isNaN(this.radius) || this.radius <= 0) {
                this.speed = 0;
                return;
            }

            const radiusMeteres = this.radius * 1000;

            const velocity = Math.sqrt((this.G * this.M) / radiusMeteres);

            this.speed = Math.round(velocity);
        },
    },
};
</script>

<style>
.satellite {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.satellite__radius {
  margin-bottom: 20px;
}

.form-control {
  margin: 0 10px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 120px;
}

.satellite__speed {
  margin-top: 20px;
}

.satellite__speed img {
  max-width: 300px;
  margin-top: 15px;
  border-radius: 8px;
}
</style>
