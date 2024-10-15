<template>
  <!-- Header Start -->
  <div class="container-fluid bg-breadcrumb py-5" style="background-image: url('/img/bg.png'); background-size: cover; background-position: center;">
    <div class="container text-center py-5">
      <h3 class="text-white display-3 mb-4">Package</h3>
      <ol class="breadcrumb justify-content-center mb-0">
        <li class="breadcrumb-item"><nuxt-link to="/" class="text-purple-300">Home</nuxt-link></li>
        <li class="breadcrumb-item"><nuxt-link to="#" class="text-purple-300">Pages</nuxt-link></li>
        <li class="breadcrumb-item active text-white">Package</li>
      </ol>
    </div>
  </div>
  <!-- Header End -->

  <div class="container-fluid services py-5">
    <div class="container py-5">
      <div class="mx-auto text-center mb-5" style="max-width: 800px;">
        <p class="fs-4 text-uppercase text-center text-primary">Our Service</p>
        <h1 class="display-3">Wedding Packages</h1>
      </div>
      <div class="px-6 py-12 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-between items-center mb-5">
            <div class="flex items-center">
              <h2 class="text-3xl font-light text-left lora-font">
                We <span class="font-semibold text-purple-600">Our Latest </span> & Best <br />
                <span class="font-semibold text-purple-600">Wedding</span> Packages
              </h2>
              <div class="ml-4 w-48 h-0.5 bg-purple-600 relative">
                <div class="absolute right-0 top-[-5px] transform translate-x-1 rotate-45 w-2 h-2 bg-purple-600"></div>
              </div>
            </div>
            <div class="text-right">
              <p class="text-purple-600 text-4xl font-semibold">{{ displayedNumber }}+</p>
              <p class="text-gray-500">happy clients</p>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="(packageItem, index) in packages"
              :key="index"
              class="relative wow animate__animated animate__fadeInUp"
              data-wow-delay="0.2s"
            >
              <div class="relative">
                <img
                  :src="packageItem.image"
                  alt="Wedding Package"
                  class="w-full h-64 object-cover rounded-lg border img-zoom"
                />
              </div>
              <div class="mt-4">
                <h3 class="text-lg font-bold mb-2">{{ packageItem.title }}</h3>
                <div class="flex items-center text-gray-500 text-sm mb-2">
                  <i class="fas fa-map-marker-alt mr-2"></i>
                  <span>{{ packageItem.location }}</span>
                </div>
                <div class="flex items-center text-gray-500 text-sm mb-2">
                  <i class="fas fa-home mr-2"></i>
                  <span>{{ packageItem.venue }}</span>
                </div>
                <p class="text-pink-600 font-semibold">{{ packageItem.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Definisi packages
const packages = [
  {
    title: "Nikah Muda Abadi Pantai Bali Nusa Penida",
    location: "Luxembargia",
    venue: "Tentram",
    price: "Rp 193.133.413",
    image: "/img/about-2.jpg",
    popular: true,
  },
  {
    title: "Honeymoon Fast",
    location: "Luxembargia",
    venue: "Tentram",
    price: "Rp 193.133.413",
    image: "/img/about-2.jpg",
    popular: false,
  },
  {
    title: "Nikah Muda Abadi Pantai Bali Nusa Penida",
    location: "Luxembargia",
    venue: "Tentram",
    price: "Rp 193.133.413",
    image: "/img/about-2.jpg",
    popular: true,
  },
  {
    title: "Nikah Muda Abadi Pantai Bali Nusa Penida",
    location: "Luxembargia",
    venue: "Tentram",
    price: "Rp 193.133.413",
    image: "/img/about-2.jpg",
    popular: false,
  },
];
</script>

<script>
export default {
  data() {
    return {
      number: 0, // Inisialisasi angka awal dari 0
      targetNumber: 100, // Angka tujuan (100)
      displayedNumber: 0, // Angka yang ditampilkan (akan berjalan hingga 100)
    };
  },
  mounted() {
    this.animateNumber();
  },
  methods: {
    animateNumber() {
      const increment = this.targetNumber / 100; // Menentukan seberapa cepat angka naik
      const updateCount = () => {
        if (this.displayedNumber < this.targetNumber) {
          this.displayedNumber = Math.ceil(this.displayedNumber + increment); // Menambahkan angka
          setTimeout(updateCount, 30); // Kecepatan animasi (30ms)
        } else {
          this.displayedNumber = this.targetNumber; // Pastikan berhenti di angka tujuan
        }
      };
      updateCount(); // Mulai animasi
    }
  }
};
</script>


<style scoped>
img {
  max-height: 256px;
  width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  transition: transform 0.5s ease; /* Animasi zoom */
}

.img-zoom:hover {
  transform: scale(1.1); /* Zoom efek saat hover */
}

.flex {
  display: flex;
  align-items: center;
}

.flex i {
  font-size: 1rem;
  color: #6b46c1;
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
}

.text-sm {
  font-size: 0.875rem;
}

.text-gray-500 {
  color: #6b7280;
}

.flex i.fa-home {
  margin-left: -0.25rem;
}

.breadcrumb {
    background-color: transparent;
}

</style>
