<template>
    <div>
      <About />
      <Ourteam />
    </div>
  </template>
  
  <script>
  import About from "@/components/profile/About.vue";
  import Ourteam from "@/components/profile/Ourteam.vue";


  
  export default {
    components: {
      About,
      Ourteam,
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
  