<script setup>
import { ArrowRight } from "lucide-vue-next";

defineProps({
  name: String,
  title: String,
  image: String,
  description: String,
  id: String,
});
</script>

<template>
  <section
    class="flex justify-center bg-white rounded shadow-lg p-6"
    data-aos="fade-up"
  >
    <div class="flex flex-col items-center text-center max-w-sm">
      <img
        :src="image"
        :alt="name"
        class="w-60 h-[275px] object-cover object-top rounded-full mb-4 border-4 border-primary3/80"
      />

      <h2 class="text-xl font-bold uppercase mb-2">{{ name }}</h2>

      <h3 class="text-sm uppercase font-semibold text-primary3 mb-3">
        {{ title }}
      </h3>

      <p class="text-gray-600 text-sm mb-4 leading-8">
        {{ description }}
      </p>

      <router-link
        :to="{ name: 'StaffDetails', params: { id } }"
        class="w-full mt-auto border-2 border-primary3 group hover:bg-primary3 p-2
               flex justify-center items-center text-xs font-bold text-primary3
               hover:text-white transition"
      >
        View Profile
        <ArrowRight class="size-4 ms-2 group-hover:translate-x-3 transition" />
      </router-link>
    </div>
  </section>
</template>
