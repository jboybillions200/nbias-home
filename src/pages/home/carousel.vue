<script setup>
import { ref, computed  } from "vue";
import { ArrowRight } from "lucide-vue-next";
import PrimaryButton2 from "@/components/primaryButton2.vue";

// Slides array
const slides = [
  {
    id: 1,
    label: "Welcome to NBAIS",
    description:
      "An Accredited examination body that offers national exams in SAISSCE, TAHFEEZ and SCIENCE curriculum",
    image: new URL("@/assets/images/book2.jpeg", import.meta.url).href,
  },
  {
    id: 1,
    label: "Welcome to NBAIS",
    description:
      "An Accredited examination body that offers national exams in SAISSCE, TAHFEEZ and SCIENCE curriculum",
    image: new URL("@/assets/images/books.jpeg", import.meta.url).href,
  },
  {
    id: 1,
    label: "Welcome to NBAIS",
    description:
      "An Accredited examination body that offers national exams in SAISSCE, TAHFEEZ and SCIENCE curriculum",
    image: new URL("@/assets/images/carousel5.jpeg", import.meta.url).href,
  },
];

const currentSlide = ref(0);

// Computed active slide
const activeSlide = computed(() => slides[currentSlide.value]);

// Next slide
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

</script>

<template>
  <div class="relative h-screen overflow-hidden">
      <img
        :src="activeSlide.image"
        class="absolute inset-0 w-full h-full object-cover brightness-75"
      >
      />
    <!-- CONTENT OVERLAY -->
    <div class="relative z-10 h-full flex flex-col">
      <!-- CENTER TEXT -->
      <div class="flex-1 flex items-center justify-center px-6 md:px-20 lg:pt-20">
        <div class="max-w-4xl text-center text-white">
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            {{ activeSlide.label }}
          </h1>
          <p class="text-lg lg:text-xl leading-relaxed mb-10">
            {{ activeSlide.description }}
          </p>
          <div class="flex justify-center">
            <PrimaryButton2
              title="About Us"
              :icon1="ArrowRight"
              :icon2="ArrowRight"
              class="w-48 text-white hover:text-primary3 border-2 border-white"
              :to="{ name: 'About' }"
            />
          </div>
        </div>
      </div>
      <!-- NAVIGATION -->
      <div class="pb-6">
        <div class="flex justify-center items-center gap-10 text-white font-bold">
          <button
            @click="
              currentSlide =
                (currentSlide - 1 + slides.length) % slides.length
            "
            class="hover:opacity-80 transition"
          >
            Prev
          </button>

          <span class="opacity-80">
            {{ currentSlide + 1 }} / {{ slides.length }}
          </span>

          <button @click="nextSlide" class="hover:opacity-80 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* LOADER */
/* .loader {
  width: 58px;
  height: 58px;
  border: 6px solid #449AEB;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
} */

</style>
