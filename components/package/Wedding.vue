<template>
    <div class="container mx-auto px-4 py-8 max-w-4xl ">
      <!-- Page Title -->
      <h1 class="text-left text-5xl mb-6 mt-28 font-lora" style="font-family: 'Lora', serif;">Detail Majesty’s Wedding Package</h1>
  
      <!-- Garis dan Subtitle di bawah judul -->
      <div class="flex items-center mb-4">
        <div class="ml-2 w-24 h-0.5 bg-purple-600 relative">
          <div class="absolute left-0 top-[-5px] transform -translate-x-1 rotate-45 w-2 h-2 bg-purple-600"></div>
        </div>
        <div class="subtitle mx-2 text-purple-600">Package</div>
        <div class="mr-2 w-24 h-0.5 bg-purple-600 relative">
          <div class="absolute right-0 top-[-5px] transform translate-x-1 rotate-45 w-2 h-2 bg-purple-600"></div>
        </div>
      </div>
  
      <!-- Card Wrapper -->
      <div class="bg-purple-50 p-6 rounded-sm shadow-lg mt-0">
        <!-- Tab Navigation -->
        <div class="tabs flex mb-0">
          <button 
            @click="setActiveTab(1)" 
            class="tab-button py-2 px-4 bg-purple-200 text-purple-700 rounded-t-lg border-t-2 border-transparent hover:border-gray-300" 
            :class="{ 'active': activeTab === 1, 'bg-purple-500 text-white border-t-2 border-white': activeTab === 1 }">
            Wedding Assistant Service
          </button>
          <button 
            @click="setActiveTab(2)" 
            class="tab-button py-2 px-4 bg-purple-200 text-purple-700 rounded-t-lg border-t-2 border-transparent hover:border-gray-300" 
            :class="{ 'active': activeTab === 2, 'bg-purple-500 text-white border-t-2 border-white': activeTab === 2 }">
            Intimate Wedding
          </button>
          <button 
            @click="setActiveTab(3)" 
            class="tab-button py-2 px-4 bg-purple-200 text-purple-700 rounded-t-lg border-t-2 border-transparent hover:border-gray-300" 
            :class="{ 'active': activeTab === 3, 'bg-purple-500 text-white border-t-2 border-white': activeTab === 3 }">
            Wedding Service
          </button>
        </div>
  
        <!-- Tab Content -->
        <div v-show="activeTab === 1" class="tab-content">
  <h2 class="font-semibold mb-4 font-lora mt-5 text-2xl" style="font-family: 'Lora', serif;">1. Wedding Assistant Service</h2>
  <div class="flex space-x-4">
    <img src="/img/g5.png" alt="Wedding Assistant Service" class="w-40 h-40 rounded-md object-cover">
    <div>
      <ul class="list-disc list-inside mb-4">
        <li>Professional Wedding Planner</li>
        <li>Pembuatan Konsep dan Budgeting</li>
        <li>Koordinasi dan Konsultasi</li>
        <li>Pembuatan Rundown</li>
        <li>Meeting Keluarga</li>
        <li>Briefing Panitia Keluarga</li>
        <li>Team Loading</li>
        <li>1 Bride and Groom Assistant</li>
        <li>Crew standby 3</li>
      </ul>
      <p class="text-xl font-bold">Rp. 3.750.000</p>
      <p class="mt-2 text-gray-600 text-sm">*Untuk Informasi lebih lanjut, jangan ragu untuk bertanya pada tombol kontak di bawah.</p>
      <p class="text-gray-600 text-sm">Tim kami dengan senang hati akan membantu anda.</p>
      <div class="mt-4 space-x-4"> <!-- Menambahkan container untuk margin di antara tombol -->
        <button class="py-2 px-4 bg-purple-500 text-white rounded-lg hover:bg-transparent hover:border hover:border-purple-500 hover:text-purple-500">Book Now</button>
        <button class="py-2 px-4 border border-purple-500 text-purple-500 rounded-lg bg-transparent hover:bg-purple-500 hover:text-white">Konsultasi WA</button>
      </div>
    </div>
  </div>
</div>

<div v-show="activeTab === 2" class="tab-content">
  <h2 class="text-xl font-semibold mb-4 mt-5" style="font-family: 'Lora', serif;">2. Intimate Wedding</h2>
  <div class="flex space-x-4">
    <img src="/img/g6.png" alt="Intimate Wedding" class="w-40 h-40 rounded-md object-cover">
    <div>
      <ul class="list-disc list-inside mb-4">
        <li>Paket Wedding Intimate</li>
        <li>Pengaturan Tempat yang Elegan</li>
        <li>Perencanaan Makanan dan Minuman</li>
        <li>Fotografer Profesional</li>
      </ul>
      <p class="text-xl font-bold">Rp. 4.500.000</p>
      <p class="mt-2 text-gray-600 text-sm">*Untuk Informasi lebih lanjut, jangan ragu untuk bertanya pada tombol kontak di bawah.</p>
      <p class="text-gray-600 text-sm">Tim kami dengan senang hati akan membantu anda.</p>
      <div class="mt-4 space-x-4"> <!-- Menambahkan container untuk margin di antara tombol -->
        <button class="py-2 px-4 bg-purple-500 text-white rounded-lg hover:bg-transparent hover:border hover:border-purple-500 hover:text-purple-500">Book Now</button>
        <button class="py-2 px-4 border border-purple-500 text-purple-500 rounded-lg bg-transparent hover:bg-purple-500 hover:text-white">Konsultasi WA</button>
      </div>
    </div>
  </div>
</div>
  
        <div v-show="activeTab === 3" class="tab-content">
        <h2 class="text-xl font-semibold mb-4 mt-5" style="font-family: 'Lora', serif;">3. Wedding Service</h2>
        <div class="flex space-x-4">
            <img src="/img/g7.png" alt="Wedding Service" class="w-40 h-40 rounded-md object-cover">
            <div>
            <ul class="list-disc list-inside mb-4">
                <li>Service Full Wedding</li>
                <li>Koordinasi Acara Lengkap</li>
                <li>Manajemen Vendor</li>
                <li>Dokumentasi Lengkap</li>
            </ul>
            <p class="text-xl font-bold">Rp. 5.000.000</p>
            <p class="mt-2 text-gray-600 text-sm">*Untuk Informasi lebih lanjut, jangan ragu untuk bertanya pada tombol kontak di bawah.</p>
            <p class="text-gray-600 text-sm">Tim kami dengan senang hati akan membantu anda.</p>
            <div class="mt-4 space-x-4"> <!-- Menambahkan container untuk margin di antara tombol -->
                <button class="py-2 px-4 bg-purple-500 text-white rounded-lg hover:bg-transparent hover:border hover:border-purple-500 hover:text-purple-500">Book Now</button>
                <button class="py-2 px-4 border border-purple-500 text-purple-500 rounded-lg bg-transparent hover:bg-purple-500 hover:text-white">Konsultasi WA</button>
            </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeTab: 1, // Set the default active tab
      };
    },
    methods: {
      setActiveTab(tabIndex) {
        this.activeTab = tabIndex;
      },
    },
  };
  </script>
  
  <style>
  .active {
    background-color: #7e3af2; /* Tailwind color for active state */
    color: white;
  }
  .tab-button {
    margin-bottom: 0; /* Pastikan tidak ada margin bawah */
  }
  .tabs {
    margin-bottom: 0; /* Hapus margin bawah untuk tabs */
  }
  .tab-content {
    margin-top: 0; /* Hapus margin atas untuk konten tab */
  }
  </style>
  