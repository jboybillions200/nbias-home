<template>
  <Layout>
    <Header/>
    <Pillers/>
    <Reg/>
    <Vision/>
    <News/>
    <!-- <Facilities/>
    <Testimonials /> -->
  </Layout>
</template>

<script setup>
import Layout from "@/layouts/layout.vue"
import Header from '@/pages/home/carousel.vue'
import Pillers from '@/pages/home/insight.vue'
import Vision from "./vision.vue";
import News from "./news.vue";
import Reg from "./reg.vue";
// import Facilities from '@/pages/home/facilities.vue'
// import Testimonials from '@/pages/home/testimony.vue'
</script>