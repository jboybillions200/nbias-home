<script setup>
import { ref } from "vue";
import { Goal, View } from "lucide-vue-next";
import proprietor from "@/assets/staffs/reg.jpeg";
import bg from "@/assets/images/bg-1.jpeg";
const pro = ref({
  title: "Registrar/Chief Executive Officer",
  name: "Prof. Yahuza Sulaiman Imam",
  image: proprietor,
  image2: bg,
  welcome: "",
  describe: `our mission is to elevate Arabic and Islamic education quality across Nigeria through standardized curricula, equitable assessments, and support for affiliated institutions. As a regulatory body under the Federal Ministry of Education, we develop frameworks integrating Arabic, Islamic knowledge, and secular subjects aligned with national education policy.

NBAIS leads in curriculum development, teacher training, quality assurance, and examination administration, maintaining academic integrity and cultural relevance across over 900 recognized schools. We expand access to quality education for diverse learners while fostering academic competition that drives excellence and lifelong learning.

Our vision empowers students as knowledgeable, ethical citizens through regulation, innovation, and stakeholder partnerships. We cultivate intellectual growth alongside cultural and moral foundations, promoting national unity, equity, and skills for modern success.

We value the trust of educators, learners, and communities, remaining committed to strengthening educational pathways that build knowledge, character, and confidence for every student.`,
});
</script>

<template>
  <!-- Background section -->
  <section
    class="relative bg-cover bg-center py-6 px-4 lg:px-8"
    :style="{ backgroundImage: `url(${pro.image2})` }"
  >
    <!-- Overlay -->
    <!-- <div class="absolute inset-0 bg-black/20"></div> -->
    <h2
      class="text-xl md:text-2xl lg:text-4xl font-extrabold text-primary3 italic text-center mb-8"
    >
      About NBAIS
    </h2>
    <div class="relative flex flex-col lg:flex-row items-center gap-12">
      <!-- Image Section -->
      <div
        class="lg:w-[40%] flex justify-center"
        
      >
        <div class="text-center">
          <img
            :src="pro.image"
            alt="School Proprietor"
            class="w-full h-full object-cover object-top shadow-lg mx-auto"
          />

          <!-- <h3 class="mt-4 text-lg font-semibold text-primary3 mb-4">
            {{ pro.name }}
          </h3>
          <p class="text-sm text-gray-500 uppercase">
            {{ pro.title }}
          </p> -->
        </div>
      </div>
      <div class="lg:w-[60%] space-y-6  ">
        <!-- <h2
          class="relative text-xl md:text-3xl lg:text-5xl font-extrabold text-primary3 italic mb-12"
        >
          {{ pro?.welcome }}
        </h2> -->

        <p
          class="text-sm md:text-[15px] font-medium text-gray-600"
          style="line-height: 2.3rem"
        >
          At <span class="text-primary3 font-bold">NBAIS</span> {{ pro?.describe }}
        </p>
      </div>
    </div>
  </section>
</template>
