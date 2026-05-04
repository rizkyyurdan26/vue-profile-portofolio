<template>
  <div class="font-semibold text-sm md:text-lg">
    <span class="text-xl md:text-3xl">{{ icon }}</span>
    <p class="mt-2 text-slate-600">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  text: String,
});
</script>
