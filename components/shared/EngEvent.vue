<!-- components/EngEvent.vue -->
<template>
  <div class="package-section">
    <h2 class="package-title">Engagament Event Package</h2>
    <div class="subtitle-container flex items-center mt-2">
      <!-- Garis di kiri (arrow-left) -->
      <div class="ml-2 w-32 h-0.5 bg-purple-600 relative">
        <div class="absolute left-0 top-[-5px] transform -translate-x-1 rotate-45 w-2 h-2 bg-purple-600"></div>
      </div>
  
      <!-- Subtitle -->
      <div class="subtitle mx-2">package</div>
  
      <!-- Garis di kanan (arrow-right) -->
      <div class="mr-2 w-32 h-0.5 bg-purple-600 relative">
        <div class="absolute right-0 top-[-5px] transform translate-x-1 rotate-45 w-2 h-2 bg-purple-600"></div>
      </div>
    </div>
  </div>
  
  <div class="package-container">
    <div class="package-card">
      <img src="/img/g1.png" alt="Wedding Assistant Service">
      <div class="service-details">
        <h3 class="service-title">Wedding Assistant Service</h3>
        <p>Wedding Event</p>
        <p class="price">Rp 3.750.000</p>
      </div>
      <button class="book-now">Book Now</button>
    </div>
  
    <div class="package-card">
      <img src="/img/g1.png" alt="Intimate Wedding">
      <div class="service-details">
        <h3 class="service-title">Intimate Wedding Service</h3>
        <p>Wedding Event</p>
        <p class="price">Rp 3.750.000</p>
      </div>
      <button class="book-now">Book Now</button>
    </div>
  
    <div class="package-card">
      <img src="/img/g1.png" alt="Wedding Service">
      <div class="service-details">
        <h3 class="service-title">Wedding Organizer Service</h3>
        <p>Wedding Event</p>
        <p class="price">Rp 3.750.000</p>
      </div>
      <button class="book-now">Book Now</button>
    </div>
  </div>
  
  <!-- Kontainer untuk tombol View More -->
  <div class="view-more-container">
    <a href="#" class="view-more">View More</a>
  </div>

  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  /* package */
.package-section {
    text-align: center; /* Pusatkan teks pada section */
    padding: 40px 20px;
    background-color: #ffffff;
    margin-left: 5px; /* Margin kiri untuk section */
}

.package-title {
    font-family: 'Lora', serif; /* Ganti dengan font yang diinginkan */
    font-size: 2.5rem; /* Ukuran font */
    color: #000000; /* Warna teks */
    text-align: center; /* Rata tengah */
    letter-spacing: 1px; /* Jarak antar huruf */
    padding: 10px; /* Padding di sekitar teks */
}

.subtitle-container {
    display: flex; /* Menggunakan flexbox untuk penyelarasan */
    align-items: center; /* Menyelaraskan item secara vertikal */
    justify-content: center; /* Menyelaraskan item secara horizontal */
    margin-bottom: 30px; /* Jarak bawah */
}

.arrow-left, .arrow-right {
    color: #AA6BF7; /* Warna ungu untuk ikon panah */
}

.subtitle {
    font-size: 18px; /* Ukuran font untuk subtitle */
    color: #AA6BF7; /* Warna ungu untuk teks subtitle */
    margin: 0 10px; /* Jarak kiri dan kanan */
}

.package-container {
    display: flex;
    justify-content: center;
    gap: 20px; /* Jarak antar kartu */
    flex-wrap: wrap;
}

.package-card {
    display: flex;
    flex-direction: column; /* Susun elemen secara vertikal */
    justify-content: space-between; /* Ruang yang merata di antara elemen */
    background-color: #ffffff; /* Warna latar belakang putih */
    border-radius: 10px; /* Sudut melengkung */
    padding: 20px;
    max-width: 300px; /* Lebar maksimum kartu */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Efek bayangan yang lebih jelas */
    text-align: left; /* Rata kiri teks dalam kartu */
    min-height: 400px; /* Atur tinggi minimum kartu */
    transition: transform 0.3s ease; /* Transisi yang halus untuk efek zoom */
    overflow: hidden; /* Menyembunyikan bagian yang melampaui batas */
}

.package-card:hover {
    transform: scale(1.05); /* Membesarkan kartu sebesar 5% saat dihover */
}

.package-card img {
    width: 100%; /* Mengisi lebar kartu */
    height: 50%;
    border-radius: 10px; /* Sudut melengkung pada gambar */
}

.book-now {
    background-color: #AA6BF7; /* Warna tombol */
    color: white; /* Warna teks tombol */
    padding: 10px 20px; /* Padding tombol */
    border: none; /* Tanpa border */
    border-radius: 5px; /* Sudut melengkung */
    cursor: pointer; /* Pointer saat hover */
    margin-top: 0; /* Jarak antara deskripsi dan tombol */
    display: inline-block; /* Agar bisa mengatur lebar */
    width: 100%; /* Mengatur lebar tombol agar mengisi ruang yang ada */
    text-align: center; /* Menengahkan teks di dalam tombol */
}

.book-now:hover {
    background-color: #8A55B6; /* Warna lebih gelap saat hover */
}

.view-more-container {
  display: flex;
  justify-content: center; /* Pusatkan secara horizontal */
  margin-top: 20px; /* Tambahkan jarak dari bagian atas */
}

.view-more {
  background-color: #6b46c1; /* Warna ungu untuk tombol */
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 4rem;
}

.view-more:hover {
  background-color: #5a3aa3; /* Ubah warna saat hover */
}


.service-title {
    margin: 0; /* Menghapus margin */
    padding: 0; /* Menghapus padding */
    font-weight: bold; /* Membuat teks menjadi bold */

}

.service-details p {
    margin: 0; /* Menghapus margin untuk semua paragraf dalam service-details */
    padding: 0; /* Menghapus padding */
}

.price {
    font-size: 1.5rem; /* Ukuran font lebih besar, sesuaikan sesuai kebutuhan */
    font-weight: bold; /* Membuat teks menjadi bold */
}

h3 {
    font-family: 'Lora', serif; /* Menggunakan font Lora */
    font-size: 1.5rem; /* Mengatur ukuran font lebih besar */
    color: #000000; /* Warna hitam untuk memastikan terlihat */
}


  </style>