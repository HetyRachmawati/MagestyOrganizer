<template>
    <div>
      <Contact />
    </div>
  </template>
  
  <script>
import Contact from "~/components/profile/Contact.vue";
  
  export default {
    components: {
      Contact,
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
  