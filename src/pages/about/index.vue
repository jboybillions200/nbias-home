<template>
  <Layout>
    <Hero />
    <Reg />
    <Heros />
  </Layout>
</template>

<script setup>
import Layout from "@/layouts/layout.vue";
import Hero from "@/pages/about/hero.vue";
import Heros from "./about.vue";
import Reg from "./reg.vue";
</script>
