<template>
  <div
    class="bg-gradient-to-b from-cyan-200/30 from-0% via-cyan-200/10 via-80% to-gray-100/40 to-100% py-5 md:py-10"
  >
    <div
      class="max-w-[80%] lg:max-w-[70%] mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-4"
    >
      <IconCard text="Professional" icon="💼" />
      <IconCard text="Responsibility" icon="🎯" />
      <IconCard text="Fast Development" icon="🚀" />
      <IconCard text="Problem Solving" icon="🧠" />
    </div>
  </div>
</template>

<script setup>
import IconCard from "../components/common/IconCard.vue";
</script>
