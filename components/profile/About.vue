<template>
  <!-- Header Start -->
  <div class="container-fluid text-center py-5" style="background-image: url('/img/bg.png'); background-size: cover; background-position: center;">
    <div class="container text-center py-5">
      <h3 class="text-white display-3 mb-4">About Us</h3>
      <ol class="breadcrumb justify-content-center mb-0">
        <li class="breadcrumb-item"><nuxt-link to="/" class="text-purple-300">Home</nuxt-link></li>
        <li class="breadcrumb-item"><nuxt-link to="#" class="text-purple-300">Pages</nuxt-link></li>
        <li class="breadcrumb-item active text-white">About Us</li>
      </ol>
    </div>
  </div>
  <!-- Header End -->

  <!-- About Start -->
  <div class="container-fluid about py-5">
    <div class="container py-5">
      <div class="row g-5 align-items-center">
        <div class="col-lg-5">
          <div class="video">
            <img src="/img/about-1.jpg" class="img-fluid rounded" alt="">
            <div class="position-absolute rounded border-5 border-top border-start border-white" style="bottom: 0; right: 0;">
              <img src="/img/about-2.jpg" class="img-fluid rounded" alt="">
            </div>
            <button type="button" class="btn btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
              <span></span>
            </button>
          </div>
        </div>
        <div class="col-lg-7">
          <div>
            <p class="fs-4 text-uppercase text-primary">About Us</p>
            <h1 class="display-4 mb-4 text-purple-600">Our Story Magesty</h1>
            <p class="mb-4 text-gray-700">
              Magesty Organizer didirikan pada tahun 2021 oleh seorang profesional muda dengan visi untuk menghadirkan pengalaman pernikahan yang sempurna dan berkesan bagi setiap pasangan. Berawal dari tekad dan ketertarikan pada dunia wedding planning, Magesty Organizer tumbuh pesat dalam waktu singkat.
            </p>
            <p class="my-4 text-gray-700">
              Dalam tiga tahun sejak berdiri, Magesty telah melayani 250++ klien dengan berbagai kebutuhan dan konsep pernikahan, mulai dari tradisional hingga modern. Magesty berkembang pesat dan kini menjadi salah satu wedding organizer terpercaya.
            </p>
            <p class="mb-4 text-gray-700">
              Dengan fokus pada kepuasan klien, Magesty selalu memastikan bahwa setiap pernikahan yang dikelola berjalan sesuai rencana dan memberikan pengalaman yang tidak terlupakan.
            </p>
            <div class="row g-4">
              <div class="col-md-6">
                <div class="d-flex align-items-center">
                  <i class="fab fa-gitkraken fa-3x text-purple-600"></i>
                  <div class="ms-4">
                    <h5 class="mb-2 text-purple-600">Visi</h5>
                    <p class="mb-0 text-gray-700">Menjadikan Magesty sebagai perusahaan pelayanan terpercaya yang dapat mewujudkan tujuan client</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex align-items-center">
                  <i class="fas fa-gift fa-3x text-purple-600"></i>
                  <div class="ms-4">
                    <h5 class="mb-2 text-purple-600">Misi</h5>
                    <p class="mb-0 text-gray-700">Memberikan pelayanan yang berkualitas prima. Menyediakan sumber daya manusia dengan kinerja profesional.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#" class="btn btn-purple btn-primary-outline-0 rounded-pill py-3 px-5">Explore More</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Video -->
  <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content rounded-0">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Youtube Video</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- 16:9 aspect ratio -->
          <div class="ratio ratio-16x9">
            <iframe class="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always" allow="autoplay"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->

</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      teamMembers: [
        { name: "Claire", role: "Owner Magesty Organizer", image: "/img/g1.png" },
      ],
    };
  },
};

</script>

<style scoped>
/* Background and header styling */
.container-fluid {
  position: relative;
}

.bg-breadcrumb {
  height: 400px;
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(10px);
}
.breadcrumb {
    background-color: transparent;
}


h2 {
  font-family: 'Lora', serif;
}

h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
}

.custom-margin {
  margin-top: 4rem;
}

/* Styling for text and icons */
.text-purple-600 {
  color: #9F7AEA;
}

.text-gray-700 {
  color: #6B7280;
}

/* Button styles */
.btn-purple {
  background-color: transparent;
  border: 2px solid #9F7AEA;
  color: #9F7AEA !important; /* Pastikan warna teks ungu sebelum hover */
  transition: background-color 0.3s ease, color 0.3s ease;
}


.btn-purple:hover {
  background-color: #9F7AEA;
  color: #fff !important; /* Warna teks berubah menjadi putih saat hover */
  border-color: #9F7AEA;
}

/* Team member section */
.team-member {
  text-align: center;
}
</style>
