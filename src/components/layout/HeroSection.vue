<template>
  <section
    id="top"
    class="relative bg-cover w-full h-screen"
    :style="{ backgroundImage: `url(${heroImg})` }"
  >
    <!-- Overlay -->
    <div class="absolute bg-black/10 inset-0 z-0"></div>

    <!-- Container -->
    <div
      class="relative z-10 flex flex-col max-w-[90%] lg:max-w-[80%] w-full mx-auto h-screen justify-center md:p-10 "
    >
      <!-- Main Title -->
      <div class="flex flex-col text-white">
        <h1 class="font-medium text-md md:text-xl text-gray-200">Welcome to,</h1>
        <h1 class="text-4xl md:text-6xl lg:text-5xl font-bold">My Profile Website</h1>
        <!-- Item Span -->
        <div class="flex flex-wrap gap-2 mt-2 mb-8 md:max-w-md">
          <SpanButton text="Website" />
          <SpanButton text="Application" />
          <SpanButton text="Data Dashboard" />
          <SpanButton text="Multimedia Learning" />
          <SpanButton text="Digital Solution" />
        </div>
        <p class="max-w-lg text-md md:text-xl lg:text-md text-gray-200">
          Professional frontend developer specializing in Vue.js. Also take on
          freelance projects through my own business at
          <a href="https://rystech.my.id" class="text-orange-200 underline"
            >rystech.my.id</a
          >
        </p>
      </div>

      <div
        class="flex flex-col md:flex-row gap-4 justify-center items-center md:justify-start absolute w-full bottom-10 md:relative md:mt-20"
      >
        <a href="#about">
          <PrimaryButton
            text="Show More"
            icon="material-symbols-light:arrow-drop-down"
            classIcon="w-8 h-8"
          />
        </a>

        <PrimaryButton
          :onClick="handleEmail"
          text="Reach Me"
          class="bg-orange-500 hover:bg-orange-700"
          icon="material-symbols-light:stacked-email"
          classIcon="w-8 h-8 md:w-5 md:h-5 ml-2"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import heroImg from "../../assets/static/hero.png";
import PrimaryButton from "../common/PrimaryButton.vue";
import SpanButton from "../common/SpanButton.vue";

const handleEmail = () => {
  window.open(
    "https://mail.google.com/mail/?view=cm&to=rizkyyurdansyah@gmail.com",
    "_blank",
  );
};
</script>
