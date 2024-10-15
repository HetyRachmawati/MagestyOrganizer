<template>
  <div class="min-h-screen flex items-center justify-center bg-purple-50 p-4">
    <!-- Card Container -->
    <div class="relative flex flex-col border border-purple-600 shadow-lg p-6 rounded-lg bg-white w-full max-w-md lg:max-w-lg">
      <!-- Tombol Close -->
      <button
        class="absolute top-4 right-4 text-purple-500 hover:text-purple-600 focus:outline-none text-2xl font-bold"
        @click="closeCard"
      >
        ×
      </button>
      <!-- Logo dan Judul -->
      <div class="flex flex-col items-center justify-center mb-6">
        <img src="/img/icon2.png" alt="Magesty Organizer Logo" class="w-24 lg:w-32 mb-4">
        <h1 class="text-purple-500 text-2xl lg:text-3xl font-bold">MAGESTY ORGANIZER</h1>
      </div>
      <!-- Form Register -->
      <div class="w-full">
        <div class="bg-white p-4 rounded-lg shadow-md">
          <h2 class="text-center text-purple-500 text-2xl font-bold mb-4">Register</h2>
          <form @submit.prevent="register" class="space-y-4">
            <!-- Full Name -->
            <div>
              <label for="name" class="block text-sm font-medium mb-1">Full Name</label>
              <input v-model="name" type="text" id="name" placeholder="Your Full Name" required
                     class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300">
            </div>
            <!-- Address -->
            <div>
              <label for="address" class="block text-sm font-medium mb-1">Address</label>
              <input v-model="alamat" type="text" id="address" placeholder="Your Address" required
                     class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300">
            </div>
            <!-- Email & Phone -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label for="email" class="block text-sm font-medium mb-1">Email</label>
                <input v-model="email" type="email" id="email" placeholder="Your Email" required
                       class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300">
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium mb-1">Phone</label>
                <input v-model="no_hp" type="tel" id="phone" placeholder="Your Phone Number" required
                       class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300">
              </div>
            </div>
            <!-- Password & Confirm Password -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label for="password" class="block text-sm font-medium mb-1">Password</label>
                <input v-model="password" type="password" id="password" placeholder="Password" required
                       class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300">
              </div>
              <div>
                <label for="confirmPassword" class="block text-sm font-medium mb-1">Confirm Password</label>
                <input v-model="confirmPassword" type="password" id="confirmPassword" placeholder="Confirm your password" required
                       class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300">
              </div>
            </div>
            <!-- Submit Button -->
            <button type="submit"
                    :disabled="isSubmitting"
                    class="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition-colors font-medium disabled:opacity-50"
            >
              <span v-if="isSubmitting">Registering...</span>
              <span v-else>Register</span>
            </button>
          </form>
          <!-- Link to Login -->
          <p class="text-center text-sm mt-4">
            Already have an account? 
            <NuxtLink to="/auth/login" class="text-purple-500 font-medium hover:underline">Login Here</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRuntimeConfig } from '#app'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const no_hp = ref('')
const alamat = ref('')
const isSubmitting = ref(false)
const router = useRouter()
const config = useRuntimeConfig()

const register = async () => {
  // Validasi password
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match!')
    return
  }

  // Validasi input yang tidak boleh kosong
  if (!name.value || !email.value || !password.value || !no_hp.value || !alamat.value) {
    alert('Please fill all fields!')
    return
  }

  isSubmitting.value = true
  try {
    const response = await $fetch(`${config.public.apiBase}/api/register`, {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        password: password.value,
        no_hp: no_hp.value,
        alamat: alamat.value
      }
    })

    // Menangani respons sukses
    if (response && response.user) {
      if (process.client) {
        localStorage.setItem('name', response.user.name)
      }
      alert('Registration successful, please check your email for verification')
      router.push('/auth/login')
    }
  } catch (error) {
    console.error('Registration failed:', error)
    const errorMessage = error.data?.message || 'Registration failed. Please try again.'
    alert(errorMessage)
  } finally {
    isSubmitting.value = false
  }
}

const closeCard = () => {
  router.push('/admin/dashboard')
}
</script>

<style scoped>
body {
  font-family: 'Montserrat', sans-serif;
}

@media (max-width: 768px) {
  .max-w-md {
    width: 100%;
    max-width: 90%;
  }
}

@media (min-width: 769px) {
  .max-w-lg {
    max-width: 600px;
  }
}
</style>
