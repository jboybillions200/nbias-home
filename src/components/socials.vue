<script setup>
import { ref, watch, nextTick } from "vue";

const activeTab = ref("facebook");
const twitterLoaded = ref(false);

watch(activeTab, async (tab) => {
  if (tab === "twitter" && !twitterLoaded.value) {
    await nextTick();
    if (!window.twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.twttr.widgets.load();
    }
    twitterLoaded.value = true;
  }
});
</script>

<template>
  <section class="bg-white rounded-xl shadow-md p-4">
    <h2 class="text-xl md:text-2xl lg:text-4xl font-extrabold text-primary3 italic text-center mt-10 mb-8">
      NBAIS Social Updates
    </h2>

    <!-- Tabs -->
    <div class="flex justify-center px-12 mx-auto lg:gap-12 mb-4">
      <button @click="activeTab='facebook'" :class="activeTab==='facebook'? 'bg-primary3 text-white':'bg-gray-100 text-gray-700'" class="px-4 py-2 text-sm rounded-lg transition">Facebook</button>
      <button @click="activeTab='twitter'" :class="activeTab==='twitter'? 'bg-primary3 text-white':'bg-gray-100 text-gray-700'" class="px-4 py-2 text-sm rounded-lg transition">X</button>
      <button @click="activeTab='youtube'" :class="activeTab==='youtube'? 'bg-primary3 text-white':'bg-gray-100 text-gray-700'" class="px-4 py-2 text-sm rounded-lg transition">YouTube</button>
    </div>

    <!-- Facebook -->
    <div v-show="activeTab==='facebook'">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/FacebookDevelopers&tabs=timeline&height=600&small_header=false&adapt_container_width=true&hide_cover=false"
        width="100%"
        height="500"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>

    <!-- Twitter / X -->
    <div v-show="activeTab==='twitter'">
      <a class="twitter-timeline" data-height="600" data-theme="light" href="https://twitter.com/TwitterDev">
        Tweets by TwitterDev
      </a>
    </div>

    <!-- YouTube -->
    <div v-show="activeTab==='youtube'">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/videoseries?list=PL590L5WQmH8fJ54FvXl8xjCz1yU0NhQhX"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>
