<script setup>
import { ArrowRight } from "lucide-vue-next";

defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="p-2 h-full">
    <div
      class="group h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-white"
    >
      <!-- Image -->
      <div class="overflow-hidden">
        <img
          :src="image"
          alt="news image"
          class="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <!-- Content -->
      <div class="p-6 flex flex-col flex-1">
        <h3 class="text-primary3 font-semibold uppercase mb-3">
          {{ category }}
        </h3>

        <p class="text-sm mb-6 leading-relaxed flex-1">
          {{ title }}
        </p>

        <!-- Action -->
        <button
          class="mt-auto inline-flex items-center justify-center gap-2 text-primary3 hover:text-white border border-primary3 hover:bg-primary3 px-3 py-2 rounded transition"
        >
          <span class="font-semibold text-sm">See Details</span>
          <ArrowRight
            class="w-4 h-4 transition-transform group-hover:translate-x-2"
          />
        </button>
      </div>
    </div>
  </div>
</template>
