<template>
    <div>
      <Vendor />
    </div>
  </template>
  
  <script>
import Vendor from "~/components/profile/Vendor.vue";
  
  export default {
    components: {
      Vendor,
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
  