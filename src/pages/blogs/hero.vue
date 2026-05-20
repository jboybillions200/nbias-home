<script setup>
import { ArrowRight } from "lucide-vue-next";
import PrimaryButton2 from "@/components/primaryButton2.vue";
import bgImage from "@/assets/images/carousel12.jfif";
const slide = {
  id: 1,
  label: "Latest News & Updates",
  image: bgImage,
};
</script>

<template>
  <div class="relative h-[600px] overflow-hidden">
    <Transition name="fade" mode="out-in">
      <img
        :src="slide.image"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />
    </Transition>
         <div class="inset-0 bg-black/60 absolute"></div>

    <!-- CURVED BOTTOM -->

    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 120"
        class="relative block w-full h-[90px]"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        ></path>
      </svg>
    </div>
     <div class="relative z-10 h-full flex flex-col">
      <!-- CENTER TEXT -->
      <div
        class="flex-1 flex items-center justify-start px-6 md:px-20 lg:pt-20"
      >
        <div class="max-w-4xl text-center text-white">
          <h1
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="500"
            class="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-6 capitalize lg:uppercase"
          >
            {{ slide.label }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Background image scaling animation */
@keyframes scalePulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  } /* gentle scale up */
  100% {
    transform: scale(1);
  }
}
.animate-scale {
  animation: scalePulse 5s ease-in-out infinite; /* slower and smooth */
}
</style>
