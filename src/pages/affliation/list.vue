<script setup>
const centers = [
  {
    name: "College of Arabic and Islamic Studies, Yola",
    center: "Examination Center A",
    state: "Adamawa",
    capacity: 250,
  },
  {
    name: "College of Arabic and Islamic Studies, Zaria",
    center: "Examination Center B",
    state: "Kaduna",
    capacity: 180,
  },
  {
    name: "College of Arabic and Islamic Studies, Ilorin",
    center: "Examination Center C",
    state: "Kwara",
    capacity: 300,
  },
];
</script>

<template>
  <section class="w-full ">
    <h2
      class="text-xl md:text-2xl lg:text-4xl font-extrabold text-primary3 italic text-center mt-10 mb-8"
    >
      List of Affiliated Centers Across the Country
    </h2>

    <div class="w-full px-4 md:px-8 mb-20">
      <div class="relative w-full overflow-x-auto">
        <table
          class="w-full border border-gray-200  overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          <!-- TABLE HEAD -->
          <thead class="bg-primary3 text-white">
            <tr class="uppercase tracking-wide">
              <th class="px-10 py-6 text-sm font-semibold text-center">S/N</th>
              <th class="px-10 py-6 text-sm font-semibold text-center">
                Center Name
              </th>
              <th class="px-10 py-6 text-sm font-semibold text-center">
                Institution
              </th>
              <th class="px-10 py-6 text-sm font-semibold text-center">
                State
              </th>
              <th class="px-10 py-6 text-sm font-semibold text-center">
                Capacity
              </th>
            </tr>
          </thead>

          <!-- TABLE BODY -->
          <tbody class="bg-white divide-y divide-gray-100">
            <tr
              v-for="(center, index) in centers"
              :key="index"
              class="hover:bg-gray-50 hover:cursor-pointer transition"
            >
              <td class="px-10 py-8 text-sm text-center font-medium">
                {{ index + 1 }}
              </td>
              <td class="px-10 py-8 text-sm text-center">
                {{ center.center }}
              </td>
              <td class="px-10 py-8 text-sm text-center whitespace-normal">
                {{ center.name }}
              </td>
              <td class="px-10 py-8 text-sm text-center">
                {{ center.state }}
              </td>
              <td
                class="px-10 py-8 text-sm text-center font-semibold text-primary3"
              >
                {{ center.capacity }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
