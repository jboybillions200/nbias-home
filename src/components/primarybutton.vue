<script setup>
import { RouterLink } from "vue-router";

defineProps({
  title: String,
  li: { default: "#" },
  custom: String,
  icon1: Object,
  icon2: Object,
});
</script>

<template>
  <router-link
    :to="li"
    class="group relative flex items-center justify-center
           h-10 rounded overflow-hidden
           transition-all duration-300"
    :class="custom"
  >
    <!-- Default -->
    <span
      class="absolute flex items-center gap-2
             opacity-100 translate-x-0
             group-hover:opacity-0
             group-hover:-translate-x-6
             transition-all duration-300"
    >
      
      <component :is="icon1" class="w-4 h-4" />
      {{ title }}
    </span>

    <!-- Hover -->
    <span
      class="absolute flex items-center gap-2
             opacity-0 translate-x-6
             group-hover:opacity-100
             group-hover:translate-x-0
             transition-all duration-300"
    >
       Go!
      <component :is="icon2" class="w-5 h-5 animate-pulse" />
    </span>
  </router-link>
</template>
