<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  title: String,
  description: String,
  icon: String,
  image: String,
});
</script>
<template>
  <div>
    <div class="">
      <div>
        <img :src="image" alt="" class="h-60 w-full object-cover object-center" />
      </div>
    </div>
    <!-- Title -->
   <div class="text-center p-6">
     <h3 class="text-3xl font-bold mb-6 text-primary3 italic">
      {{ title }}
    </h3>

    <!-- Description -->
    <p class="text-[15px] text-gray-600" style="line-height: 2rem">
      {{ description }}
    </p>
   </div>
  </div>
</template>
