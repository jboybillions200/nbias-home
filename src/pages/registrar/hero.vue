<script setup>
import { ref } from "vue";
import profImage from "@/assets/staffs/reg2.png";
// import infoData from "@/components/data/infoData";
import bg from "@/assets/bg/8.png";
const founder = ref({
  prof: profImage,
  title:'PROF.Yahuza Sulaiman Imam', 
  description:"Chief Executive of the Council"
});
</script>
<template>
  <section class="relative bg-center bg-cover py-20">
    <div class="py-4">
      <img
      :src="bg"
      class="w-full object-cover"
      alt="prof"
    />
    </div>
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/30"></div>
    
    <!-- Text Content on Background -->
    <div class="absolute inset-0 z-10 flex items-end justify-start pl-36 md:pl-72">
      <div class="text-white">
        <h1 class="text-sm md:text-xl font-semibold mb-3 uppercase">
          {{ founder?.title }}
        </h1>
        <p class="text-xs md:text-sm font-bold text-white mb-4 capitalize">
          {{ founder?.description }}
        </p>
      </div>
    </div>
    
    <!-- Profile Image (halfway below background) -->
    <div class="absolute bottom-[-3rem] md:bottom-[-4rem] left-6 md:left-20 z-20 ">
      <img
        :src="founder?.prof"
        alt="Professor"
        class="w-28 h-28 md:w-40 md:h-40 bg-white rounded-full object-cover border-4 border-primary3 shadow-xl"
      />
    </div>
  </section>
</template>