<script setup>
const biography = {
  title: "Biography of Professor Yahuza Suleiman. Imam",
  bio: `Professor Yahuza S. Imam (born 20 May 1974, Zaria, Nigeria) is the Registrar and Chief Executive Officer of the National Board for Arabic and Islamic Studies (NBAIS), Nigeria. He is a distinguished scholar of Arabic linguistics and Islamic studies, with extensive academic, administrative, and international experience.
`,
  education: `Professor Imam began his early education and foundational Arabic studies in Zaria, where he obtained the Junior Arabic and Islamic Studies Certificate. He subsequently proceeded to Cairo, Egypt, to pursue secondary education at the Al-Azhar Institute, a formative period that established the intellectual grounding for his academic career.
He earned a Bachelor’s degree in Arabic from Al-Azhar University, Cairo, and later obtained a Postgraduate Diploma from the Institute of Arab Research and Studies. He further completed a Master’s degree in Arabic Linguistics and a Doctorate (PhD) from the same institute, specializing in advanced Arabic language studies and linguistics.`,
  service: `Professionally, Professor Imam has served in both academic and media institutions in Egypt, including appointments at several universities in Cairo and at Cairo Radio and Television. Upon his return to Nigeria, he joined Ahmadu Bello University (ABU), Zaria, where he rose through the academic ranks in the Department of Arabic—serving as Lecturer I, Senior Lecturer, and Reader between 2008 and 2014—and was promoted to the rank of Professor in 2019.
He is an active member of key professional bodies, notably the Nigerian Association of Teachers of Arabic and Islamic Studies.`,
contributions:`Professor Imam has also contributed significantly to quality assurance in higher education, serving as an External Examiner to Bayero University Kano, Usman Danfodio University, and Umaru Musa Yar’adua University between 2014 and 2016. His scholarly engagement includes participation in numerous national and international conferences, with over 13 conference papers and 11 post-promotion papers presented.
With a record of 27 peer-reviewed publications in reputable national and international journals, Professor Imam has made substantial contributions to Arabic linguistics and Islamic studies. His academic excellence was recognized early with the Merit Award for Best Student at Al-Azhar University in 1996, 1997, and 1998.
Professor Yahuza Suleiman.`,
status:"Imam is married and blessed with children."
};
</script>
<template>
  <section
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto px-4"
  >
    <!-- ===== LEFT: SCROLLING TEXT ===== -->
    <div class="space-y-12 py-10">
      <!-- Profile Overview -->
      <div>
        <h2 class="text-xl md:text-3xl font-bold text-primary3 uppercase italic mb-4">
          Profile
        </h2>
        <p class="text-gray-600 text-[16px] leading-[2.5rem]">
          {{ biography.bio }}
        </p>
      </div>

      <!-- Educational Background -->
      <div>
        <h2 class="text-xl md:text-3xl font-bold text-primary3 uppercase italic mb-4">
          Educational Background
        </h2>
        <p class="text-gray-600 text-[16px] leading-[2.5rem]">
          {{ biography.education }}
        </p>
      </div>

      <!-- Academic & Professional Experience -->
      <div>
        <h2 class="text-xl md:text-3xl font-bold text-primary3 uppercase italic mb-4">
          Academic and Professional Experience
        </h2>
        <p class="text-gray-600 text-[16px] leading-[2.5rem]">
          {{ biography.service }}
        </p>
      </div>

      <!-- Scholarly Contributions -->
      <div>
        <h2 class="text-xl md:text-3xl font-bold text-primary3 uppercase italic mb-4">
          Scholarly Contributions and Service
        </h2>
        <p class="text-gray-600 text-[16px] leading-[2.5rem]">
          {{ biography.contributions }}
        </p>
      </div>

      <!-- Personal Status -->
      <div>
        <h2 class="text-xl md:text-3xl font-bold text-primary3 uppercase italic mb-4">
          Personal Status
        </h2>
        <p class="text-gray-600 text-[16px] leading-[2.5rem]">
          {{ biography.status }}
        </p>
      </div>
    </div>

    <!-- ===== RIGHT: STICKY IMAGE ===== -->
    <div class="relative hidden lg:block">
      <div class="sticky top-24">
        <img
          src="@/assets/staffs/reg.jpeg"
          alt="Profile Image"
          class="w-full h-full object-cover shadow-lg"
        />
      </div>
    </div>
  </section>
</template>
