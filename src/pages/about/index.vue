<template>
  <Layout>
    <Hero />
    <Reg />

    <Heros />
    <!-- <Vision/> -->
  </Layout>
</template>

<script setup>
import Layout from "@/layouts/layout.vue";
import Hero from "@/pages/about/header.vue";
import Heros from "./about.vue";
import Reg from "./reg.vue";
// import Vision from "../home/vision.vue";
</script>
