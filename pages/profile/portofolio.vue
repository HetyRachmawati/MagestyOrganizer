<template>
    <div>
      <Portofolio />
      <GalleryFull />
    </div>
  </template>
  
  <script>
import Portofolio from "~/components/profile/Portofolio.vue";
import GalleryFull from "~/components/profile/GalleryFull.vue";

  
  export default {
    components: {
      Portofolio,
      GalleryFull,
    },
  };
  definePageMeta({
  middleware: 'auth'
});
  </script>
  
  <style scoped>
  .about-content {
    padding: 20px; /* Anda bisa menyesuaikan padding sesuai kebutuhan */
  }
  </style>
  