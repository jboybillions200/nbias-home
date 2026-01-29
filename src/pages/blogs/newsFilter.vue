<template>
  <div class="bg-gray-50 py-8 sticky top-0 z-10 shadow-sm">
    <div class="container mx-auto px-6">
      <div class="max-w-5xl mx-auto">
        <!-- Single instruction text -->
        <p class="text-primary3 italic text-xl font-medium text-center mb-4">
          Please select to get latest upadte 
        </p>
        <Multiselect
          v-model="selectedCategory"
          :options="categories"
          placeholder="Select news from category"
          @select="setActiveCategory"
          :searchable="true"
          class="form-control text-sm"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Multiselect from "@vueform/multiselect";

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["filter"]);
const selectedCategory = ref("All Updates");

const setActiveCategory = (category) => {
  selectedCategory.value = category;
  emit("filter", category);
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style>

</style>
