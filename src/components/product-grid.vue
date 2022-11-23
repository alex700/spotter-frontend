<template>
  <div class="w-auto justify-center items-center min-h-screen bg-white min-w-[95%]">
      <div class="h-auto transition-all md:w-full align-top">
          <div class="bd-white md:flex md:justify-center p-4">
            <Search/>
          </div>
        <div class="w-full md:flex md:justify-center bg-[#FAFAFA] pb-10">
          <div class="w-[90%] pl-10 pr-10 ml-auto mr-auto">
            <div>
              <div class="content-center md:flex md:justify-center md:flex-wrap gap-6">
                <div class="w-full text-[48px] text-w-700 block">
                  <h1 class="text-left">Results</h1>
                </div>
                <Suspense>
                  <ProductsList/>
                  <template #fallback>
                    Loading...
                  </template>
                </Suspense>
                <div class="w-full block">
                  <a href="#" @click.prevent="showMore" class="text-[20px] text-w-500 text-[#1AB76C] hover:underline">Show More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Search from "@/components/Search";
import ProductsList from "@/components/ProductsList";
import {store} from "@/store";
import {useProducts} from "@/use/products";

export default {
  name: 'ProductGrid',
  methods: {
    async showMore() {
      store.page++;
      store.offset = store.page * store.offsetStep;
      const {products} = await useProducts();
      store.products.push(...products);
    }
  },
  components: {
    Search,
    ProductsList,
  },
}
</script>
