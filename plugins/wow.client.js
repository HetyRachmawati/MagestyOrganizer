import WOW from 'wow.js';

export default defineNuxtPlugin(() => {
  if (process.client) {
    const wow = new WOW();
    wow.init();
    console.log('WOW.js initialized'); // Tambahkan log untuk verifikasi
  }
});
