<template>
    <div class="satellite">
        <div class="satellite__radius">
<<<<<<< HEAD
          <span>Радиус орбиты спутника:</span>
          <input type="text" class="form-control" v-model="radiusInput">
          <span>км</span>
        </div>
      <div class="satellite__speed">
        <h3>Требуемая скорость спутника:</h3>
        <div>
          {{ orbitalSpeed}} м/с
        </div>
        <img src="https://mediasat.info/wp-content/uploads/2015/06/sat-orbit.jpg">
      </div>
=======
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
>>>>>>> origin/main
    </div>
</template>

<script>
import { ref, computed} from "vue"

export default {
    name: 'Satellite',
<<<<<<< HEAD
    setup() {
      const EARTH_MASS = 6 * Math.pow(10, 24);
      const GRAVITATIONAL_CONST = 6.67 * Math.pow(10,-11);

      const radiusInput = ref('');

      const orbitalSpeed = computed(() => {

        const radiusKm = parseFloat(radiusInput.value);

        if (isNaN(radiusKm) || radiusKm <= 0) {
          return Infinity;
        }

        const orbitRadiusM = radiusKm * 1000;

        const speed = Math.sqrt(GRAVITATIONAL_CONST * EARTH_MASS / orbitRadiusM);
        return Math.round(speed);
      });

      return {
        radiusInput,
        orbitalSpeed
      };
    }
=======
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
>>>>>>> origin/main
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
