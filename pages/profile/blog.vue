<template>
    <div>
      <Blog/>
    </div>
  </template>
  
  <script>
import Blog from "~/components/profile/Blog.vue";
  
  export default {
    components: {
      Blog,
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
  