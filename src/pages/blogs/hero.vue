<script setup>
import background from "@/assets/bg/5.png";
import HeroComponent from "@/components/heroComponent.vue";
const hero = {
  bgImage: background,
  title: " NBAIS Blogs",
}
</script>

<template>
<HeroComponent
  :bgImage="hero?.bgImage"
  :alttitle="hero?.title"
 />
</template>
