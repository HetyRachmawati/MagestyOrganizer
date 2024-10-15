<template>
    <!-- Header Start -->
    <div class="container-fluid bg-breadcrumb py-5" style="background-image: url('/img/bg.png'); background-size: cover; background-position: center;">
      <div class="container text-center py-5">
        <h3 class="text-purple-400 display-3 mb-4">Vendor</h3>
        <ol class="breadcrumb justify-content-center mb-0">
          <li class="breadcrumb-item"><nuxt-link to="/" class="text-purple-300">Home</nuxt-link></li>
          <li class="breadcrumb-item"><nuxt-link to="#" class="text-purple-300">Pages</nuxt-link></li>
          <li class="breadcrumb-item active text-purple-400">Vendor</li>
        </ol>
      </div>
    </div>
    <!-- Header End -->
  
    <!-- Statistics Section -->
    <div class="bg-purple-600 py-10">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-white text-center">
        <!-- Card 1 -->
        <div class="flex flex-col items-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          <i class="fas fa-users text-5xl mb-4 icon"></i>
          <h3 class="text-4xl font-bold">{{ happyClients }}</h3>
          <p class="text-lg">Happy Clients</p>
        </div>
  
        <!-- Card 2 -->
        <div class="flex flex-col items-center wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
          <i class="fas fa-check-circle text-5xl mb-4 icon"></i>
          <h3 class="text-4xl font-bold">{{ projectsCompleted }}</h3>
          <p class="text-lg">Projects Completed</p>
        </div>
  
        <!-- Card 3 -->
        <div class="flex flex-col items-center wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
          <i class="fas fa-user-cog text-5xl mb-4 icon"></i>
          <h3 class="text-4xl font-bold">{{ dedicatedStaff }}</h3>
          <p class="text-lg">Dedicated Staff</p>
        </div>
  
        <!-- Card 4 -->
        <div class="flex flex-col items-center wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
          <i class="fas fa-award text-5xl mb-4 icon"></i>
          <h3 class="text-4xl font-bold">{{ awardsAchieved }}</h3>
          <p class="text-lg">Awards Achieved</p>
        </div>
      </div>
    </div>
  
    <!-- Trusted Clients Section -->
    <div class="clients-section mt-10">
      <h2 class="text-center font-semibold text-2xl text-purple-600 wow animate__animated animate__fadeInLeft" data-wow-delay="0.1s">
        Trusted by our beloved clients
      </h2>
      <p class="text-center text-purple-500 wow animate__animated animate__fadeInLeft" data-wow-delay="0.2s">
        100+ Customers who use Manggala Technology to build their Innovations.
      </p>
      <!-- Menambahkan margin-top untuk memberi jarak antara tulisan dan logo -->
      <div class="clients-logos grid grid-cols-4 gap-4 mt-20">
        <!-- Animasi flip untuk logo -->
        <img src="/img/icon.png" alt="Client Logo 1" class="logo wow flip-animation" data-wow-delay="0.1s">
        <img src="/img/icon.png" alt="Client Logo 2" class="logo wow flip-animation" data-wow-delay="0.2s">
        <img src="/img/icon.png" alt="Client Logo 3" class="logo wow flip-animation" data-wow-delay="0.3s">
        <img src="/img/icon.png" alt="Client Logo 4" class="logo wow flip-animation" data-wow-delay="0.4s">
        <img src="/img/icon.png" alt="Client Logo 5" class="logo wow flip-animation" data-wow-delay="0.5s">
        <img src="/img/icon.png" alt="Client Logo 6" class="logo wow flip-animation" data-wow-delay="0.6s">
        <img src="/img/icon.png" alt="Client Logo 7" class="logo wow flip-animation" data-wow-delay="0.7s">
        <img src="/img/icon.png" alt="Client Logo 8" class="logo wow flip-animation" data-wow-delay="0.8s">
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const happyClients = ref(0);
  const projectsCompleted = ref(0);
  const dedicatedStaff = ref(0);
  const awardsAchieved = ref(0);
  
  onMounted(() => {
    new WOW().init();
    animateNumber(happyClients, 1234);
    animateNumber(projectsCompleted, 1234);
    animateNumber(dedicatedStaff, 1234);
    animateNumber(awardsAchieved, 1234);
  });
  
  function animateNumber(refNumber, target) {
    const increment = target / 100;
    const updateCount = () => {
      if (refNumber.value < target) {
        refNumber.value = Math.ceil(refNumber.value + increment);
        setTimeout(updateCount, 30);
      } else {
        refNumber.value = target;
      }
    };
    updateCount();
  }
  </script>
  
  <style scoped>
  .clients-section {
    padding: 2rem;
    background-color: #f9f9f9;
  }
  
  .clients-logos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    justify-items: center;
  }
  
  .icon {
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
  }
  
  /* Animasi Flip */
  @keyframes flip {
    0% {
      transform: perspective(400px) rotateY(0deg);
      opacity: 0;
    }
    50% {
      transform: perspective(400px) rotateY(90deg);
      opacity: 0.5;
    }
    100% {
      transform: perspective(400px) rotateY(0deg);
      opacity: 1;
    }
  }
  
  .flip-animation {
    animation: flip 1s ease-in-out forwards;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    visibility: visible !important;
  }
  
  /* Animasi Masuk dari Kiri */
  @keyframes slideInLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  .wow.animate__fadeInLeft {
    animation: slideInLeft 1s ease-out forwards;
  }
  
  .logo {
    max-width: 100%;
    height: auto;
    transition: transform 0.3s;
  }
  
  .logo:hover {
    transform: scale(1.1);
  }
  .breadcrumb {
    background-color: transparent;
}

  </style>
  