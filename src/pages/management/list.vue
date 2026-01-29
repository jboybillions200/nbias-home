<script setup>
import staffData from "@/components/data/staffData";
import Team from "@/components/Team.vue";
</script>

<template>
  <section class="py-12 px-4">
    <h2
      class="text-xl md:text-2xl lg:text-4xl font-extrabold text-primary3 italic text-center mb-12"
    >
      Directors & Senior Management
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Team
        v-for="member in staffData.staff"
        :key="member.id"
        :id="member.id"
        :name="member.name"
        :title="member.title"
        :description="member.description"
        :image="member.image"
      />
    </div>
  </section>
</template>
