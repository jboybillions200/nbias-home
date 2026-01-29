<script setup>
import { ref } from "vue";
import Facilities from "@/components/facilities.vue";
import infoData from "@/components/data/infoData";

</script>
<template>
  <section class="px-6 py-10 bg-gray-100">
    <!-- Heading -->
    <div class="text-center mb-8">
      <h2 class="text-3xl md:text-5xl lg:text-6xl font-extrabold py-8 text-primary3 italic">
        Our Facilities
      </h2>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(value, index) in infoData?.values"
        data-aos="fade-up"
        :data-aos-delay="index * 300"
        data-aos-duration="300"
        :key="index"
        class="group relative bg-gray-50 rounded shadow-lg backdrop-blur-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
      >
        <Facilities
          :image="value?.image"
          :icon="value?.icon"
          :title="value?.title"
          :description="value?.description"
        />
      </div>
    </div>
  </section>
</template>

