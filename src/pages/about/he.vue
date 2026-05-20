<script setup>
import background from "@/assets/bg/5.jpeg";
import HeroComponent from "@/components/heroComponent.vue";
const hero = {
  bgImage: background,
  title: "About NBAIS",
}
</script>

<template>
<HeroComponent
  :bgImage="hero?.bgImage"
  :alttitle="hero?.title"
 />
</template>
