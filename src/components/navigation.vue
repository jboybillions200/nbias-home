<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import {
  Menu,
  X,
  ArrowRight,
  LogInIcon,
  CheckCheck,
  LockIcon,
  Book,
  House,
  Info,
  Users,
  BadgeCheck,
  Newspaper,
  Phone,
} from "lucide-vue-next";

import infoData from "@/components/data/infoData";
import PrimaryButton from "./primaryAnchor.vue";
import Top from "./top.vue";

const isNavHidden = ref(false);
const isMobileNavOpen = ref(false);

let lastScrollY = window.scrollY;

const navGroups = [
  {
    title: "Main",
    items: [
      { name: "Home", path: "/", icon: House },
      { name: "About", path: "/about", icon: Info },
    ],
  },
  {
    title: "Academics",
    items: [
      { name: "Management", path: "/management", icon: Users },
      {
        name: "Affiliations",
        path: "/affiliations",
        icon: BadgeCheck,
      },
    ],
  },
  {
    title: "Connect",
    items: [
      { name: "Blogs", path: "/blogs", icon: Newspaper },
      { name: "Contact", path: "/contact", icon: Phone },
    ],
  },
];

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  isNavHidden.value = currentScrollY > lastScrollY && currentScrollY > 120;

  lastScrollY = currentScrollY;
};

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value;
  document.body.style.overflow = isMobileNavOpen.value ? "hidden" : "";
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <!-- NAVBAR -->
  <header
    class="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 transition-all duration-300"
  >
    <Top />

    <!-- LARGE SCREEN NAV -->
    <div
      class="h-20 px-6 hidden lg:flex items-center justify-between gap-6"
    >
      <!-- LOGO (LEFT) -->
      <router-link to="/" class="flex items-center shrink-0">
        <img :src="infoData?.about?.generalLogo" class="h-12 object-contain" />
      </router-link>

      <!-- CENTER NAV (MIDDLE) -->
      <nav class="flex items-center justify-center flex-1">
        <div
          class="flex items-center bg-gray-50 border border-primary3 rounded-full px-3 py-2 shadow-lg"
        >
          <div
            v-for="group in navGroups"
            :key="group.title"
            class="flex items-center"
          >
            <!-- GROUP ITEMS -->
            <div class="flex items-center gap-1 px-3">
              <router-link
                v-for="item in group.items"
                :key="item.name"
                :to="item.path"
                :class="[
                  'group flex items-center gap-2 px-4 py-1 rounded text-sm font-semibold transition-all duration-300',
                  $route.path === item.path
                    ? 'text-primary3'
                    : 'text-gray-700 hover:bg-primary3 hover:text-white',
                ]"
              >
                <component :is="item.icon" class="w-4 h-4 text-current" />

                <span class="text-[12px]">{{ item.name }}</span>
              </router-link>
            </div>

            <!-- DIVIDER -->
            <div
              v-if="group.title !== 'Connect'"
              class="w-px h-8 bg-primary3 mx-2"
            />
          </div>
        </div>
      </nav>

      <!-- RIGHT BUTTONS (RIGHT) -->
      <div class="flex items-center justify-end gap-3 shrink-0">
        <PrimaryButton
          :href="infoData?.about?.loginUrl"
          title="Center Login"
          :icon1="LockIcon"
          :icon2="LogInIcon"
          custom="w-40 border-2 border-primary3 text-sm font-semibold text-primary3 hover:bg-primary3 hover:text-white transition-all duration-300"
        />

        <PrimaryButton
          :href="infoData?.about?.resultChecker"
          title="Result Checker"
          :icon1="Book"
          :icon2="ArrowRight"
          custom="w-44 bg-primary3 text-white text-sm font-semibold hover:scale-105 transition-all duration-300"
        />
      </div>
    </div>

    <!-- MOBILE NAV -->
    <div class="h-16 px-4 flex items-center justify-between lg:hidden">
      <router-link to="/" class="flex items-center">
        <img :src="infoData?.about?.generalLogo" class="h-10" />
      </router-link>

      <button class="p-2" @click="toggleMobileNav">
        <X v-if="isMobileNavOpen" class="w-6 h-6" />
        <Menu v-else class="w-6 h-6" />
      </button>
    </div>
  </header>

  <!-- BACKDROP -->
  <div
    v-show="isMobileNavOpen"
    class="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
    @click="toggleMobileNav"
  />

  <!-- MOBILE MENU -->
  <aside
    class="fixed top-0 left-0 h-screen w-full max-w-sm bg-primary3 z-50 transform transition-transform duration-500 ease-in-out"
    :class="isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <!-- HEADER -->
    <div class="h-16 px-4 flex items-center justify-between border-b-2">
      <router-link to="/" class="flex items-center">
        <img :src="infoData?.about?.generalLogo" class="h-9" />
      </router-link>

      <button @click="toggleMobileNav" class="p-2 text-white">
        <X class="w-6 h-6" />
      </button>
    </div>

    <!-- CONTENT -->
    <div class="pt-6 px-6 space-y-8">
      <div v-for="group in navGroups" :key="group.title" class="space-y-5">
        <h3 class="text-xs uppercase tracking-widest text-white font-bold">
          {{ group.title }}
        </h3>

        <router-link
          v-for="item in group.items"
          :key="item.name"
          :to="item.path"
          class="flex items-center gap-3 p-3 rounded-xl hover:bg-primary3/10 transition-all duration-300"
          @click="toggleMobileNav"
        >
          <component :is="item.icon" class="w-5 h-5 text-white" />

          <span class="font-semibold text-sm text-white">
            {{ item.name }}
          </span>
        </router-link>
      </div>

      <!-- BUTTONS -->
      <div class="space-y-8 pt-4">
        <PrimaryButton
          :href="infoData?.about?.loginUrl"
          title="Center Login"
          :icon1="LockIcon"
          :icon2="LogInIcon"
          custom="w-full border-2 border-white font-semibold text-white"
        />

        <PrimaryButton
          :href="infoData?.about?.resultChecker"
          title="Result Checker"
          :icon1="CheckCheck"
          :icon2="ArrowRight"
          custom="w-full bg-white text-primary3 font-semibold"
        />
      </div>
    </div>
  </aside>
</template>