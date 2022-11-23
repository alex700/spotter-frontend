<template>
    <template v-for="product in store.products" :key="product.id">
      <Card v-bind="product"/>
    </template>
</template>

<script>
import {useProducts} from "@/use/products";
import Card from "@/components/Card";
import {store} from "@/store";

export default {
  components: {
    Card,
  },
  data() {
    return {
      store
    }
  },
  async setup() {
    const {products} = await useProducts()
    store.products = products;
  }
}
</script>
