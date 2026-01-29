<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const items = ref([
  {
    name: "Rabiah Hassan",
    title: "Medical Laboratory Technician",
    description:
      "The college isn’t just an institution; it’s a community. I made lifelong friendships and received continuous support from my professors.",
    image: new URL("@/assets/testimony/1.jpeg", import.meta.url).href,
  },
  {
    name: "Aisha Mustapha",
    title: "Community Health Extension Worker",
    description:
      "Thanks to the College of Health, I landed my dream job shortly after graduation. The curriculum truly prepares students for the field.",
    image: new URL("@/assets/testimony/2.jpeg", import.meta.url).href,
  },
  {
    name: "Blessed Musa",
    title: "Pharmacy Technician",
    description:
      "The hands-on training and guidance from lecturers gave me confidence and practical skills for my healthcare career.",
    image: new URL("@/assets/testimony/3.jpeg", import.meta.url).href,
  },
]);

const currentIndex = ref(0);
let interval;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % items.value.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

onMounted(() => {
  interval = setInterval(nextSlide, 8000);
});

onBeforeUnmount(() => clearInterval(interval));
</script>

<template>
  <section class="py-16 px-4 text-center">
    <!-- Header -->
    <h2
      class="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary3 italic mb-12"
    >
      Voices of Success
    </h2>

    <!-- Carousel -->
    <div class="overflow-hidden max-w-5xl mx-auto">
      <div
        class="flex transition-transform duration-700 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(t, index) in items"
          :key="index"
          class="w-full flex-shrink-0 flex flex-col md:flex-row items-center justify-center gap-8 px-4"
        >
          <!-- Image -->
          <div
            class="w-32 h-32 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-primary3 shadow-lg flex-shrink-0"
          >
            <img
              :src="t.image"
              :alt="t.name"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Text -->
          <div
            class="bg-white/90 rounded-2xl p-6 md:p-8 max-w-xl text-center md:text-left"
          >
            <h3 class="font-semibold text-primary3 mb-4 uppercase">
              {{ t.name }}
            </h3>

            <p class="text-sm italic text-gray-500 mb-5">
              {{ t.title }}
            </p>
            <p class=" text-gray-700 leading-relaxed mb-4">“{{ t.description }}”</p>
          </div>
        </div>
      </div>

      <!-- Indicators -->
      <div class="flex justify-center gap-2 mt-8">
        <button
          v-for="(_, index) in items"
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-1 rounded-full transition-all"
          :class="
            currentIndex === index ? 'bg-primary2 scale-110' : 'bg-gray-400/60'
          "
        />
      </div>
    </div>
  </section>
</template>
