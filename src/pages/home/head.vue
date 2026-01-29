<script setup>
import { ref } from "vue";
import { ArrowRight } from "lucide-vue-next";
import PrimaryButton2 from "@/components/primaryButton2.vue";
const head = ref({
  id: 1,
  label: "nbais",
  description:
    "An Accredited examination body that offers national exams in SAISSCE , TAHFEEZ and SCIENCE curriculum",
  Image: new URL("@/assets/images/static.jpeg", import.meta.url).href,
});
</script>

<template>
  <!-- HERO ROOT -->
  <div class="relative h-screen overflow-hidden">
    <!-- BACKGROUND VIDEO -->
    <section
      class="absolute inset-0 w-full h-full object-cover bg-top brightness-75"
    >
      <img :src="head?.Image"  alt="Background image"/>
    </section>
    <!-- OVERLAY -->
    <div class="relative z-10 h-full flex flex-col">
      <!-- CENTER CONTENT -->
      <div
        class="flex-1 flex items-center px-6 lg:pt-20"
      >
        <div class=" text-white px-12">
          <h1 class="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-8 uppercase leading-relaxed text-primary2"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="1000"
          >
            {{head?.label }}
          </h1>

          <p class="text-lg lg:text-xl leading-relaxed mb-12"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="1000"
          >
            {{ head?.description }}
          </p>

          <PrimaryButton2
            title="About Us"
            :icon1="ArrowRight"
            :icon2="ArrowRight"
            class="w-48 text-white hover:text-primary2 border-2 border-white"
            :to="{ name: 'About' }"
            data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
          />
        </div>
      </div>
    </div>
  </div>
</template>
