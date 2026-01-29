<script setup>
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

import {
  BadgeCheck,
  ShieldCheck,
  MapPin,
  Award
} from 'lucide-vue-next'

const targets = [
  {
    title: "CERTIFICATION",
    description:
      "NBAIS provides officially recognized certification for SAISSCE, Tahfeez, and Science examinations.",
    icon: Award,
  },
  {
    title: "ACCREDITED",
    description:
      "NBAIS is duly accredited by relevant national educational authorities.",
    icon: ShieldCheck,
  },
  {
    title: "NATIONWIDE",
    description:
      "NBAIS examinations are conducted across states nationwide.",
    icon: MapPin,
  },
  {
    title: "QUALITY",
    description:
      "High standards are upheld in all examination and certification processes.",
    icon:BadgeCheck ,
  },
]
</script>

<template>
  <section class="py-4 md:py-16 bg-gray-50">
    <div class=" px-4 ">
     <h2
        class="text-xl md:text-4xl lg:text-6xl font-extrabold mb-10 text-primary italic text-center text-primary3 capitalize"
      >
      pillers of excellence
      </h2>

      <Carousel 
        class="relative w-full "
        :opts="{ 
          align: 'start',
          loop: true,
          duration: 30
        }" 
        :plugins="[Autoplay({ delay: 3500 })]"
      >
        <CarouselContent class="-ml-4">
          <CarouselItem 
            v-for="(target, index) in targets" 
            :key="index" 
            class="pl-4 md:basis-1/2 lg:basis-1/4"
            data-aos="zoom-in"
            :data-aos-delay="index * 100"
          >
            <div class="h-full">
              <Card class="h-full transition-all duration-500 hover:scale-[1.03] hover:shadow-xl group hover:cursor-pointer">
                <CardContent class="flex flex-col items-center justify-center p-6 text-center bg-white rounded shadow-lg h-full border-2 border-transparent hover:border-primary3/10 transition-all duration-300">
                  <div class="mb-6 p-4 bg-primary3/10 rounded-full group-hover:bg-primary3/10 transition-all duration-300">
                    <component 
                      :is="target.icon" 
                      class="size-7 text-primary3 group-hover:text-primary3 transition-all duration-300" 
                      stroke-width="1.5"
                    />
                  </div>
                  <h3 class="text-[18px] font-bold mb-3 text-primary3">{{ target.title }}</h3>
                  <p class="text-gray-600 text-[14px] " style="line-height: 2rem;">{{ target.description }}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <!-- <CarouselPrevious class="hidden md:flex left-0 bg-primary3 hover:bg-primary3 text-white border-none shadow-md" />
        <CarouselNext class="hidden md:flex right-0 bg-primary3 hover:bg-primary3 text-white border-none shadow-md" /> -->
      </Carousel>
    </div>
  </section>
</template>

