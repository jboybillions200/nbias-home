<script setup>
import { ref } from "vue";
import { LockOpen, LogInIcon, UserPlus, KeySquare, Key } from "lucide-vue-next";
import PrimaryButton from "@/components/primarybutton.vue";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const mode = ref("login");

const form = ref({
  pin: "",
});
</script>

<template>
  <section class="relative min-h-screen w-full overflow-hidden">
    <!-- ===== BACKGROUND ===== -->
    <div class="absolute inset-0">
      <img
        src="@/assets/images/bg2.jpg"
        alt=""
        class="w-full h-full object-cover"
      />
    </div>

    <div class="absolute inset-0 bg-black/30 shadow-lg"></div>

    <!-- ===== CARD ===== -->
    <div
      class="relative z-10 min-h-screen flex items-center justify-center px-4 py-8 shadow-lg"
    >
      <Card class="w-full max-w-6xl border-0 backdrop-blur-xl bg-gray-50">
        <div class="grid lg:grid-cols-2 h-full overflow-hidden">
          <!-- ===== LEFT PANEL (LOCKED HEIGHT) ===== -->
          <div class="relative h-full hidden lg:flex">
            <!-- Background image -->
            <div class="absolute inset-0">
              <img
                src="@/assets/images/bg-pattern.png"
                alt=""
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-primary3/70"></div>
            </div>

            <!-- Content -->
            <div
              class="relative z-10 flex flex-col justify-between p-12 text-white w-full"
            >
              <div class="text-center">
                <h2 class="text-3xl font-extrabold leading-tight">
                  NBAIS Central Portal
                </h2>
              </div>

              <img
                src="/src/assets/illustration/i2.png"
                alt="Illustration"
                class="h-56 mx-auto opacity-95"
              />
              <p class="text-white italic text-sm">
                Secure and authorized access for accredited examination centers.
              </p>
            </div>
          </div>

          <!-- ===== RIGHT PANEL (CONTENT CAN CHANGE SAFELY) ===== -->
          <CardContent
            class="p-10 md:p-14 flex flex-col justify-center bg-gray-200"
          >
            <!-- Logo -->
            <router-link :to="{ name: 'Home' }">
              <div class="mb-4 flex flex-col items-center gap-3">
                <div
                  class="flex items-center justify-center rounded-full bg-primary3/10 p-2 backdrop-blur-sm"
                >
                  <div class="rounded-full bg-primary3/20 p-2 backdrop-blur-sm">
                    <img
                      src="@/assets/nbais-logo.png"
                      alt="Logo"
                      class="h-8 w-8 object-contain drop-shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </router-link>

            <!-- SWITCH -->
            <div class="flex justify-center mb-6">
              <div class="flex bg-gray-100 rounded-full p-1">
                <button
                  @click="mode = 'login'"
                  :class="[
                    'flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full transition-all',
                    mode === 'login'
                      ? 'bg-primary3 text-white shadow'
                      : 'text-gray-500 hover:text-primary3',
                  ]"
                >
                  <LogInIcon class="size-3" />
                  Login
                </button>

                <button
                  @click="mode = 'register'"
                  :class="[
                    'flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full transition-all',
                    mode === 'register'
                      ? 'bg-primary3 text-white shadow'
                      : 'text-gray-500 hover:text-primary3',
                  ]"
                >
                  <UserPlus class="size-3" />
                  Register
                </button>
              </div>
            </div>

            <!-- CONTENT (DOES NOT AFFECT LAYOUT) -->
            <transition name="fade-slide" mode="out-in">
              <div :key="mode" class="max-w-md mx-auto w-full">
                <CardHeader class="px-0 pt-0 text-center">
                  <CardDescription class="text-xl font-bold text-gray-900">
                    {{
                      mode === "login"
                        ? "Welcome Back!"
                        : "Register Your Center"
                    }}
                  </CardDescription>
                </CardHeader>

                <p
                  class="text-center text-gray-500 mb-8 text-sm leading-relaxed"
                >
                  <span v-if="mode === 'login'">
                    Enter your 10-digit PIN to access your center dashboard and
                    manage NBAIS examinations.
                  </span>
                  <span v-else>
                    For affiliated centers registering two or more students for
                    NBAIS examinations. Enter your assigned 10-digit PIN
                  </span>
                </p>

                <form class="space-y-6">
                  <div class="relative">
                    <LockOpen
                      class="absolute size-4 text-primary3 left-3 top-1/2 -translate-y-1/2"
                    />
                    <Input
                      v-model="form.pin"
                      type="password"
                      placeholder="Enter 10-digit PIN"
                      class="h-11 pl-10 rounded-xl text-primary3 border-2 focus-ring:2"
                    />
                  </div>

                  <PrimaryButton
                    :icon1="mode === 'login' ? KeySquare : KeySquare"
                    :icon2="mode === 'login' ? Key : Key"
                    :title="
                      mode === 'login'
                        ? 'Login to Dashboard'
                        : 'Register Center'
                    "
                    class="w-full h-12 bg-primary3 text-white rounded-xl"
                  />
                </form>
              </div>
            </transition>
          </CardContent>
        </div>
      </Card>
    </div>
  </section>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.35s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
