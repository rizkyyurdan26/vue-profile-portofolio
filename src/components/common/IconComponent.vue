<template>
  <div class="flex flex-col gap-2 items-center ">
    <img :src="`/icon/${src}`" class="w-16 h-16 p-3 rounded-full  border border-slate-200 shadow-md hover:scale-110 transform duration-200" />
    <p class="text-center">{{text}}</p>
  </div>
</template>

<script setup>
defineProps({
    src:String,
    text: String
})
</script>
