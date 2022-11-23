import {ref} from 'vue'
import {useFetch} from './fetch'
import {store} from "@/store";

export async function useProducts(searchTerm) {
    const loaded = ref(false)
    let params = {}
    if (store.offset > 0) {
        params.offset = store.offset;
    }
    if (searchTerm) {
        params = { ...params, filters: searchTerm}
    }
    const filters = new URLSearchParams(params).toString()
    const {response, request} = useFetch(process.env.VUE_APP_PRODUCT_LIST_URL + '?' + filters)

    if (!loaded.value) {
        await request()
        loaded.value = true
    }
    const products = response.value
    return {products}
}