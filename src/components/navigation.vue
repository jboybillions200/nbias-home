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
} from "lucide-vue-next";
import infoData from "@/components/data/infoData";
import PrimaryButton from "./primaryAnchor.vue";
import Top from "./top.vue";
const isNavHidden = ref(false);
const isMobileNavOpen = ref(false);
let lastScrollY = window.scrollY;

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Management", path: "/management" },
  { name: "Affiliations", path: "/affiliations" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact Us", path: "/contact" },
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
    class="fixed top-0 left-0 w-full z-50 bg-white shadow-lg border border-bottom"
  >
      <Top />

    <div class="h-16 px-4 flex items-center justify-between">
      <router-link to="/" class="flex items-center">
        <img :src="infoData?.about?.generalLogo" class="h-10 lg:h-14" />
      </router-link>

      <nav class="hidden lg:flex items-center gap-6">
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          class="text-sm font-bold text-black hover:text-primary3"
        >
          {{ item.name }}
        </router-link>

        <PrimaryButton
          :href="infoData?.about?.loginUrl"
          title="Center Login"
          :icon1="LockIcon"
          :icon2="LogInIcon"
          custom="w-40 border-2 border-primary3 text-sm font-semibold text-primary3"
        />

        <PrimaryButton
          :href="infoData?.about?.resultChecker"
          title="Result Checker"
          :icon1="Book"
          :icon2="ArrowRight"
          custom="w-40 bg-primary3 text-white text-sm font-semibold"
        />
      </nav>

      <button class="lg:hidden p-2" @click="toggleMobileNav">
        <X v-if="isMobileNavOpen" class="w-6 h-6" />
        <Menu v-else class="w-6 h-6" />
      </button>
    </div>
  </header>
  <!-- BACKDROP -->
  <div
    v-show="isMobileNavOpen"
    class="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
    @click="toggleMobileNav"
  />

  <!-- MOBILE SLIDE MENU -->
  <aside
    class="fixed top-0 left-0 h-screen w-full max-w-sm bg-gray-50 z-50 transform transition-transform duration-300 ease-in-out"
    :class="isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <!-- SIDEBAR HEADER (LOGO + TOGGLE ALWAYS VISIBLE) -->
    <div
      class="h-16 px-4 flex items-center justify-between border-b border-primary3"
    >
      <router-link to="/" class="flex items-center">
        <img :src="infoData?.about?.generalLogo" class="h-9" />
      </router-link>

      <button @click="toggleMobileNav" class="p-2">
        <X class="w-6 h-6" />
      </button>
    </div>

    <!-- SIDEBAR CONTENT -->
    <div class="pt-6 px-6 space-y-10">
      <router-link
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        class="block text-sm font-semibold"
        @click="toggleMobileNav"
      >
        {{ item.name }}
      </router-link>

      <PrimaryButton
        :href="infoData?.about?.loginUrl"
        title="Center Login"
        :icon1="LockIcon"
        :icon2="LogInIcon"
        custom="w-full border-2 border-primary3 font-semibold text-primary3"
      />

      <PrimaryButton
        :href="infoData?.about?.resultChecker"
        title="Result Checker"
        :icon1="CheckCheck"
        :icon2="ArrowRight"
        custom="w-full bg-primary3 text-white font-semibold"
      />
    </div>
  </aside>
</template>
