<script setup>
import infoData from "./data/infoData";
import { Mail, Phone } from "lucide-vue-next";
</script>

<template>
  <!-- TOP INFO BAR -->
  <section
    class="w-full bg-primary3 text-white text-sm relative z-50"
  >
    <div
      class=" px-4 py-1 flex flex-row justify-between gap-3"
    >
      <!-- LEFT: CONTACT -->
      <div class="flex flex-wrap items-center gap-6">
        <!-- PHONE -->
        <!-- <div class="flex items-center gap-2">
          <Phone class="w-4 h-4 text-white/80" />
          <span
            v-for="(number, index) in infoData?.about?.phone"
            :key="index"
            class="text-xs md:text-sm text-white/90"
          >
            {{ number }}
          </span>
        </div> -->

        <!-- EMAIL / WEBMAIL -->
        <div class="flex items-center gap-2">
          <Mail class="p-1 rounded-full bg-white/10 hover:bg-white/20 transition" />
          <a
            :href="infoData?.about?.webmailLink"
            target="_blank"
            class="text-xs md:text-sm text-white/90 hover:text-primary1 font-bold hover:cursor-pointer transition"
          >
            Webmail
          </a>
        </div>
      </div>

      <!-- RIGHT: SOCIALS -->
      <div class="flex items-center gap-2">
        <a
          v-for="social in infoData?.socialLinks"
          :key="social.url"
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="p-1 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <component
            :is="social.icon"
            class="size-3 text-white"
          />
        </a>
      </div>
    </div>
  </section>
</template>
