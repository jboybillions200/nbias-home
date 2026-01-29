<template>
  <Layout>
    <!-- Header Section -->
    <ProfileHeader />
    <section class="py-20 px-4 md:px-8 bg-gray-50">   
      <div>
        <Background />
        <!-- <Academics />
        <Publication />
        <Service />
        <Personality /> -->
      </div>  
    </section>
  </Layout>
</template>
<script setup>
import Layout from "@/layouts/layout.vue";
import ProfileHeader from "./hero.vue";
import Background from "./background.vue";
// import Academics from "./academics.vue";
// import Publication from "./publication.vue";
// import Service from "./service.vue";
// import Personality from "./personality.vue";
</script>

<style scoped>
button {
  transition: all 0.3s ease;
}
</style>
