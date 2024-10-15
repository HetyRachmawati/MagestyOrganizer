<template>
  <div class="py-10 flex justify-center">
    <div class="max-w-6xl mx-auto px-4 md:px-0 md:ml-5 lg:ml-32">
      <!-- Galeri -->
      <div class="container-fluid gallery py-5 wow animate__fadeInUp">
        <div class="text-center mx-auto mb-5" style="max-width: 800px;">
          <p class="fs-4 text-uppercase text-primary">Our Gallery</p>
          <h1 class="display-3 text-purple-600">Let's See Our Gallery</h1>
        </div>
        <div class="flex justify-between items-center mb-5">
          <div class="flex items-center">
            <h2 class="text-3xl font-light text-left lora-font">
              We <span class="font-semibold text-purple-600">Help</span> Bring Your <br />
              <span class="font-semibold text-purple-600">Event</span> To Life
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

        <!-- Gallery Start -->
          <div class="tab-content">
            <div id="tab-1" class="tab-pane fade show p-0 active">
              <div class="row g-4">
                <div class="col-lg-12">
                  <div class="row g-4">
                    <!-- Gallery Images -->
                    <div class="col-lg-3 wow zoomIn" data-wow-duration="1s">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="/img/gallery-1.jpg" alt="">
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Gallery 1</h4>
                        </div>
                        <div class="search-icon">
                          <a href="/img/gallery-1.jpg" data-lightbox="Gallery-1" class="my-auto">
                            <i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 wow zoomIn" data-wow-duration="1s">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="/img/gallery-2.jpg" alt="">
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Gallery 2</h4>
                        </div>
                        <div class="search-icon">
                          <a href="/img/gallery-2.jpg" data-lightbox="Gallery-2" class="my-auto">
                            <i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 wow zoomIn" data-wow-duration="1s">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="/img/gallery-3.jpg" alt="">
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Gallery 3</h4>
                        </div>
                        <div class="search-icon">
                          <a href="/img/gallery-3.jpg" data-lightbox="Gallery-3" class="my-auto">
                            <i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 wow zoomIn" data-wow-duration="1s">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="/img/gallery-4.jpg" alt="">
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Gallery 4</h4>
                        </div>
                        <div class="search-icon">
                          <a href="/img/gallery-4.jpg" data-lightbox="Gallery-4" class="my-auto">
                            <i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 wow zoomIn" data-wow-duration="1s">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="/img/gallery-5.jpg" alt="">
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Gallery 5</h4>
                        </div>
                        <div class="search-icon">
                          <a href="/img/gallery-5.jpg" data-lightbox="Gallery-5" class="my-auto">
                            <i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 wow zoomIn" data-wow-duration="1s">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="/img/gallery-6.jpg" alt="">
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Gallery 6</h4>
                        </div>
                        <div class="search-icon">
                          <a href="/img/gallery-6.jpg" data-lightbox="Gallery-6" class="my-auto">
                            <i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 wow zoomIn" data-wow-duration="1s">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="/img/gallery-7.jpg" alt="">
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Gallery 7</h4>
                        </div>
                        <div class="search-icon">
                          <a href="/img/gallery-7.jpg" data-lightbox="Gallery-7" class="my-auto">
                            <i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 wow zoomIn" data-wow-duration="1s">
                      <div class="gallery-img">
                        <img class="img-fluid rounded w-100" src="/img/gallery-8.jpg" alt="">
                        <div class="gallery-overlay p-4">
                          <h4 class="text-secondary">Gallery 8</h4>
                        </div>
                        <div class="search-icon">
                          <a href="/img/gallery-8.jpg" data-lightbox="Gallery-8" class="my-auto">
                            <i class="fas fa-search-plus btn-primary btn-primary-outline-0 rounded-circle p-3"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="tab-class text-center">
                      <ul class="nav nav-pills d-inline-flex justify-content-center mb-5">
                        <div class="services-btn text-center mt-10">
                        <a href="#" class="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5">All Gallery</a>
                      </div> 
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Gallery End -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      number: 0, // Inisialisasi angka awal dari 0
      targetNumber: 100, // Angka tujuan (100)
      displayedNumber: 0, // Angka yang ditampilkan (akan berjalan hingga 100)
      hasAnimated: false, // Untuk mencegah animasi dijalankan berulang kali
    };
  },
  mounted() {
    this.observeGallerySection(); // Panggil observer saat mounted
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
    },
    observeGallerySection() {
      const gallerySection = this.$el.querySelector(".gallery"); // Cari elemen galeri

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting && !this.hasAnimated) {
            // Jika elemen terlihat dan animasi belum dijalankan
            this.animateNumber();
            this.hasAnimated = true; // animasi berjalan sekali
          }
        },
        { threshold: 0.5 } // Mulai animasi elemen terlihat
      );

      observer.observe(gallerySection); // pantau elemen
    },
  },
};
</script>

<style scoped>

</style>
