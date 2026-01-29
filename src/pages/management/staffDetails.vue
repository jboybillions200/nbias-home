<script setup>
import Layout from "@/layouts/Layout.vue";
import bg from "@/assets/bg/5.png";
import { useRoute } from "vue-router";
import { computed } from "vue";
import staffData from "@/components/data/staffData";
const route = useRoute();

const staff = computed(() =>
  staffData.staff.find((s) => s.id === route.params.id),
);
</script>

<template>
  <Layout>
    <div v-if="staff">
      <section class="relative bg-center bg-cover py-20">
        <div class="py-4">
          <img :src="bg" class="w-full object-cover" alt="prof" />
        </div>
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/50"></div>

        <!-- Text Content on Background -->
        <div
          class="absolute inset-0 z-10 flex items-end justify-start pl-36 md:pl-72"
        >
          <div class="text-white">
            <h1 class="text-sm md:text-xl font-semibold mb-3 uppercase">
              {{ staff?.name }}
            </h1>
            <p class="text-xs md:text-sm font-bold text-white mb-4 capitalize">
              {{ staff?.title }}
            </p>
          </div>
        </div>

        <!-- Profile Image (halfway below background) -->
        <div
          class="absolute bottom-[-3rem] md:bottom-[-4rem] left-6 md:left-20 z-20"
        >
          <img
            :src="staff?.image"
            alt="Professor"
            class="w-28 h-28 md:w-44 md:h-48 bg-white rounded-full object-cover object-top border-4 border-primary3 shadow-xl"
          />
        </div>
      </section>
      <!--content-->
      <section
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto px-4 py-12 bg-white"
      >
        <!-- ===== LEFT: SCROLLING TEXT ===== -->
        <div class="space-y-12 py-10 ">
          <!-- Profile Overview -->
          <div>
            <h2
              class="text-xl md:text-3xl font-bold text-primary3 uppercase italic mb-4"
            >
              Profile
            </h2>
            <p class="text-gray-600 text-[16px] leading-[2.5rem]">
              {{ staff.bio }}
            </p>
          </div>

          <!-- Educational Background -->
          <div>
            <h2
              class="text-xl md:text-3xl font-bold text-primary3 uppercase italic mb-4"
            >
              Educational Background
            </h2>
            <p class="text-gray-600 text-[16px] leading-[2.5rem]">
              {{ staff.education }}
            </p>
          </div>

          <!-- Academic & Professional Experience -->
          <div>
            <h2
              class="text-xl md:text-3xl font-bold text-primary3 uppercase italic mb-4"
            >
              Academic and Professional Experience
            </h2>
            <p class="text-gray-600 text-[16px] leading-[2.5rem]">
              {{ staff.service }}
            </p>
          </div>

          <!-- Scholarly Contributions -->
          <div>
            <h2
              class="text-xl md:text-3xl font-bold text-primary3 uppercase italic mb-4"
            >
              Scholarly Service
            </h2>
            <p class="text-gray-600 text-[16px] leading-[2.5rem] mb-4">
              {{ staff.service }}
            </p>
            <p class="text-gray-600 text-[16px] leading-[2.5rem]">
              {{ staff.service2 }}
            </p>
          </div>

          <!-- Personal Status -->
          <div>
            <h2
              class="text-xl md:text-3xl font-bold text-primary3 uppercase italic mb-4"
            >Contributions 
            </h2>
            <p class="text-gray-600 text-[16px] leading-[2.5rem]">
              {{ staff.contributions }}
            </p>
          </div>
          <div>
            <h2
              class="text-xl md:text-3xl font-bold text-primary3 uppercase italic mb-4"
            > Personal Status
            </h2>
            <p class="text-gray-600 text-[16px] leading-[2.5rem]">
              {{ staff.status }}
            </p>
          </div>
        </div>

        <!-- ===== RIGHT: STICKY IMAGE ===== -->
        <div class="relative hidden lg:block">
          <div class="sticky top-24">
            <img
              :src="staff?.image"
              alt="Profile Image"
              class="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>
