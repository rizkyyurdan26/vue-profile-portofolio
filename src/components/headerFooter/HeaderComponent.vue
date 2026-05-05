<template>
  <header
    :class="[
      'fixed z-50 top-0 w-full transition-all duration-200',
      isScrolled ? 'bg-cyan-800/60 py-2' : 'bg-transparent py-1',
    ]"
  >
    <nav class="flex justify-between max-w-[90%] lg:max-w-[75%] mx-auto items-center">
      
      <!-- Logo -->
      <div class="w-full">
        <a href="#"><img src="/main.png" class="w-24 object-cover" /></a>
      </div>

      <!-- Hamburger -->
      <button @click="toggleMenu" class="md:hidden">
        <Icon icon="ic:round-menu" class="text-white text-2xl" />
      </button>

      <!-- Menu -->
      <div
        :class="[
          'fixed md:static top-0 right-0 h-screen md:h-auto w-1/2 md:w-auto',
          'flex flex-col md:flex-row gap-5',
          'bg-gray-200/90 md:bg-transparent',
          'transition-transform duration-300',
          isActive ? 'translate-x-0 p-6' : 'translate-x-full p-6',
          'md:translate-x-0 md:p-0 md:items-center md:text-white/90 lg:gap-10'
        ]"
      >
        <!-- Close -->
        <button @click="closeMenu" class="md:hidden flex justify-end w-full">
          <Icon icon="ic:baseline-close" class="text-black text-2xl" />
        </button>

        <!-- Menu -->
        <AButton
          href="/"
          text="Home"
          @click.prevent="() => handleNavClick('top')"
          :class="activeMenu === 'top' ? 'md:text-sky-200' : ''"
        />

        <AButton
          href="#about"
          text="About"
          @click.prevent="() => handleNavClick('about')"
          :class="activeMenu === 'about' ? 'md:text-sky-200' : ''"
        />

        <AButton
          href="#skills"
          text="Skills"
          @click.prevent="() => handleNavClick('skills')"
          :class="activeMenu === 'skills' ? 'md:text-sky-200' : ''"
        />

        <AButton
          href="#education"
          text="Education"
          @click.prevent="() => handleNavClick('education')"
          :class="activeMenu === 'education' ? 'md:text-sky-200' : ''"
        />

        <AButton
          href="#experience"
          text="Experiences"
          @click.prevent="() => handleNavClick('experience')"
          :class="activeMenu === 'experience' ? 'md:text-sky-200' : ''"
        />

        <!-- Contact -->
        <a
          href="#contact"
          @click.prevent="() => handleNavClick('contact')"
          class="flex items-center gap-1 text-white bg-cyan-500 px-4 py-1 rounded-lg shadow-lg hover:scale-105 transition"
        >
          Contact
          <Icon icon="material-symbols-light:call" class="text-xl scale-x-[-1]" />
        </a>
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
const activeMenu = ref("top");

const isClickScrolling = ref(false); 

let observer;

const toggleMenu = () => {
  isActive.value = !isActive.value;
};

const closeMenu = () => {
  isActive.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const handleNavClick = (id) => {
  isClickScrolling.value = true;
  activeMenu.value = id;
  isActive.value = false;

  if (id === "top") {
    history.replaceState(null, "", "/"); 
  } else {
    history.replaceState(null, "", `#${id}`);
  }

  setTimeout(() => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      const header = document.querySelector("header");

      if (el && header) {
        const offset = header.offsetHeight;

        const y =
          el.getBoundingClientRect().top +
          window.pageYOffset -
          offset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }

    setTimeout(() => {
      isClickScrolling.value = false;
    }, 400);
  }, 100);
};

onMounted(() => {
  const hash = window.location.hash.replace("#", "");

  if (hash) {
    activeMenu.value = hash;
  } else {
    activeMenu.value = "top";
  }
  window.addEventListener("scroll", handleScroll);

  const sections = ["top", "about", "skills", "education", "experience"];

  observer = new IntersectionObserver(
    (entries) => {
      if (isClickScrolling.value) return; 

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeMenu.value = entry.target.id;
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "-100px 0px -60% 0px",
    }
  );

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  if (observer) observer.disconnect();
});
</script>