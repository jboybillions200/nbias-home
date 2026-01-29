<script setup>
import { ref } from "vue";
import background from "@/assets/videos/vid9.mp4";
const hero = ref({
  bgVideo: background,
  title: "NBAIS BLOG",
  description: "",
});
</script>

<template>
  <!-- Hero Section -->
  <section class="relative h-[300px] flex items-center overflow-hidden">
    <!-- Background Video -->
    <video
      loop
      muted
      autoplay
      playsinline
      :src="hero?.bgVideo"
      class="absolute inset-0 w-full h-full object-cover object-center"
    >
      Your browser does not support the video tag.
    </video>

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/50 z-10"></div>

    <!-- Text Content -->
    <div
      class="absolute z-20 container mx-auto px-4 text-center text-white pt-6 md:pt-16"
    >
      <h1
        class="text-2xl md:text-5xl font-bold mb-4 md:pt-6"
      >
        {{ hero?.title }}
      </h1>
      <p class="text-sm md:text-lg lg:text-xl">
        {{ hero?.description }}
      </p>
    </div>
  </section>
</template>

