<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Navigation from "@/components/navigation.vue";
import Footer from "@/components/footer.vue";
// import Footer from '@/components/footer.vue';
// Import Lucide icons
import { ArrowUp } from "lucide-vue-next";
import infoData from "@/components/data/infoData";

// State to control visibility of scroll-to-top button
const showScrollTop = ref(false);

// Handle scroll event
const handleScroll = () => {
  showScrollTop.value = window.scrollY > window.innerHeight;
};

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Attach event listener
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Cleanup event listener
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="relative"> 
    <Navigation />
    <slot />
    <Footer />

    <!-- Scroll-to-Top Button (Always Visible Above Footer) -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-primary1 hover:bg-primary3 hover:p-3 text-white p-2 rounded font-extrabold shadow-lg transition duration-300 ease-in-out transform hover:scale-110 z-50 animate-bounce "
    >
      <ArrowUp class="w-4 h-4" />
    </button>
  </div>
</template>

<style>
/* WhatsApp Wiggle Animation */
@keyframes wiggle {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(-5deg);
  }
}

.animate-wiggle {
  animation: wiggle 0.5s ease-in-out;
}
</style>
