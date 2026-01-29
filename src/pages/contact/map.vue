<script setup lang="ts">
import infoData from '@/components/data/infoData';

</script>

<template>
  <section class="bg-gray-100 py-4">
    <div class="">
      <h2 
        class="text-xl font-bold text-center mb-8 text-primary3 pt-2"
        data-aos="fade-down"
      >
        Find Our Location
      </h2>
      <div 
        class="h-60 w-full bg-gray-300 overflow-hidden"
       
      >
      <iframe 
      :src="infoData?.about?.map"
      class="w-full h-full"
      style="border:0;" 
      allowfullscreen
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </div>
  </section>
</template>