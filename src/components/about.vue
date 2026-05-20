<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  title: String,
  description: String,
  icon: String,
});
</script>
<template>
  <div class="text-center items-center p-6 relative">
    <div
      class="absolute -left-4 -top-6 w-16 h-16 bg-primary3/10 dark:bg-main rounded-full"
    ></div>
    <!-- Icon -->
    <div class="flex justify-center mb-6">
      <component
        :is="icon"
        alt=""
        class="size-16 text-primary3 font-extrabold"
      />
    </div>

    <!-- Title -->
    <h3 class="text-3xl font-bold mb-6 text-primary3 italic">
      {{ title }}
    </h3>

    <!-- Description -->
    <p class="text-[15px] text-gray-600" style="line-height: 2rem">
      {{ description }}
    </p>
     <!-- <div
      class="absolute -right-7 -bottom-6 w-20 h-20 bg-primary3/10 dark:bg-main rounded-full"
    ></div> -->
  </div>
</template>
