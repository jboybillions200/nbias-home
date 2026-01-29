<script setup>
import { ref } from "vue";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import infoData from "@/components/data/infoData";
import { Facebook, Instagram, Youtube } from "lucide-vue-next";
import PrimaryButton from "@/components/primarybutton.vue";
/* ---------- FORM STATE ---------- */
const form = ref({
  state: "",
  college: "",
  year: "",
  examType: "",
  month: "",
  examNumber: "",
});

/* ---------- OPTIONS ---------- */
const states = ["Abuja", "Lagos", "Kano", "Kaduna", "Oyo", "Rivers", "Kwara"];

const colleges = ["NBAIS College A", "NBAIS College B", "NBAIS College C"];

const years = ["2022", "2023", "2024", "2025"];

const examTypes = ["SSCE", "BECE", "Mock"];

const months = ["January", "March", "June", "July", "November"];
</script>

<template>
  <section class="min-h-screen grid grid-cols-1 lg:grid-cols-2">
    <!-- ================= LEFT PANEL ================= -->
    <div
      class="relative flex flex-col justify-between overflow-hidden bg-primary3"
    >
      <!-- Background -->
      <img
        src="@/assets/images/bg-pattern.png"
        class="absolute inset-0 h-full w-full object-cover"
        alt="Background"
      />
      <div class="absolute inset-0 bg-primary3/60"></div>

      <!-- Logo -->
      <div class="relative z-10 p-8">
        <router-link :to="{name:'Home'}" >
          <img
          src="@/assets/nbais-logo.png"
          class="h-16 w-auto"
          alt="NBAIS Logo"
        />
        </router-link>
      </div>

      <!-- Doodle -->
      <div class="relative z-10 flex flex-1 items-center justify-center">
        <img
          src="@/assets/illustration/i4.png"
          alt="Illustration"
          class="h-60"
        />
      </div>

      <!-- Socials -->
      <div class="relative z-10 p-8 flex justify-end gap-4">
        <a
          v-for="social in infoData?.socialLinks"
          :key="social.url"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3 rounded-full bg-white/20 hover:bg-white/20 hover:transition-all duration-300 scale-105"
        >
          <component :is="social.icon" class="size-4 text-white" />
        </a>
      </div>
    </div>

    <!-- ================= RIGHT PANEL ================= -->
    <div class="flex items-center justify-center px-4 md:px-12 py-6 bg-gray-50">
      <div class="w-full max-w-xl space-y-10">
        <!-- Header -->
        <div class="text-center">
          <h1 class="text-lg md:text-2xl font-bold text-primary3 uppercase">
            NBIAS Result Checker
          </h1>
          <!-- <p class="text-sm text-gray-600">Get Your Exam Results Online</p> -->
        </div>
        <!-- Form -->
        <div class="bg-white rounded shadow-lg p-6 space-y-4">
          <p class="text-primary3 italic font-semibold text-sm">To Get Your Exam Results Online Please fill in your your details below</p>
          <Multiselect
            v-model="form.state"
            :options="states"
            searchable
            placeholder="Select State text-primary3 "
            class="text-xs"
          />

          <Multiselect
            v-model="form.college"
            :options="colleges"
            searchable
            placeholder="Select College"
          />

            <Multiselect
              v-model="form.year"
              :options="years"
              placeholder="Exam Year"
            />

            <Multiselect
              v-model="form.examType"
              :options="examTypes"
              placeholder="Exam Type"
            />
          

          <Multiselect
            v-model="form.month"
            :options="months"
            placeholder="Exam Month"
          />

          <input
            v-model="form.examNumber"
            type="text"
            placeholder="Enter Exam Number"
            class="w-full rounded-md border  border-gray-300 px-4 py-2 focus:border-primary3 focus:ring-1 focus:ring-primary3 outline-none"
          />

          <!-- CTA -->
          <!-- <button
            class="w-full py-3 rounded-md bg-primary3 text-white font-semibold hover:bg-primary3/90 transition shadow-md"
          >
            Check Result
          </button> -->
          <div class="flex justify-center">
            <PrimaryButton
              title="Check Result"
              :icon1="ArrowRight"
              :icon2="ArrowRight"
              class="w-full text-sm font-semibold hover:animate-pulse bg-primary3 text-white order-2 border-primary3"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.multiselect {
  --ms-border-color: #d1d5db;
  --ms-ring-color: rgba(0, 0, 0, 0);
  --ms-radius: 0.5rem;
  
}
</style>
