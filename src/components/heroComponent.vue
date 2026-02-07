<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  bgImage: {
    type: String,
    required: true,
  },
  alttitle: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <!-- Hero Section -->
  <section class="relative bg-cover bg-center pt-20">
    <div class="pt-4">
      <img :src="bgImage" class="w-full object-cover" :alt="alttitle" />
    </div>
  </section>
</template>
