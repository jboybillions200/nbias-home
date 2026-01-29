<template>
  <Layout>
  <div class=" py-6 px-4 md:px-6 lg:px-10">
   

    <div v-if="article">
      <article>
        <!-- Article Header -->
        <header class="mb-8">
          <span class="inline-block px-4 py-1 font-medium bg-green-100 text-green-900 rounded text-sm mb-4">
            {{ article.category }}
          </span>
          <h1 class="text-lg md:text-xl lg:text-2xl font-bold text-primary1 uppercase mb-4 leading-tight">
            {{ article.title }}
          </h1>
          <div class="flex items-center text-gray-500">
            <Calendar class="w-5 h-5 mr-2 " />
            <time>{{ formatDate(article.date) }}</time>
          </div>
        </header>

        <!-- Featured Image -->
        <img 
          :src="article.image" 
          :alt="article.title"
          class="w-full h-auto rounded-xl shadow-md mb-8"
        >

        <!-- Article Content -->
        <div class="prose max-w-none text-gray-700">
          <!-- Excerpt -->
          <p class=" text-justify mb-6 tracking-wider">{{ article.excerpt }}</p>

          <!-- Highlights -->
          <div v-if="article.highlights" class="bg-green-50 p-6 rounded-xl mb-8">
            <h3 class="text-lg font-bold text-green-800 mb-4 flex items-center">
              <Star class="w-5 h-5 mr-2" /> Key Achievements
            </h3>
            <ul class="space-y-3 text-sm ">
              <li v-for="(item, index) in article.highlights" :key="index" class="flex items-start">
                <span class="text-green-600 mr-2 mt-1">•</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Stats -->
          <div v-if="article.stats" class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div 
              v-for="(value, key) in article.stats" 
              :key="key"
              class="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center"
            >
              <p class="text-2xl font-bold text-green-700">{{ value }}</p>
              <p class="text-sm text-gray-600 capitalize">{{ key.replace('_', ' ') }}</p>
            </div>
          </div>

          <!-- Quranic/Hadith Reference -->
          <div class="border-l-4 border-green-600 pl-4 my-8 bg-green-50/50 p-4 rounded-r">
            <h3 class="font-bold text-green-800 mb-2">Islamic Perspective</h3>
            <p class="text-gray-700 italic">
              "And do not commit abuse on the earth, spreading corruption." 
              <span class="block text-sm mt-1 not-italic text-gray-600">- Quran 2:60</span>
            </p>
          </div>

          <!-- Impact Section -->
          <div v-if="article.impact" class="mb-8">
            <h3 class="text-lg font-bold text-green-800 mb-4 flex items-center">
              <BarChart2 class="w-5 h-5 mr-2" /> Community Impact
            </h3>
            <div class="space-y-4">
              <div v-for="(value, key) in article.impact" :key="key" class="flex">
                <span class="font-medium text-gray-800 w-1/3 capitalize text-sm">{{ key.replace('_', ' ') }}:</span>
                <span class="text-gray-700 text-sm">{{ value }}</span>
              </div>
            </div>
          </div>

          <!-- Resources -->
          <!-- <div v-if="article.resources" class="mt-10">
            <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <Download class="w-5 h-5 mr-2" /> Resources
            </h3>
            <div class="space-y-2">
              <a 
                v-for="(resource, index) in article.resources" 
                :key="index"
                href="#"
                class="flex items-center text-green-700 hover:text-green-800 hover:underline"
              >
                <FileText class="w-4 h-4 mr-2" /> {{ resource }}
              </a>
            </div>
          </div> -->
        </div>

        <!-- Share Buttons -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <h4 class="text-sm font-medium text-gray-800 mb-4">Share this article:</h4>
          <div class="flex space-x-4">
            <button class="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition">
              <Facebook class="w-5 h-5" />
            </button>
            <button class="p-2 bg-primary1/10 text-primary1/90 rounded-full hover:bg-primary1/40 transition">
              <Instagram class="w-5 h-5" />
            </button>  
            <button class="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition">
              <Link class="w-5 h-5" />
            </button>
          </div>
        </div>
      </article>
    </div>

    <div v-else class="text-center py-20">
      <AlertCircle class="w-12 h-12 mx-auto text-red-500 mb-4" />
      <p class="text-xl text-gray-700">Article not found</p>
      <button 
        @click="$router.push('/news')"
        class="mt-4 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
      >
        Browse All News
      </button>
    </div>
    <p class="flex justify-end hover:duration-300 hover:transition ">
      <router-link to="/news" class="bg-primary1 hover:bg-primary5/90 flex p-3 hover:animate-bounce rounded ">
        <Undo2 class="size-5 mr-1 text-white  " /><span class="text-white text-sm font-bold">Go Back</span>
      </router-link>
    </p>
   
  </div>
  </Layout>
</template>

<script setup>
import Layout from '@/layouts/layout.vue'
import { useRoute } from 'vue-router'
import { newsData } from '@/components/data/newData'
import { 
  Undo2 , 
  Calendar, 
  Star, 
  BarChart2, 
  Download, 
  FileText, 
  Facebook, 
  Link,
  AlertCircle ,
  Instagram
} from 'lucide-vue-next'

const route = useRoute()
const articleId = parseInt(route.params.id)
const article = newsData.find(item => item.id === articleId)

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('en-US', options)
}
</script>

<style scoped>

  
</style>