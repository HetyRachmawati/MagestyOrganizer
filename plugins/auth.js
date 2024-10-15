export default defineNuxtPlugin((nuxtApp) => {
  const auth = {
    getToken() {
      return process.client ? localStorage.getItem('token') : null;  // Gunakan authToken
    },
    setToken(token) {
      if (process.client) {
        localStorage.setItem('token', token);  // Simpan token
      }
    },
    removeToken() {
      if (process.client) {
        localStorage.removeItem('token');  // Hapus token
      }
    },
    logout() {
      this.removeToken();
      navigateTo('/auth/login');  // Arahkan ke login setelah logout
    },
  };

  nuxtApp.provide('auth', auth);  // Membuat auth tersedia di seluruh app
});
