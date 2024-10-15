<template>
<!-- Header Start -->
<div class="container-fluid bg-breadcrumb py-5" style="background-image: url('/img/bg.png'); background-size: cover; background-position: center;">
    <div class="container text-center py-5">
      <h3 class="text-white display-3 mb-4">Our Gallery</h3>
      <ol class="breadcrumb justify-content-center mb-0">
        <li class="breadcrumb-item"><nuxt-link to="/" class="text-purple-300">Home</nuxt-link></li>
        <li class="breadcrumb-item"><nuxt-link to="#" class="text-purple-300">Pages</nuxt-link></li>
        <li class="breadcrumb-item active text-white">Our Gallery</li>
      </ol>
    </div>
  </div>
  <!-- Header End -->
  </template>
  
  <script>
  export default {
    name: "Portfolio", // Ganti 'Portofilio' menjadi 'Portfolio' untuk ejaan yang benar
  };
  </script>
  
  <style scoped>
.breadcrumb {
    background-color: transparent;
}

  </style>
  