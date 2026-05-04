<template>
  <div id="about" class="scroll-mt-20 md:scroll-mt-36 flex flex-col gap-5 w-full justify-center items-center py-10 md:py-15  bg-gray-100/40" data-sal="slide-up" data-sal-duration="1000">
    
    <h1 class="text-2xl font-bold">About</h1>
    <div
      class="flex flex-col md:flex-row lg:max-w-[80%] w-full items-center justify-around p-6 md:p-0"
    >

      <!-- Left -->
      <div class="flex flex-col md:max-w-[60%] w-full gap-2">
        <h1 class="font-semibold text-lg">Frontend Developer:</h1>
        <p class="text-slate-700 text-sm md:text-md">A Frontend Developer focused on building fast, responsive, and production-ready web interfaces. Experienced in turning requirements into clear, structured, and user-friendly interfaces, with strong attention to performance, UI consistency, and code maintainability.</p>
        <div class="">
          <h1 class="mt-4 font-semibold mb-2">Vue.js</h1>
          <p class="text-slate-700 text-sm md:text-md">Utilizing Vue.js to build well-structured and scalable component-based applications. Comfortable managing state, creating reusable components, and maintaining clean data flow to keep projects organized as they grow.</p>
        </div>

        <div class="hidden md:block">
          <h1 class="mt-4 font-semibold mb-2">UI Implementation</h1>
          <p class="text-slate-700 text-sm md:text-md">Experienced in translating designs into pixel-accurate interfaces, paying attention to details such as spacing, alignment, and visual hierarchy. Focused not only on visuals but also on responsiveness, consistency, and real-world usability across devices.</p>
        </div>
      </div>

      <!-- Right -->
      <div class="mt-5 md:mt-0 ">
        <img src="../assets/static/profile.jpeg" alt="" class="w-70 h-73 rounded-full border-5 border-slate-100 shadow-xl" />
      </div>

    </div>
  </div>
</template>

<script setup></script>
