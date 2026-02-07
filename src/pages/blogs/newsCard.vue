<script setup>
import NewsCard from "@/components/newscard.vue";
import { newsData } from "@/components/data/newData";
</script>

<template>
  <section>
    <h1 class="text-3xl font-bold text-center py-8 text-primary3 italic">Latest News & Updates</h1>
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
