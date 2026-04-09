<template>
  <button @click="onClick(text)"
    :class="['flex items-center text-white font-bold bg-cyan-700 px-6 py-1 rounded-lg hover:cursor-pointer hover:scale-105 duration-300', $attrs.class]"
  >
    {{ text }} <Icon v-if="icon" :icon="icon" :class="classIcon" />
  </button>
</template>

<script setup>
import { Icon } from "@iconify/vue";

defineProps({
  icon: {
    type: String,
  },
  classIcon: String,
  text:String,
  onClick: Function
});
</script>
