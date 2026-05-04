<script setup>
import MainLayout from './layouts/MainLayout.vue';
import { onMounted } from 'vue'
import sal from 'sal.js'
import 'sal.js/dist/sal.css'

onMounted(() => {
  sal({
    threshold: 0.5,
    once: true
  })
})
</script>

<template>
  <MainLayout/>
</template>
