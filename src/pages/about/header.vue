<script setup>
import { ref } from "vue";
import { Book } from "lucide-vue-next"; // Make sure this import exists
import background from "@/assets/bg/5.png";
const hero = ref({
  bgImage: background,
  title: "About NBAIS",
  description: "",
});
</script>

<template>
  <!-- Hero Section -->
  <section class="relative bg-cover bg-center pt-20">
    <div class="pt-4">
      <img :src="hero?.bgImage" class="w-full object-cover" alt="about us" />
    </div>
    <!-- Overlay -->
    <!-- <div class="absolute inset-0 bg-black/50"></div> -->

    <!-- Text Content -->
    <!-- <div
      class="relative z-20 container mx-auto px-4 text-center text-white "
    >
      <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold ">
        {{ hero?.title }}
      </h1>
    </div> -->
  </section>
</template>
