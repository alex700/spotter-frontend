<template>
  <div class="w-full h-84 p-3 border bg-white mt-5 rounded-[24px] md:w-80">
    <div class="grid grid-cols-1">
      <div class="h-56">
        <section class="mx-auto flex justify-center h-32">
          <img :src="image" width="132" class="items-center" :alt="title">
        </section>
        <p class="text-lg text-black-500 font-semibold mt-1">{{vendor.title}}</p>
        <p class="text-[16px] mt-3 text-black-500 text-left">{{ $filters.str_limit(title, 60) }}</p>
      </div>
      <div>
        <div v-if="strikedPrice == undefined">
          <p class="text-sm mt-3 text-black-500 pb-5 text-left">{{ $filters.currencyUSD(price) }}</p>
        </div>
        <div v-else-if="strikedPrice !== undefined" class="text-sm mt-3 text-black-500 pb-5 text-left">
          <span class="text-red-400 stroke-current pr-2">{{ price }}</span>
          <span class="line-through">{{ $filters.currencyUsd(strikedPrice) }}</span>
        </div>
      </div>
      <div class="h-24 border-y-2">
        <div class="flex justify-between items-center mt-6 align-baseline">
          <div class="flex items-center gap-2">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.90909 11.25C3.34091 11.25 2.85795 11.0586 2.46023 10.6758C2.0625 10.293 1.86364 9.82812 1.86364 9.28125H0.5V2.0625C0.5 1.70156 0.633636 1.39269 0.900909 1.13587C1.16773 0.878625 1.48864 0.75 1.86364 0.75H11.4091V3.375H13.4545L15.5 6V9.28125H14.1364C14.1364 9.82812 13.9375 10.293 13.5398 10.6758C13.142 11.0586 12.6591 11.25 12.0909 11.25C11.5227 11.25 11.0398 11.0586 10.642 10.6758C10.2443 10.293 10.0455 9.82812 10.0455 9.28125H5.95455C5.95455 9.82812 5.75568 10.293 5.35795 10.6758C4.96023 11.0586 4.47727 11.25 3.90909 11.25ZM3.90909 9.9375C4.10227 9.9375 4.26432 9.8745 4.39523 9.7485C4.52568 9.62294 4.59091 9.46719 4.59091 9.28125C4.59091 9.09531 4.52568 8.93956 4.39523 8.814C4.26432 8.688 4.10227 8.625 3.90909 8.625C3.71591 8.625 3.55386 8.688 3.42295 8.814C3.2925 8.93956 3.22727 9.09531 3.22727 9.28125C3.22727 9.46719 3.2925 9.62294 3.42295 9.7485C3.55386 9.8745 3.71591 9.9375 3.90909 9.9375ZM12.0909 9.9375C12.2841 9.9375 12.4459 9.8745 12.5764 9.7485C12.7073 9.62294 12.7727 9.46719 12.7727 9.28125C12.7727 9.09531 12.7073 8.93956 12.5764 8.814C12.4459 8.688 12.2841 8.625 12.0909 8.625C11.8977 8.625 11.7359 8.688 11.6055 8.814C11.4745 8.93956 11.4091 9.09531 11.4091 9.28125C11.4091 9.46719 11.4745 9.62294 11.6055 9.7485C11.7359 9.8745 11.8977 9.9375 12.0909 9.9375ZM11.4091 6.65625H14.3068L12.7727 4.6875H11.4091V6.65625Z" fill="#9C9C9C"/>
              </svg>
            <p class="text-gray-400 font-semibold text-[10px]">Free shipping</p>
              <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.15 1.95156C10.15 2.69715 9.54554 3.30156 8.79995 3.30156H7.44995V1.95156C7.44995 1.20598 8.05437 0.601562 8.79995 0.601562C9.54554 0.601562 10.15 1.20598 10.15 1.95156ZM1.69995 4.20156C1.14767 4.20156 0.699951 4.64928 0.699951 5.20156V9.50156C0.699951 10.0538 1.14767 10.5016 1.69995 10.5016H6.54995V4.20156H1.69995ZM7.44995 4.20156V10.5016H12.3C12.8522 10.5016 13.3 10.0538 13.3 9.50156V5.20156C13.3 4.64928 12.8522 4.20156 12.3 4.20156H7.44995ZM5.19995 3.30156C4.45437 3.30156 3.84995 2.69715 3.84995 1.95156C3.84995 1.20598 4.45437 0.601562 5.19995 0.601562C5.94554 0.601562 6.54995 1.20598 6.54995 1.95156V3.30156H5.19995Z" fill="#9C9C9C"/>
              </svg>
            <p class="text-gray-400 font-semibold text-[10px]">Free Gift</p>
          </div>
        </div>
        <button class="btn bg-[#1AB76C] uppercase hover:underline text-white font-bold py-2 px-4 rounded-full mt-4 align-bottom w-full">
          View Details
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductGridCard",
  props: {
    title: String,
    price: Number,
    strikedPrice: Number || null,
    image: String,
    vendor: {
      id: Number,
      title: String,
    }
  },
}
</script>

<style scoped>

</style>