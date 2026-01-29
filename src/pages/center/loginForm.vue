<script setup lang="ts">
import { Lock, Mail, User,ArrowLeft } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100 p-4">
    <div class="w-full max-w-xl">
      <!-- Logo Section with subtle glow effect -->
      <div class="mb-4 md:mb-8 flex flex-col items-center gap-3">
        <div class="flex items-center justify-center rounded-full bg-primary1/10 p-3 backdrop-blur-sm">
          <div class="rounded-full bg-primary1/20 p-3 backdrop-blur-sm">
            <img 
              src="@/assets/images/lg.png" 
              alt="Ma'aliq Islamic Academy Logo"
              class="h-12 w-12 object-contain drop-shadow-lg"
            >
          </div>
        </div>
        <h1 class= "text-lg md:text-2xl font-bold text-primary2">Ma'aliq <span class="text-primary3">Islamic Academy</span></h1>
      </div>

      <!-- Login Card with layered transparency -->
      <Card class="border border-primary1/20 bg-white backdrop-blur-md shadow-lg">
        <CardHeader class="text-center space-y-2">
          <CardTitle class="text-2xl font-semibold text-primary1">
            Welcome Back
          </CardTitle>
          <CardDescription class="text-primary3/80">
            Please enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form class="space-y-5">
            <!-- Email Field -->
            <div class="space-y-2">
              <Label class="text-sm font-medium text-primary3" html-for="email">Email Address <span class="text-primary2">*</span></Label>
              <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail class="h-5 w-5 text-primary1/80" />
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="student@maaliq.edu"
                  required
                  class="bg-white/5 border-primary1/20 pl-10 text-primary2 placeholder-primary3/50 focus:border-primary1 focus:ring-1 focus:ring-primary1/30"
                />
              </div>
            </div>

            <!-- Password Field -->
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <Label class="text-sm font-medium text-primary3" html-for="password">Password <span class="text-primary2">*</span></Label>
                <router-link
                  to="#"
                  class="text-xs font-medium text-primary3/70 hover:text-primary1 hover:underline"
                >
                  Forgot password?
                </router-link>
              </div>
              <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock class="h-5 w-5 text-primary1/80" />
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  class="bg-white/5 border-primary1/20 pl-10 text-primary2 placeholder-primary3/50 focus:border-primary1 focus:ring-1 focus:ring-primary1/30"
                />
              </div>
            </div>

            <!-- Login Button with beautiful transition -->
            <Button 
              type="submit" 
              class="w-full bg-primary2/90 text-white hover:bg-primary3 transition-all duration-300 hover:shadow-lg hover:shadow-primary1/20"
            >
              Login
            </Button>

            <!-- Sign Up Link with subtle divider -->
            <div class="relative mt-6">
              <div class="absolute inset-0 flex items-center">
              </div>
              <div class="relative flex justify-center text-xs">
                <span class="bg-white/5 px-2 text-primary3/70">
                  New to Ma'aliq?
                </span>
              </div>
            </div>
            <router-link
              to="/register"
              class="mt-4 flex w-full items-center justify-center gap-1 rounded-md border border-primary1/20 bg-transparent px-4 py-2 text-sm font-medium text-primary3 transition-all hover:border-primary1/40  hover:text-primary1"
            >
              <User class="h-4 w-4" />
              Create new account
            </router-link>

             <!-- Go Back to Home Link -->
            <router-link
              to="/"
              class="mt-2 flex w-full items-center justify-center gap-1 text-sm font-medium text-primary3/70 transition-all hover:text-primary1"
            >
              <ArrowLeft class="size-4 hover:translate-x-2 hover:transition-all"/>
              Go back to home page
            </router-link>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
</template>