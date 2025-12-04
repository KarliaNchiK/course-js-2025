<template>
    <div class="satellite">
      <div class="satellite__radius">
        <span>Радиус орбиты спутника:</span>
        <input type="text" class="form-control" v-model="radius">
        <span>км</span>
      </div>
      <div class="satellite__speed">
        <h3>Требуемая скорость спутника:</h3>
        <div>{{ speed }}</div>
        <img src="https://mediasat.info/wp-content/uploads/2015/06/sat-orbit.jpg">
      </div>
    </div>
</template>

<script>
export default {
    name: 'Satellite',
  data() {
    return {
      radius: null
    };
  },
  computed: {
    speed() {
      if (!this.radius || this.radius <= 0) return '— м/с';

      const G = 6.67e-11;
      const M = 6e24;
      const r = this.radius * 1000;

      const velocity = Math.sqrt(G * M / r);
      return `${Math.round(velocity)} м/с`;
    }
  }
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
  padding: 5px;
}

.satellite__speed div {
  font-size: 1.2em;
  font-weight: bold;
  margin: 10px 0;
}

img {
  max-width: 300px;
  margin-top: 20px;
}
</style>
