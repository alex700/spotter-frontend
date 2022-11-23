import { reactive } from 'vue'

export const store = reactive({
    products: [],
    offset: 0,
    offsetStep: 12,
    page: 1,
    searchTerm: "",
})