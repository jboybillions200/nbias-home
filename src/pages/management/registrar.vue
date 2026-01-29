<script setup>
import { ref } from "vue";
import { Goal, View } from "lucide-vue-next";
import reg from "@/assets/staffs/reg.jpeg";
import bg from "@/assets/images/bg-1.jpeg";
import List from "./list.vue";
</script>
<template>
  <!-- Background section -->
  <section
    class="relative bg-cover bg-center py-10 px-4 lg:px-8"
    :style="{ backgroundImage: `url(${bg})` }"
  >
   <h2
      class="relative text-xl md:text-2xl lg:text-4xl font-extrabold text-primary3 italic text-center mb-12"
    >
      Chief Executive of the Council
    </h2>
    <div class="relative flex justify-center items-center">
      <div
        class=""
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="200"
      >
        <div class="text-center">
          <img
            :src="reg"
            alt="Registrar"
            class="w-96 h-full  object-cover object-top shadow-lg mx-auto"
          />
        </div>
      </div>
    </div>
    <List/>
  </section>
</template>
