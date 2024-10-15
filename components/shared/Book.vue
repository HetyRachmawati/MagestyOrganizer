<template>
  <div class="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between rounded-lg shadow-lg overflow-hidden mt-40">
    
    <!-- Img Kanan dengan Animasi -->
    <div class="w-full md:w-1/2 h-96 wow fadeInLeft" data-wow-duration="1s">
      <img src="/img/g5.png" alt="Event Image" class="object-cover w-full h-full">
    </div>

    <!-- Text Kanan dengan Animasi -->
    <div class="w-full md:w-1/2 text-center p-6 wow fadeInRight" data-wow-duration="1s">
      <h2 class="text-3xl md:text-4xl font-semibold">
        We <span class="text-purple-500">Help</span> Bring Your 
        <span class="text-purple-500">Event</span> To Life
      </h2>
      <button class="mt-6 px-6 py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition">
        book now
      </button>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
  h2 {
    font-family: 'Lora', serif;
  }
</style>
