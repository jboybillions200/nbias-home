<script setup>
import infoData from "@/components/data/infoData";
import { ArrowRight } from "lucide-vue-next";
const visionImage = {
  background: image,
};
import image from "@/assets/images/bg-1.jpeg";
</script>

<template>
  <div class="relative overflow-hidden bg-gray-150 py-12">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img
        :src="visionImage.background"
        alt="Background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0"></div>
    </div>
    <h2
      class="relative text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary3 italic text-center mb-12"
    >
      Who We Are
    </h2>

    <!-- Content -->
    <section
      class="relative px-6 md:px-10 lg:px-16 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 text-justify"
    >
      <!-- About Text -->
      <div class="lg:w-[60%] space-y-5">
        <p class="text-2xl text-primary3 font-semibold uppercase">
          About {{ infoData?.about?.name }}
        </p>

        <p
          class="text-sm md:text-[15px] font-medium text-gray-600"
          style="line-height: 2rem"
        >
          {{ infoData?.about?.about }}
        </p>
        <p
          class="text-sm md:text-[15px] font-medium text-gray-600"
          style="line-height: 2rem"
        >
          {{ infoData?.about?.about2 }}
        </p>
        <!-- <router-link :to="{ name: 'About' }">
          <button
            class="hidden lg:block bg-primary3  text-white px-16 py-3 mt-6 rounded hover:bg-primary3/90  items-center gap-2 font-medium group"
          >
            Explore More
            <ArrowRight
              class="w-4 h-4 group-hover:translate-x-7 transition-all duration-300 me-3 "
            />
          </button>
        </router-link> -->
      </div>

      <!-- Vision & Mission -->
      <div class="lg:w-[40%] space-y-6">
        <div>
          <h3 class="text-lg font-bold text-primary3 uppercase mb-2">
            Our Vision
          </h3>
          <p
            class="text-sm md:text-[15px] font-medium text-gray-600"
            style="line-height: 2rem"
          >
            {{ infoData?.about?.vision }}
          </p>
        </div>

        <div>
          <h3 class="text-lg font-bold text-primary3 uppercase mb-2">
            Our Mission
          </h3>
          <p
            class="text-sm md:text-[15px] font-medium text-gray-600"
            style="line-height: 2rem"
          >
            {{ infoData?.about?.mission }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
