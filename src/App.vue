<template>
  <ProductGrid/>
</template>

<script>
import ProductGrid from './components/product-grid.vue'

export default {
  name: 'App',
  components: {
    ProductGrid
  },
}
</script>

<style>
#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background-color: white;
}
</style>
