<template>
  <Layout class="mt-4">
    <Hero />
    <Reg />
    <Core />
  </Layout>
</template>

<script setup>
import Layout from "@/layouts/layout.vue";
import Hero from "@/pages/about/hero.vue";
import Core from "./m&v.vue";
import Reg from "./reg.vue";
</script>
