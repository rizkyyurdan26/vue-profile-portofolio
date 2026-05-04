<template>
  <span
    class="bg-orange-100/10 px-5 py-px text-center rounded-full text-white hover:scale-105 text-xs shadow-md duration-100 transition-transform hover:cursor-pointer"
    >{{ text }}</span
  >
</template>

<script setup>
defineProps({
  text: String,
});
</script>
