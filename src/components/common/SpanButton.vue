<template>
  <span class="bg-orange-100/10  px-5 py-px text-center rounded-full text-white text-xs shadow-md">{{
    text
  }}</span>
</template>

<script setup>
defineProps({
  text: String,
});
</script>
