<script setup>
import { ref } from "vue";
import { Goal, View } from "lucide-vue-next";
import proprietor from "@/assets/staffs/reg.png";
import bg from "@/assets/images/bg-1.jpeg";
const pro = ref({
  title: "Registrar/Chief Executive Officer",
  name: "Prof. Yahuza Sulaiman Imam",
  image: proprietor,
  image2: bg,
  welcome: "",
  intro:
    "is a national examination and regulatory body under the Federal Ministry of Education responsible for advancing Arabic and Islamic education across Nigeria.",
  details:
    "Established in 1960, NBAIS is responsible for developing standardized curricula, conducting SAISSCE and Tahfeez examinations, and regulating affiliated Arabic and Islamic schools across Nigeria. The Board integrates Arabic, Islamic, science, arts, and commercial education in line with the national education policy while promoting academic excellence, quality assurance, and teacher development.\n\nAs a national examination and regulatory body under the Federal Ministry of Education, NBAIS continues to expand access to quality education through curriculum innovation, digitalized examination processes, stakeholder partnerships, and institutional support for over 900 recognized schools nationwide. The Board also promotes educational inclusion, moral values, cultural relevance, and equal opportunities for learners across the country.",
});
</script>
<template>
  <!-- Background section -->
  <section
    class="bg-cover bg-center py-6 px-4 lg:px-8"
    :style="{ backgroundImage: `url(${pro.image2})` }"
  >
    <div class="relative flex flex-col lg:flex-row items-center gap-12">
      <!-- Image Section -->
      <div class="lg:w-[40%] flex justify-center">
        <div class="text-center">
          <img
            :src="pro.image"
            alt="School Proprietor"
            class="w-full h-full object-cover object-top shadow-lg"
          />
        </div>
      </div>
      <div class="lg:w-[60%] space-y-6">
        <h2
          class="mt-6 text-2xl md:text-3xl lg:text-5xl font-black text-primary3"
          style="line-height: 5rem"
        >
          Building the Future of Arabic & Islamic Education in Nigeria
        </h2>
        <p
          class="text-sm md:text-[15px] font-medium text-gray-600 text-justify"
          style="line-height: 2.6rem"
        >
          <span class="text-primary3 font-bold">NBAIS</span>

          {{ pro?.intro }}
        </p>
        <p
          class="text-sm md:text-[15px] font-medium text-gray-600 text-justify"
          style="line-height: 2.6rem"
        >
          {{ pro?.details }}
        </p>
      </div>
    </div>
  </section>
</template>
