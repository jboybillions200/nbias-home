<script setup>
import image from "@/assets/bg/bg.jpeg";
import {
  Home,
  User,
  LogIn,
  UserPlus,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-vue-next";
const footerdata = {
  background: image,
};

import infoData from "./data/infoData";
</script>
<template>
  <footer class="relative text-white overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img
        :src="footerdata?.background"
        alt="Footer background"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="absolute inset-0 bg-primary3/90 bg-blur-lg"></div>

    <div class="relative px-4 md:px-4 py-4">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-y-10"
      >
        <!-- Brand Column -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3 group mb-4">
            <span class="font-bold text-white uppercase text-lg">{{
              infoData?.about?.name
            }}</span>
          </div>

          <div class="text-white space-y-4">
            <div class="flex items-start gap-3">
              <p class="text-sm" style="line-height: 2rem">
                {{ infoData?.about.mission }}
              </p>
            </div>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <div class="p-1.5 rounded-full bg-white/10">
              <MapPin class="w-4 h-4 text-primary" />
            </div>
            <div>
              <p class="text-sm text-white mb-1">Address</p>
              <p class="text-xs text-white">
                {{ infoData?.about?.address }}
              </p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="p-1.5 rounded-full bg-white/10">
              <Phone class="w-4 h-4 text-primary" />
            </div>
            <div>
              <p class="text-sm text-white mb-1">
                Phone
                <br />
                <span
                  class="text-xs text-white mr-1"
                  v-for="(number, index) in infoData?.about?.phone"
                  :key="index"
                  >{{ number }}
                </span>
              </p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <div class="p-1.5 rounded-full bg-white/10">
              <Mail class="w-4 h-4 text-primary" />
            </div>
            <div>
              <p class="text-sm text-white mb-1">
                Email
                <br />
                <a
                  v-for="(email, index) in infoData?.about?.email"
                  :key="index"
                  :href="`mailto:${email}`"
                  class="text-xs text-white mr-2 hover:text-white transition-colors"
                >
                  {{ email }}
                </a>
              </p>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <p class="font-semibold text-primary7 uppercase text-sm mb-4">
            Quick Links
          </p>
          <div class="flex flex-col items-start space-y-3">
            <router-link
              v-for="link in infoData?.quickLinks"
              :key="link.name"
              :to="link.path"
              class="text-sm text-white hover:text-primary7 transition-colors flex items-center gap-2 group"
            >
              <span>{{ link.name }}</span>
            </router-link>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="space-y-4">
          <h3 class="font-semibold text-white uppercase tracking-wider text-sm">
            Newsletter
          </h3>
          <p class="text-white text-sm" style="line-height: 2rem">
            {{ infoData?.about?.news }}
          </p>
          <div class="flex items-center">
            <input
              type="email"
              placeholder="Your email"
              class="px-4 py-2 text-sm rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary2 w-full"
            />
            <button
              class="text-white bg-primary3 px-4 py-2 rounded-r-md text-sm hover:bg-cursor-pointer transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr class="my-8 border-primary1/30" />

      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="mb-4 md:mb-0">
          <p class="text-xs text-white">
            ©{{ infoData?.about.name }} All rights reserved
            <a
              :href="infoData?.about?.designerUrl"
              target="_blank"
              class="text-primary1/70 font-bold hover:text-white transition-colors"
              >Powered by {{ infoData?.about?.desiger }}</a
            >
          </p>
        </div>

        <div class="flex gap-4">
          <a
            v-for="social in infoData?.socialLinks"
            :key="social.url"
            :href="social.url"
            class="p-2 rounded-full bg-white/5 hover:bg-primary7/10 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <component
              :is="social.icon"
              class="size-5 text-white hover:text-primary7"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.router-link-active {
  @apply text-primary7 font-medium;
}
</style>
