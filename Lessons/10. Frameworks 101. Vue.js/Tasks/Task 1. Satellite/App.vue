<template>
  <div class="satellite">
    <div class="satellite__radius">
      <span>Радиус орбиты спутника:</span>
      <input type="text" class="form-control" v-model="radiusKm" />
      <span>км</span>
    </div>
    <div class="satellite__speed">
      <h3>Требуемая скорость спутника:</h3>
      <div>
        {{ speed }} м/с
      </div>
      <img src="https://mediasat.info/wp-content/uploads/2015/06/sat-orbit.jpg" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const radiusKm = ref('');

const EARTH_MASS = 6e24;
const GRAVITATIONAL_CONSTANT = 6.67e-11; // 

const speed = computed(() => {
  const rKm = parseFloat(radiusKm.value);

  if (isNaN(rKm) || rKm <= 0) {
    return 'Infinity';
  }

  const rMeters = rKm * 1000;
  const v = Math.sqrt((GRAVITATIONAL_CONSTANT * EARTH_MASS) / rMeters);

  return Math.round(v);
});
</script>