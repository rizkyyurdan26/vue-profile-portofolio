<template>
  <header
    :class="[
      'fixed z-50 top-0 w-full py-8 md:p-4  transition-all duration-200',
      isScrolled ? 'bg-cyan-800/60' : 'bg-transparent',
    ]"
  >
    <!-- Container -->
    <nav
      class="flex justify-between max-w-[90%] lg:max-w-[80%] mx-auto items-center"
    >
      <!-- Logo -->
      <div class="w-full">
        <a href="#"
          ><img src="/logoputih.png" class="w-40 md:w-48 object-cover" />
        </a>
      </div>

      <!-- Hamburger -->
      <button @click="handleActive" :class="['md:hidden']">
        <Icon icon="ic:round-menu" class="text-white text-2xl" />
      </button>

      <!-- Menu -->
      <div
        :class="[
          'fixed flex flex-col md:flex-row right-0 h-screen w-1/2 bg-gray-200/90  gap-5',
          'transform transition-transform duration-300 ease-in-out',
          isScrolled ? 
          'top-0' : 'top-0',
          isActive
            ? 'p-6 translate-x-0 text-black items-start'
            : 'translate-x-full p-6',
          'md:static md:h-auto md:w-auto md:bg-transparent md:translate-x-0 md:flex lg:gap-10 md:items-center md:text-white/90 md:p-0',
        ]"
      >
        <!-- Close Hamburger Btn -->

        <button
          @click="() => (isActive = false)"
          :class="['md:hidden flex justify-end w-full']"
        >
          <Icon icon="ic:baseline-close" class="text-black text-2xl" />
        </button>

        <!-- Main Menu -->
        <AButton
          href="#"
          text="Home"
          @click="
            () => {
              activeMenu = 'top';
              isActive = false;
            }
          "
          :class="activeMenu === 'top' ? 'md:text-sky-200' : ''"
        />
        <AButton
          href="#about"
          text="About"
          @click="
            () => {
              activeMenu = 'about';
              isActive = false;
            }
          "
          :class="activeMenu === 'about' ? 'md:text-sky-200' : ''"
        />
        <AButton
          href="#skills"
          text="Skills"
          @click="
            () => {
              activeMenu = 'skills';
              isActive = false;
            }
          "
          :class="activeMenu === 'skills' ? 'md:text-sky-200' : ''"
        />
        <AButton
          href="#education"
          text="Education"
          @click="
            () => {
              activeMenu = 'education';
              isActive = false;
            }
          "
          :class="activeMenu === 'education' ? 'md:text-sky-200' : ''"
        />
        <a
          href="#footer"
          @click="() => (isActive = false)"
          class="flex items-center gap-1 text-white bg-cyan-500 px-4 py-1 rounded-lg shadow-lg hover:scale-105 transform duration-300"
        >
          Contact
          <Icon icon="material-symbols-light:call" class="text-xl scale-x-[-1]"
        /></a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import AButton from "../common/AButton.vue";
import { onMounted, onUnmounted, ref } from "vue";

const isScrolled = ref(false);
const isActive = ref(false);
const activeMenu = ref("");

const handleActive = () => {
  isActive.value = !isActive.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
