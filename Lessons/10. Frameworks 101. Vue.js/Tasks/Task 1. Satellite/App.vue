<template>
  <div class="satellite">
    <div class="satellite__radius">
      <span>Радиус орбиты спутника:</span>
      <input type="text" class="form-control" v-model="radius">
      <span>км</span>
    </div>
    <div class="satellite__speed">
      <h3>Требуемая скорость спутника:</h3>
      <div>{{ speed }} м/с</div>
      <img src="https://mediasat.info/wp-content/uploads/2015/06/sat-orbit.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Satellite',
  data() {
    return {
      radius: '7400',
      speed: '7354'
    }
  },
  watch: {
    radius(newVal) {
      this.calculateSpeed(newVal)
    }
  },
  mounted() {
    this.calculateSpeed(this.radius)
  },
  methods: {
    calculateSpeed(radius) {
      const num = parseFloat(radius)
      if (isNaN(num) || num <= 0) {
        this.speed = '0'
        return
      }
      
      const G = 6.67e-11
      const M = 6e24
      const r = num * 1000
      const v = Math.sqrt((G * M) / r)
      this.speed = Math.round(v).toString()
    }
  }
}
</script>

<style>
</style>