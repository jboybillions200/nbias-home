<script setup>
import NewsCard from "@/components/newscard.vue";
import { newsData } from "@/components/data/newData";
</script>

<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8 px-4">
      <NewsCard
        v-for="article in newsData"
        :key="article.id"
        :title="article?.title"
        :image="article?.image"
        :category="article?.category"
      />
    </div>
  </section>
</template>
