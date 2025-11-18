<template>
    <div class="satellite">
        <div class="satellite__radius">
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
    </div>
</template>

<script>
import { ref, computed} from "vue"

export default {
    name: 'Satellite',
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
};
</script>

<style>

</style>
