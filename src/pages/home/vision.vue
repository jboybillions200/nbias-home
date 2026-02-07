<script setup>
import image from "@/assets/images/bg-1.jpeg";
import {
  BookOpen,
  Globe,
  School,
  BrainCircuit,
  ArrowRight,
} from "lucide-vue-next";
import PrimaryButton2 from "@/components/primaryButton2.vue";

const visionImage = { background: image };

// Refined targets with animated icons
const targets = [
  {
    title: "Up-to-Date Curriculum",
    description: "Curriculum reviewed regularly to meet top standards.",
    icon: School,
    animation: "animate-bounce", // subtle bounce for school
  },
  {
    title: "15 Years Running",
    description: "Consistent and trusted examination body for 15 years.",
    icon: Globe,
    animation: "animate-spin-slow", // slow spin for globe
  },
  {
    title: "Best Facilities",
    description: "Modern facilities for quality examination delivery.",
    icon: BrainCircuit,
    animation: "animate-pulse", // pulse for technology/brain
  },
  {
    title: "Quality Support",
    description: "Dedicated support for schools and exam centers.",
    icon: BookOpen,
    animation: "animate-bounce", // bounce for books/support
  },
];

const head = {
  label: "NBAIS Vision",
  description:
    "The Vision of NBAIS is to be at the frontline in realizing the ambition of the Federal Government of Nigeria in its programme for the full integration of western and Islamic Education, the promotion of Qur’anic schools and the Madrasah system of education in the country.",
};
</script>

<template>
  <section class="relative overflow-hidden py-4 bg-gray-50">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img
        :src="visionImage.background"
        alt="Background"
        class="w-full h-full object-cover"
      />
      <!-- <div class="absolute inset-0 bg-black/20"></div> -->
    </div>

    <!-- Content -->
    <div class="relative z-10 px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- LEFT: Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div
            v-for="(target, index) in targets"
            :key="index"
            data-aos="zoom-in"
            :data-aos-delay="index * 100"
            class="p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <div
              class="mb-5 flex justify-center items-center w-16 h-16 bg-primary3/20 rounded-full mx-auto"
            >
              <component
                :is="target.icon"
                class="text-primary3 w-8 h-8 transition-transform duration-500"
                :class="target.animation"
                stroke-width="1.5"
              />
            </div>

            <h3 class="text-lg font-bold mb-2 text-primary3">
              {{ target.title }}
            </h3>
            <p class="text-gray-600 text-sm" style="line-height: 1.8rem">
              {{ target.description }}
            </p>
          </div>
        </div>

        <!-- RIGHT: Head Content -->
        <div class="text-center md:text-left" data-aos="fade-left">
          <h1
            class="text-xl md:text-3xl lg:text-5xl font-bold capitalize mb-6 text-primary3"
          >
            {{ head.label }}
          </h1>

          <p class="text-gray-600 text-[16px] mb-6" style="line-height: 2.4rem">
            {{ head.description }}
          </p>

          <div class="flex justify-center md:justify-start">
            <PrimaryButton2
              title="Know More About Us"
              :icon1="ArrowRight"
              :icon2="ArrowRight"
              class="w-64 text-primary3 hover:bg-white"
              :to="{ name: 'About' }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Custom slow spin animation */
@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}
</style>
