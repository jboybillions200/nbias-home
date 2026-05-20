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
    class="flex justify-center bg-gray-50 rounded shadow-lg p-4"
  >
    <div class="flex flex-col items-center text-center max-w-sm">
      <img
        :src="image"
        :alt="name"
        class="w-60 h-[270px] object-cover object-top rounded-full mb-4 border-4 border-primary3/80"
      />

      <h2 class="text-sm font-bold uppercase mb-2">{{ name }}</h2>

      <h3 class="text-xs uppercase font-semibold text-primary3 mb-3">
        {{ title }}
      </h3>
    </div>
  </section>
</template>
