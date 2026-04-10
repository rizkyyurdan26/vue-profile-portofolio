<template>
  <footer id="footer" class="w-full bg-cyan-800 px-6 py-10 mt-20">
    <!-- Container -->
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full lg:max-w-[80%] mx-auto"
    >
      <!-- Left -->
      <div class="text-slate-200 ">
        <a href="#top"><img src="/logoputihbaru.png" class="w-28 mb-2" /></a>
        <p class="text-sm text-slate-200">
          Professional Frontend Developer.
          Open to exciting opportunities, freelance projects, and meaningful
          collaborations.
        </p>
        <p class="text-sm mt-5">Address: Pekanbaru City, Riau, Indonesia</p>
      </div>

      <!-- Middle -->
      <div class="text-white  md:items-center flex flex-col">
        <div class="space-y-5">
          <h1 class="text-white font-bold text-xl">Services</h1>
          <ul class="list-disc list-inside text-slate-200 text-sm">
            <li><a href="">Website</a></li>
            <li><a href="">Application</a></li>
            <li><a href="">Data Dashboard</a></li>
            <li><a href="">Machine Learning</a></li>
            <li><a href="">Multimedia Learning</a></li>
          </ul>
        </div>
      </div>

      <!-- Right -->
      <div class="flex flex-col">
        <h1 class="text-white font-bold text-xl mb-5">Contact</h1>
        <p class="text-slate-200 mb-2">Reach me on Gmail:</p>
        <input
          type="text"
          placeholder="Subject"
          class="text-sm text-slate-200 border border-slate-400 px-2 mb-2"
          v-model="subject"
        />
        <textarea
          rows="2"
          class="border border-slate-400 text-slate-200 p-2 focus:outline-0 text-sm"
          placeholder="Type your mail here"
          v-model="message"
        ></textarea>
        <button
          class="text-white text-sm bg-cyan-500 mt-2 rounded flex py-1 justify-center gap-2 w-1/2 cursor-pointer hover:scale-105"
          @click="handleEmail"
        >
          Send <Icon icon="ic:baseline-send" class="-rotate-45" />
        </button>
      </div>
    </div>
    <div
      class="flex flex-col items-center lg:max-w-[80%] w-full mx-auto text-white border-slate-400 border-t
       py-4 mt-10"
    >
      <p class="font-light flex items-center">
        <Icon icon="ic:sharp-copyright" />2026, RYS | Web Profile
      </p>
      <p class="font-light text-slate-300 text-sm">All right reserved</p>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const message = ref("");
const subject = ref("");

const handleEmail = () => {
  if (!message.value.trim() || !subject.value.trim()) {
    alert("Please fill Subject and Message if you want to send email");
  } else {
    window.open(
      `https://mail.google.com/mail/?view=cm&to=rizkyyurdansyah@gmail.com&su=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(message.value)}`,
    );
  }

  message.value = "";
  subject.value = "";
};
</script>
