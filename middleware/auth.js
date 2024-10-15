export default defineNuxtRouteMiddleware(() => {
    if (process.client) {
      const token = localStorage.getItem('token');
  
      // Jika tidak ada token, arahkan pengguna ke halaman login
      if (!token) {
        return navigateTo('/auth/login');
      }
    }
  });