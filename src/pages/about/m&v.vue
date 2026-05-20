<script setup>
import { ref } from "vue";
import CoreValues from "@/components/about.vue";
import infoData from "@/components/data/infoData";
import { ArrowRight, BookIcon, EyeIcon, ClockIcon } from "lucide-vue-next";

const visionImage = {
  background: image,
};
const values = [
  {
    title: "Our Vision",
    description:
      "To lead the integration of Western and Islamic education while promoting Qur’anic and Madrasah education in Nigeria.",
    icon: EyeIcon,
  },

  {
    title: "Our Mission",
    description:
      "A Nationally recognized examination body providing certification through SAISSCE and Tahfeez programmes",
    icon: BookIcon,
  },

  {
    title: "Core Values",
    description:
      "Integrity, professionalism, accountability, excellence, transparency, innovation, and commitment to quality education.",
    icon: ClockIcon,
  },
];
import image from "@/assets/images/bg-1.jpeg";
</script>
<template>
  <section class="relative overflow-hidden px-6 py-6 bg-gray-100">
    <!--bg-->
    <div class="absolute inset-0">
      <img
        :src="visionImage?.background"
        class="w-full h-full object-cover object-center"
        alt="bg"
      />
    </div>
    <div class="absolute inset-0"></div>
    <!-- Heading -->
    <div class="relative text-center mb-8">
      <h2
        class="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-primary3 italic uppercase py-6"
      >
        Who we are
      </h2>
    </div>
    <div
      class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
    >
      <div
        v-for="(value, index) in values"
        data-aos="fade-up"
        :data-aos-delay="index * 300"
        data-aos-duration="300"
        :key="index"
        class="group relative bg-gray-50 rounded p-3 shadow-lg backdrop-blur-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
      >
        <CoreValues
          :icon="value?.icon"
          :title="value?.title"
          :description="value?.description"
        />
      </div>
    </div>
  </section>
</template>
