<template>
  <div class="min-h-screen flex items-center justify-center bg-purple-50 p-4">
    <!-- Card Container -->
    <div class="relative flex flex-col border border-purple-600 shadow-lg p-6 rounded-lg bg-white w-full max-w-md lg:max-w-lg">
      <!-- Close Button -->
      <button
        class="absolute top-4 right-4 text-purple-500 hover:text-purple-600 focus:outline-none text-2xl font-bold"
        @click="closeCard"
      >
        ×
      </button>
      <!-- Logo and Title -->
      <div class="flex flex-col items-center justify-center mb-6">
        <img src="/img/icon2.png" alt="Magesty Organizer Logo" class="w-24 lg:w-32 mb-4">
        <h1 class="text-purple-500 text-2xl lg:text-3xl font-bold">MAGESTY ORGANIZER</h1>
      </div>
      <!-- Login Form -->
      <div class="w-full">
        <div class="bg-white p-4 rounded-lg shadow-md">
          <h2 class="text-center text-purple-500 text-2xl font-bold mb-4">Login</h2>
          <form @submit.prevent="login" class="space-y-4">
            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium mb-1">Email</label>
              <input v-model="email" type="email" id="email" placeholder="Your Email" required
                     class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
                     @input="validateEmail">
            </div>
            <!-- Password -->
            <div>
              <label for="password" class="block text-sm font-medium mb-1">Password</label>
              <input v-model="password" type="password" id="password" placeholder="Your Password" required
                     class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300">
            </div>
            <!-- Error Message -->
            <div v-if="errorMessage" class="text-red-500 text-center">{{ errorMessage }}</div>
            <!-- Submit Button -->
            <button type="submit"
                    class="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition-colors font-medium flex justify-center items-center"
                    :disabled="loading">
              <span v-if="loading" class="spinner-border spinner-border-sm mr-2"></span>
              {{ loading ? 'Logging in...' : 'Login' }}
            </button>
          </form>
          <!-- Link to Register -->
          <p class="text-center text-sm mt-4">
            Don't have an account yet?
            <NuxtLink to="/auth/register" class="text-purple-500 font-medium hover:underline">Register Here</NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useRuntimeConfig } from '#app'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const loading = ref(false)
const router = useRouter()
const config = useRuntimeConfig()

const login = async () => {
  errorMessage.value = ''
  
  if (!email.value || !password.value) {
    errorMessage.value = 'Please enter both email and password'
    return
  }

  loading.value = true
  try {
    const response = await $fetch(`${config.public.apiBase}/api/login`, {
      method: 'POST',
      body: { email: email.value, password: password.value }
    });

    console.log('API Response:', response);

    if (response.status === 'success' && response.data.token) {
      if (process.client) {
        // Simpan token dan role di localStorage di client-side
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('name', response.data.user.name);
        localStorage.setItem('role_id', response.data.user.level.id.toString());  // Simpan sebagai string
      }

      // Cek role pengguna
      const roleId = response.data.user.level.id;

      if (roleId === 1) {
        // Role Admin
        await router.push('/admin/dashboard');
      } else if (roleId === 2) {
        // Role User
        await router.push('/');
      } else {
        // Role tidak dikenali atau role khusus lainnya
        errorMessage.value = 'You do not have access to this section.';
        if (process.client) {
          localStorage.removeItem('token');
          localStorage.removeItem('role_id');
        }
      }
    } else {
      errorMessage.value = response.message || 'Invalid login credentials';
    }
  } catch (error) {
    console.error('Login failed:', error);
    errorMessage.value = 'Login failed. Please check your credentials or try again later.';
  } finally {
    loading.value = false;
  }
}

// Validasi email
const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (email.value && !emailPattern.test(email.value)) {
    errorMessage.value = 'Please enter a valid email address'
  } else {
    errorMessage.value = ''
  }
}

// Watch perubahan email untuk validasi real-time
watch(email, validateEmail)

const closeCard = () => {
  router.push('/')
}
</script>


<style scoped>
body {
  font-family: 'Montserrat', sans-serif;
}

.spinner-border {
  width: 1rem;
  height: 1rem;
  border: 0.2em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spinner-border .75s linear infinite;
}

@keyframes spinner-border {
  100% {
    transform: rotate(360deg);
  }
}

/* Responsiveness */
@media (max-width: 768px) {
  .max-w-md {
    width: 100%;
    max-width: 90%;
  }

  .max-w-lg {
    width: 100%;
    max-width: 100%;
  }
}

@media (min-width: 769px) {
  .max-w-lg {
    max-width: 600px;
  }
}
</style>
