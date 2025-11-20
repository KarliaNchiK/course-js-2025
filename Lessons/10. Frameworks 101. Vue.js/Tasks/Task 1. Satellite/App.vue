<template>
    <div class="satellite">
      <div class="satellite__radius">
        <span>Радиус орбиты спутника:</span>
        <input v-model="radius" class="form-control" type="number">
        <span>км</span>
      </div>
      <div class="satellite__speed">
        <h3>Требуемая скорость спутника:</h3>
        <div>
          {{result}}
        </div>
        <img src="https://mediasat.info/wp-content/uploads/2015/06/sat-orbit.jpg">
      </div>
    </div>
</template>

<script>
import {computed, ref} from 'vue'

export default {
  name: 'Satellite',
  setup() {
    const radius = ref('');

    const result = computed(() => {
      if (!radius.value || radius.value <= 0) {
        return '';
      }

      const G = 6.67 * Math.pow(10, -11);
      const M = 6 * Math.pow(10, 24);
      const r = radius.value*1000;
      const speed = Math.sqrt(G * M / r);
      return Math.round(speed) + ' м/с';
    });

    return {
      result,
      radius
    };

    }
};

</script>

<style>

</style>
