<template>
  <a
  :href="href"
    :class="['relative inline-block text-inherit hover:text-sky-200  after:absolute after:inset-x-0 after:-bottom-1 after:h-[2px] after:bg-sky-200 after:scale-x-0 after:origin-center after:transition after:transform after:duration-300 md:hover:after:scale-x-100', $attrs.class]"
  >
    {{ text }}
  </a>
</template>

<script setup>
defineProps({
    text: String,
    href: String,
})</script>
