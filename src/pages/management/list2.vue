<script setup>
import Team from "@/components/team.vue";
import { Facebook, Twitter, Linkedin } from "lucide-vue-next";

const staff = [
  {
    name: "Muazu Yunusa Sambo Esq",
    title: "Head, Information & Protocol",
    description:
      "Oversees operations, planning, and execution of organizational programs.",
    image: new URL("@/assets/staffs/s18.jpeg", import.meta.url).href,
    socialLinks: [
      { icon: Facebook, url: "#" },
      { icon: Twitter, url: "#" },
      { icon: Linkedin, url: "#" },
    ],
  },
  {
    name: "Aminu Alhaji Sokoto",
    title: "Chief Security Officer",
    description:
      "Coordinates educational and community development initiatives.",
    image: new URL("@/assets/staffs/s2.png", import.meta.url).href,
    socialLinks: [
      { icon: Facebook, url: "#" },
      { icon: Twitter, url: "#" },
      { icon: Linkedin, url: "#" },
    ],
  },
  {
    name: "Tijjani Muhammad Inuwa",
    title: "S.A Tsangaya",
    description: "Ensures smooth daily operations and stakeholder engagement.",
    image: new URL("@/assets/staffs/s8.jpeg", import.meta.url).href,
    socialLinks: [
      { icon: Facebook, url: "#" },
      { icon: Twitter, url: "#" },
      { icon: Linkedin, url: "#" },
    ],
  },
];
</script>

<template>
  <section class="py-12 px-4">
    <h2
      class="relative text-xl md:text-2xl lg:text-4xl font-extrabold text-primary3 italic text-center mb-12"
    >
      Senior Officers & Specialists
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Team
        v-for="(member, idx) in staff"
        :key="idx"
        :name="member.name"
        :title="member.title"
        :description="member.description"
        :image="member.image"
        :socialLinks="member.socialLinks"
      />
    </div>
  </section>
</template>
