<template>
  <div class="relative w-full">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </div>
    <input v-on:change="search" v-on:keyup="search"  class="w-full h-12 text-sm outline-none border rounded-lg transition-all pl-10 pr-20 focus:border-blue-600" type="text" placeholder="Search">
  </div>
</template>

<script>
import debounce from "lodash.debounce";
import { store } from '@/store'
import {useProducts} from "@/use/products";

export default {
  name: "SearchProducts",
  methods: {
    search: debounce(async function debouncedSearch(input) {
      const val = input.target.value.trim()
      store.offset = 0;
      const {products} = await useProducts(val)
      store.products = products;
    }, 250),
  }
}
</script>

<style scoped>

</style>