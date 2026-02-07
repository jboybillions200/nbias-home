<template>
  <Layout>
    <Carousel/>
    <Pillers/>
    <Reg/>
    <Vision/>
    <News/>
  </Layout>
</template>

<script setup>
import Layout from "@/layouts/layout.vue"
import Carousel from '@/pages/home/carousel.vue'
import Pillers from '@/pages/home/insight.vue'
import Vision from "./vision.vue";
import News from "./news.vue";
import Reg from "./reg.vue";
</script>