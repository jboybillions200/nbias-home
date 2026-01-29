<script setup>
import { ref } from "vue";
import image from "@/assets/images/lab.jpeg";
const header = ref({
  heroImage: image,
 title: "Ignite Your Path to Excellence",
description: `Gain the knowledge, practical experience, and professional confidence you need to excel in the health sciences. 
              At Uthman Bin Affan College of Health Science & Technology, we combine academic rigor with real-world training to prepare students for rewarding careers in healthcare. 
              Our goal is to nurture skilled, compassionate, and ethical professionals who will make a lasting impact in their communities and beyond.`,
  button: "Uthman Bin Affan", 
});
</script>
<template>
  <div class="h-auto px-4 md:px-6 bg-gray-200/20">
    <div class="pt-24 flex flex-col lg:flex-row items-center gap-4 py-16">
      <!-- Text Content - left on desktop, below image on mobile -->
      <div
        class="w-full lg:w-1/2 order-2 lg:order-1"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duaration="400"
      >
        <h1 class="text-2xl md:text-5xl font-bold text-primary3 mb-3" style="line-height: 4rem;">
          {{ header?.title }}
        </h1>
        <p
          class="text-sm md:text-[16px] text-gray-600 mb-6 text-justify tracking-tight hyphens-auto leading-normal whitespace-pre-line"
          style="line-height: 1.8rem;"
        >
          {{ header?.description }}
        </p>
        <router-link :to="{ name: 'About' }">
          <button
            class="px-6 py-3 text-sm bg-primary3 hover:bg-primary3 text-white font-medium rounded transition-all duration-300 flex items-center group"
           
          >
            Learn More About {{ header?.button }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-2 group-hover:translate-x-3 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </router-link>
      </div>

      <!-- Image Content - top on mobile, right on desktop -->
      <div
        class="w-full lg:w-1/2 order-1 lg:order-2"
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duaration="600"
      >
        <img
          :src="header?.heroImage"
          alt="Hero Image"
          class="w-full h-auto rounded "
        />
      </div>
    </div>
  </div>
</template>
