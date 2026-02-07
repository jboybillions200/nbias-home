<script setup>
import { ref, computed, watch } from "vue";
import rawCenters from "@/components/data/centers";

// ✅ FIX: wrap dummy data in a ref
const centers = ref(rawCenters.centers);

// STATES DROPDOWN
const states = computed(() => {
  return [...new Set(centers.value.map((c) => c.state))];
});

// UI STATE
const selectedState = ref("");
const searchQuery = ref("");
const loading = ref(false);

// PAGINATION
const currentPage = ref(1);
const perPage = ref(10);

// WATCH STATE CHANGE
watch(selectedState, () => {
  searchQuery.value = "";
  currentPage.value = 1;
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
  }, 600);
});

// FILTER BY STATE
const stateCenters = computed(() => {
  if (!selectedState.value) return [];
  return centers.value.filter((c) => c.state === selectedState.value);
});

// SEARCH WITHIN STATE
const filteredCenters = computed(() => {
  if (!searchQuery.value) return stateCenters.value;

  const q = searchQuery.value.toLowerCase();
  return stateCenters.value.filter(
    (c) =>
      c.name.toLowerCase().includes(q) || c.centerNo.toLowerCase().includes(q),
  );
});

// PAGINATION
const totalPages = computed(() =>
  Math.ceil(filteredCenters.value.length / perPage.value),
);

const paginatedCenters = computed(() => {
  const start = (currentPage.value - 1) * perPage.value;
  return filteredCenters.value.slice(start, start + perPage.value);
});

// NAVIGATION
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
</script>

<template>
  <section class="w-full">
    <h2
      class="text-xl md:text-2xl lg:text-4xl font-extrabold text-primary3 italic text-center mt-10 mb-8"
    >
      NBAIS LIST OF UPDATED CENTERS
    </h2>
    <section class="flex flex-wrap items-center justify-start gap-4 px-4 mb-6">
      <!-- STATE SELECT -->
      <div class="relative">
        <select
          v-model="selectedState"
          class="w-40 text-xs px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary3 transition"
        >
          <option value="" disabled>Select a State</option>
          <option v-for="state in states" :key="state" :value="state">
            {{ state }}
          </option>
        </select>
      </div>

      <!-- SEARCH INPUT -->
      <div v-if="selectedState" class="relative">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search by center name or number"
          class="w-72 text-xs px-3 py-2 border rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary3 transition"
        />
      </div>
    </section>

    <div class="w-full px-4 mb-20">
      <div class="relative w-full overflow-x-auto">
        <table
          class="w-full border border-gray-200 overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <!-- TABLE HEAD -->
          <thead class="bg-primary3 text-white">
            <tr class="uppercase tracking-wide">
              <th class="px-6 py-3 text-xs font-bold text-center">S/N</th>
              <th class="px-6 py-3 text-xs font-bold text-center">
                Center Name
              </th>
              <th class="px-6 py-3 text-xs font-bold text-center">State</th>
              <th class="px-6 py-3 text-xs font-bold text-center">
                Center Number
              </th>
            </tr>
          </thead>
          <tr v-if="loading">
            <td colspan="4" class="text-center py-6 text-gray-500">
              Loading centers...
            </td>
          </tr>
          <!-- TABLE BODY -->
          <tbody class="bg-white divide-y divide-gray-100">
            <tr
              v-for="(center, index) in paginatedCenters"
              :key="center.centerNo"
              class="hover:bg-gray-50 transition"
            >
              <td class="px-6 py-3 text-xs text-center font-medium">
                {{ (currentPage - 1) * perPage + index + 1 }}
              </td>
              <td class="px-6 py-3 text-xs text-left uppercase">
                {{ center.name }}
              </td>
              <td class="px-6 py-3 text-xs text-center">
                {{ center.state }}
              </td>
              <td class="px-6 py-3 text-xs text-center">
                {{ center.centerNo }}
              </td>
            </tr>
            <tr v-if="selectedState && !loading && !paginatedCenters.length">
              <td colspan="4" class="text-center py-6 text-gray-400">
                No centers found for this state
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

<!-- PAGINATION CONTROLS -->
<div
  v-if="paginatedCenters.length && !loading"
  class="flex flex-wrap items-center justify-end gap-4 mt-6 mb-6 px-4"
>
  <!-- Previous Button -->
  <button
    @click="prevPage"
    :disabled="currentPage === 1"
    class="px-6 py-2 border text-xs font-bold rounded-md bg-white text-gray-700
           hover:bg-primary3 hover:text-white transition
           disabled:opacity-50 disabled:cursor-not-allowed"
  >
    Prev
  </button>

  <!-- Page Indicator -->
  <span class="text-gray-700 text-xs">
    Page <span class="font-semibold">{{ currentPage }}</span> of <span class="font-semibold">{{ totalPages }}</span>
  </span>

  <!-- Next Button -->
  <button
    @click="nextPage"
    :disabled="currentPage === totalPages"
    class="px-6 py-2 border text-xs font-bold rounded-md bg-white text-gray-700
           hover:bg-primary3 hover:text-white transition
           disabled:opacity-50 disabled:cursor-not-allowed"
  >
    Next
  </button>
</div>

</template>
