<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { ArrowRight } from "lucide-vue-next";
import PrimaryButton2 from "@/components/primaryButton2.vue";

const slides = [
  {
    id: 1,
    label: "Welcome to NBAIS",
    description:
      "A nationally recognized examination body providing certification through SAISSCE and Tahfeez programmes.",
    image: new URL("@/assets/images/carousel11.jfif", import.meta.url).href,
  },
  {
    id: 2,
    label: "Examination Excellence",
    description:
      "We conduct standardized assessments that uphold academic and Islamic education standards across Nigeria.",
    image: new URL("@/assets/images/carousel19.jfif", import.meta.url).href,
  },
  {
    id: 3,
    label: "Nationwide Recognition",
    description:
      "Our certifications are accepted across institutions nationwide, supporting educational and career advancement.",
    image: new URL("@/assets/images/carousel12.jfif", import.meta.url).href,
  },
];

const currentSlide = ref(0);
let interval = null;

const activeSlide = computed(() => slides[currentSlide.value]);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};

// AUTO SLIDE STARTS HERE
onMounted(() => {
  interval = setInterval(() => {
    nextSlide();
  }, 12000);
});

// CLEANUP (important)
onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="relative h-screen overflow-hidden animate-scale">
    <Transition name="fade" mode="out-in">
      <img
        :key="activeSlide.id"
        :src="activeSlide.image"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />
    </Transition>
    <!-- CONTENT OVERLAY -->
    <div class="absolute bg-black/60 inset-0"></div>
    <div class="relative z-10 h-full flex flex-col">
      <!-- CENTER TEXT -->
      <div
        class="flex-1 flex items-center justify-center px-6 md:px-20 lg:pt-20"
      >
        <div class="max-w-4xl text-center text-white">
          <h1
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="500"
            class="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-6 capitalize lg:uppercase"
          >
            {{ activeSlide.label }}
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="400"
            data-aos-delay="500"
            class="text-sm lg:text-xl mb-10 capitalize font-semibold whitespace-pre-line"
            style="line-height: 2.4rem"
          >
            {{ activeSlide.description }}
          </p>
          <div
            class="flex justify-center"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="500"
          >
            <PrimaryButton2
              title="About Us"
              :icon1="ArrowRight"
              :icon2="ArrowRight"
              class="w-56 text-white hover:text-primary3 border-2 border-white"
              :to="{ name: 'About' }"
            />
          </div>
        </div>
      </div>
      <!-- NAVIGATION -->
      <div class="absolute bottom-0 left-0 right-0 z-20 pb-6">
        <div
          class="flex justify-center items-center gap-10 text-white font-bold"
        >
          <button
            @click="
              currentSlide = (currentSlide - 1 + slides.length) % slides.length
            "
            class="hover:text-primary1 transition-colors duration-300 tracking-wider text-sm uppercase"
          >
            Prev
          </button>

          <span
            class="font-mono text-sm tracking-widest bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm"
          >
            {{ currentSlide + 1 }} / {{ slides.length }}
          </span>

          <button
            @click="nextSlide"
            class="hover:text-primary1 transition-colors duration-300 tracking-wider text-sm uppercase"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Background image scaling animation */
@keyframes scalePulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  } /* gentle scale up */
  100% {
    transform: scale(1);
  }
}
.animate-scale {
  animation: scalePulse 5s ease-in-out infinite; /* slower and smooth */
}

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>
