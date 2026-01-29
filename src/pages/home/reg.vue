<script setup>
import { ref } from "vue";
import { Goal, View, ArrowRight } from "lucide-vue-next";
import proprietor from "@/assets/staffs/reg.jpeg";
import bg from "@/assets/images/bg-1.jpeg";
import PrimaryButton2 from "@/components/primaryButton2.vue";
const pro = ref({
  title: "Registrar/Chief Executive Officer",
  name: "Prof. Yahuza Sulaiman Imam",
  image: proprietor,
  image2: bg,
  welcome: "Meet Our Registrar at NBAIS",
  describe:`Professor Yahuza S. Imam (born 20 May 1974, Zaria, Nigeria) is the Registrar and Chief Executive Officer of the National Board for Arabic and Islamic Studies (NBAIS), Nigeria. He is a distinguished scholar of Arabic linguistics and Islamic studies, with extensive academic, administrative, and international experience.`
});
</script>

<template>
  <!-- Background section -->
  <section
    class="relative bg-cover bg-center py-6 px-4 lg:px-8"
    :style="{ backgroundImage: `url(${pro.image2})` }"
  >
    <!-- Overlay -->
    <!-- <div class="absolute inset-0 bg-black/20"></div> -->

    <div class="relative flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12">
      <!-- Text Section -->
      <div class="lg:w-[60%] space-y-6 py-8">
        <h2
          class="relative text-xl md:text-3xl lg:text-5xl font-extrabold text-primary3 italic mb-6"
        >
          {{ pro?.welcome }}
        </h2>

        <p
          class="text-sm md:text-[15px] font-medium text-gray-600"
          style="line-height: 2.4rem"
        >
          {{ pro?.describe }}
        </p>

        <div class="flex justify-start">
            <PrimaryButton2
              title="View Profile"
              :icon1="ArrowRight"
              :icon2="ArrowRight"
              class="w-64 text-primary3 hover:bg-white "
              :to="{ name: 'Reg' }"
            />
        </div>
      </div>

      <!-- Image Section -->
      <div
        class="lg:w-[40%] flex justify-center"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="200"
      >
        <div class="text-center">
          <img
            :src="pro.image"
            alt="School Proprietor"
            class="w-96 h-full object-cover object-top shadow-lg mx-auto"
          />

          <!-- <h3 class="mt-4 text-lg font-semibold text-primary3 mb-4">
            {{ pro.name }}
          </h3>
          <p class="text-sm text-gray-500 uppercase">
            {{ pro.title }}
          </p> -->
        </div>
      </div>
    </div>
  </section>
</template>
