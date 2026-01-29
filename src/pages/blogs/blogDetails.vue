<script setup>
import { useRoute } from "vue-router";
import { useNewsFeed } from "@/components/composable";

const route = useRoute();
const { getById } = useNewsFeed();

const article = getById(route.params.id);
</script>

<template>
  <section v-if="article" class="max-w-3xl mx-auto py-12">
    <h1 class="text-4xl font-bold mb-4">
      {{ article.title }}
    </h1>

    <p class="text-gray-500 mb-6">
      {{ article.date }} • {{ article.category }}
    </p>

    <img
      :src="article.image"
      class="w-full rounded-lg mb-6"
    />

    <div class="leading-relaxed text-gray-700">
      {{ article.content }}
    </div>
  </section>

  <p v-else class="text-center text-red-500">
    Article not found
  </p>
</template>
