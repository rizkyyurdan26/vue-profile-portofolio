<template>
  <HeaderComponent />
  <HeroSection />

  <main class="">
    <Services />
    <About />
    <Skills />
    <Education />
    <Experiences />
  </main>

  <FooterComponent />
</template>

<script setup>
import FooterComponent from "../components/headerFooter/FooterComponent.vue";
import HeaderComponent from "../components/headerFooter/HeaderComponent.vue";
import About from "../views/About.vue";
import Education from "../views/Education.vue";
import Experiences from "../views/Experiences.vue";
import HeroSection from "../views/HeroSection.vue";
import Services from "../views/Services.vue";
import Skills from "../views/Skills.vue";
</script>
