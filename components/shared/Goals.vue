<template>
  <!-- Services Section Start -->
  <div class="container-fluid feature bg-light py-5">
    <div class="container py-5">
      <!-- Bagian judul dan deskripsi -->
      <div class="text-center mx-auto pb-5 wow animate__fadeInUp" data-wow-delay="0.2s" style="max-width: 800px;">
        <p class="fs-4 text-uppercase text-primary">Our Goals</p>
        <h1 class="display-3 text-purple-600">Magesty Organizer</h1>
        <h3 class="mb-0 mt-2" style="font-size: 1.5rem;">
        Alasan Mereka Memilih Magesty Organizer
      </h3>
      </div>

      <!-- Bagian fitur -->
      <div class="row g-4 d-flex justify-content-center align-items-stretch">
        <!-- Fitur 1 -->
        <div class="col-md-6 col-lg-4 col-xl-3 wow animate__fadeInUp" data-wow-delay="0.6s">
          <div class="feature-item p-4">
            <div class="feature-icon p-4 mb-4">
              <i class="fa fa-bullseye fa-3x"></i>
            </div>
            <h4 class="mb-4">Membantu Meringankan Persiapan</h4>
            <p class="mb-4">Kami hadir untuk mempermudah proses persiapan menuju pernikahan yang Anda impikan. Dengan layanan profesional, semua kebutuhan Anda akan terpenuhi.</p>
            <a class="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
          </div>
        </div>

        <!-- Fitur 2 -->
        <div class="col-md-6 col-lg-4 col-xl-3 wow animate__fadeInUp" data-wow-delay="0.6s">
          <div class="feature-item p-4">
            <div class="feature-icon p-4 mb-4">
              <i class="fa fa-shield-alt fa-3x"></i>
            </div>
            <h4 class="mb-4">Memberi Service Terbaik</h4>
            <p class="mb-4">Kami berkomitmen memberikan pelayanan terbaik, memastikan setiap detail acara sesuai dengan harapan dan impian Client.</p>
            <a class="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
          </div>
        </div>

        <!-- Fitur 3 -->
        <div class="col-md-6 col-lg-4 col-xl-3 wow animate__fadeInUp" data-wow-delay="0.6s">
          <div class="feature-item p-4">
            <div class="feature-icon p-4 mb-4">
              <i class="fa fa-user-friends fa-3x"></i>
            </div>
            <h4 class="mb-4">Mewujudkan Wedding Dream</h4>
            <p class="mb-4">Kami akan membantu Anda mewujudkan pernikahan impian yang telah Anda bayangkan. Bersama Magesty Organizer, semuanya bisa terjadi.</p>
            <a class="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
          </div>
        </div>

      </div>
    </div>
  </div>
  <!-- Services Section End -->
</template>

<script setup>
</script>

<style scoped>
.feature-item {
  background-color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  height: 435px; /* Set a fixed height for all cards */
  padding-bottom: 50px; /* Beri ruang untuk tombol di bagian bawah */
}

.feature-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  background-color: #9F7AEA; /* Background warna ungu */
}

.feature-item h4 {
  color: #000;
  transition: color 0.3s ease;
}

.feature-item:hover h4,
.feature-item:hover p {
  color: #fff;
}

.feature-item p {
  color: #6c757d;
  overflow: hidden; /* Prevent text overflow */
}

.feature-icon {
  background-color: #e9d8fd; /* Latar belakang ungu muda */
  padding: 20px;
  border-radius: 0 0 5px 5px;
  display: inline-block;
  color: #6B46C1; /* Warna ungu untuk ikon */
  width: 40%;
  text-align: center;
  transition: background-color 0.4s ease, color 0.4s ease;
  position: relative;
  overflow: hidden;
  top: -25px;
}

/* Hover efek tirai pada ikon */
.feature-icon::before {
  content: '';
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #6B46C1; /* Background ungu tua */
  transition: top 0.4s ease;
  z-index: 0;
}

.feature-item:hover .feature-icon::before {
  top: 0; /* Turunkan latar belakang dari atas ke bawah */
}

.feature-icon i {
  position: relative;
  z-index: 1; /* Pastikan ikon berada di atas */
  color: #6B46C1; /* Warna awal ungu */
  transition: color 0.4s ease;
}

.feature-item:hover .feature-icon i {
  color: #fff; /* Warna putih saat di-hover */
}

.btn-primary {
  background-color: #fff;
  color: #9F7AEA;
  border: 1px solid #9F7AEA;
  transition: background-color 0.3s ease, color 0.3s ease;
  position: absolute;
  bottom: 30px; /* Letakkan tombol 15px dari bawah */
  left: 50%;
  transform: translateX(-50%); /* Pusatkan tombol secara horizontal */
}

.btn-primary:hover {
  background-color: #6B46C1;
  color: #fff;
  border: 1px solid #6B46C1;
}

</style>
