<template>
  <div>
    <NewsFilter 
      :categories="newsCategories" 
      @filter="filterNews" 
    />

    <section class="py-12 bg-gray-50">
      <div class=" px-4 sm:px-6">
        <!-- Featured Articles Section -->
        <div v-if="featuredArticles.length > 0" class="mb-12">
          <h2 class="text-2xl font-bold text-primary1 mb-6">Featured Stories</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <NewsCard 
              v-for="article in featuredArticles"
              :key="article.id"
              :article="article"
              @readMore="openArticle(article.id)"
            />
          </div>
        </div>

        <!-- All Articles Section -->
        <!-- <h2 class="text-2xl font-bold text-primary1 mb-6">
          {{ activeCategory === 'All Updates' ? 'Latest Updates' : `${activeCategory} News` }}
        </h2> -->
        
        <div v-if="filteredArticles.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-3">
          <NewsCard 
            v-for="(article, index) in filteredArticles"
            :key="article.id"
            :article="article"
            @readMore="openArticle(article.id)"
            :data-aos-delay="(index % 3) * 100"
          />
        </div>
        
        <div v-else class="text-center py-8 bg-white rounded-lg shadow-sm">
          <p class="text-gray-500">No articles found in this category</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { newsData } from '@/components/data/newData'
import NewsFilter from './newsFilter.vue'
import NewsCard from './newsCard.vue'

const router = useRouter()
const activeCategory = ref('All Updates')

// Get unique categories
const newsCategories = computed(() => [
  'All Updates',
  ...new Set(newsData.map(item => item.category))
])

const filterNews = (category) => {
  activeCategory.value = category
}

const featuredArticles = computed(() => 
  newsData.filter(article => article.featured)
)

const filteredArticles = computed(() => {
  if (activeCategory.value === 'All Updates') {
    return newsData.filter(article => !article.featured)
  }
  return newsData.filter(article => 
    !article.featured && article.category === activeCategory.value
  )
})

const openArticle = (id) => {
  router.push({ name: 'news-details', params: { id } })
}
</script>