<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";
import infoData from "@/components/data/infoData";
import { Phone, MapPin, Mail } from "lucide-vue-next";
const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const submitMessage = ref("");

const submitForm = async () => {
  isSubmitting.value = true;

  try {
    await emailjs.send(
      "service_87ura58",
      "template_mum8v9h",
      // {
      //   from_name: form.value.name,
      //   email: form.value.email,
      //   subject: form.value.subject,
      //   message: form.value.message,
      // },
      {
        from_name: form.value.name,
        from_email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
      },

      "jPdGEjxUe_DyCM-8g",
    );

    submitMessage.value = "Thank you! Your message has been sent successfully.";
    form.value = { name: "", email: "", subject: "", message: "" };
  } catch (error) {
    submitMessage.value = "Failed to send message. Please try again.";
    console.error(error);
  } finally {
    isSubmitting.value = false;
    setTimeout(() => (submitMessage.value = ""), 5000);
  }
};
</script>

<template>
  <section class="py-4 bg-white">
    <div class="px-4">
      <div class="grid md:grid-cols-2 gap-6 md:gap-4">
        <!-- Form -->
        <div class="bg-gray-50 p-4 rounded shadow-sm" data-aos="fade-up">
          <h2 class="text-xl font-semibold text-primary3/90 mb-6">
            Send Us a Message
          </h2>

          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label
                for="name"
                class="block text-primary3 font-medium text-xs mb-2"
                >Full Name *</label
              >
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-50 focus:ring-2 outline-none focus:ring-primary3 focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                for="email"
                class="block text-primary3 font-medium text-xs mb-2"
                >Email *</label
              >
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-50 focus:ring-2 outline-none focus:ring-primary3 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                for="subject"
                class="block text-primary3 font-medium text-xs mb-2 outline-none"
                >Subject *</label
              >
              <input
                type="subject"
                id="subject"
                v-model="form.subject"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-50 focus:ring-2 outline-none focus:ring-primary3 focus:border-transparent"
                placeholder="Reason for sending message"
              />
            </div>

            <div>
              <label
                for="message"
                class="block text-primary3 font-medium text-xs mb-2"
                >Message *</label
              >
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
                class="w-full px-4 py-3 rounded-lg border border-gray-50 focus:ring-2 outline-none focus:ring-primary3 focus:border-transparent"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="px-8 py-3 bg-primary3 text-gray-100 rounded-lg font-bold hover:bg-none hover:animate-bounce transition duration-300"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else>Sending...</span>
            </button>

            <p v-if="submitMessage" class="mt-4 text-primary3">
              {{ submitMessage }}
            </p>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8 px-2" data-aos="fade-up">
          <div>
            <h3 class="text-xl font-semibold text-primary3/90 mb-4">
              Contact Information
            </h3>
            <p class="mb-6">Reach out for general questions and Enquiries</p>
          </div>

          <div class="space-y-6">
            <div class="flex items-start">
              <div class="text-primary3/90 mr-4 mt-1">
                <Mail class="size-4" />
              </div>
              <div>
                <h4 class="font-medium text-sm mb-2">Email</h4>
                <a
                  :href="`mailto:${_}`"
                  class="text-gray-700 hover:text-gray-400 transition text-xs"
                  v-for="(_, index) in infoData?.about?.email"
                  :key="index"
                >
                  {{ _ }}
                </a>
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-gray-100 mr-4 mt-1">
                <Phone class="size-4 text-primary3/90" />
              </div>
              <div>
                <h4 class="font-medium text-sm mb-2">Phone</h4>
                <a
                  href="tel:+2348000000000"
                  class="text-gray-700 4 transition text-xs mr-2"
                  v-for="(phoneNumber, index) in infoData?.about?.phone"
                  :key="index"
                >
                  {{ phoneNumber }}
                </a>
              </div>
            </div>

            <div class="flex items-start">
              <div class="text-gray-100 mr-4 mt-1">
                <MapPin class="size-4 text-primary3/90" />
              </div>
              <div>
                <h4 class="font-medium text-sm mb-2">Address</h4>
                <p class="text-gray-700 text-xs capitalize">
                  {{ infoData?.about?.address }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
