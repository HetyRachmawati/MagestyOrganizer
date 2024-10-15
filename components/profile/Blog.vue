<template>
  <div>
    <!-- Spinner Start -->
    <div
      v-if="loading"
      class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div class="spinner-border text-purple-500" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <!-- Spinner End -->

    <!-- Header Start -->
    <div class="container-fluid bg-breadcrumb py-5" style="background-image: url('/img/bg.png'); background-size: cover; background-position: center;">
      <div class="container text-center py-5">
        <h3 class="text-purple-100 display-3 mb-4">Blog</h3>
        <ol class="breadcrumb justify-content-center mb-0">
          <li class="breadcrumb-item"><NuxtLink to="/" class="text-purple-300">Home</NuxtLink></li>
          <li class="breadcrumb-item"><NuxtLink to="#" class="text-purple-300">Pages</NuxtLink></li>
          <li class="breadcrumb-item text-purple-100">Blog</li>
        </ol>
      </div>
    </div>
    <!-- Header End -->

    <!-- Blog Start -->
    <div class="container-fluid blog py-5">
      <div class="container py-5">
        <div
          class="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style="max-width: 800px;"
        >
          <h4 class="text-purple-400">From Blog</h4>
          <h1 class="display-4 mb-4">Tips & Stories from Weddings</h1>
          <p class="mb-0">
            Selamat datang di blog kami, di mana kami berbagi kisah-kisah inspiratif dan tips persiapan acara pernikahan untuk membantu Anda mewujudkan hari spesial impian Anda.
          </p>
        </div>
        <div class="row g-4 justify-content-center">
          <div
            v-for="(post, index) in posts"
            :key="index"
            class="col-lg-6 col-xl-4 wow fadeInUp"
            :data-wow-delay="`${0.2 + index * 0.2}s`"
          >
            <div class="blog-item">
              <div class="blog-img">
                <img
                  :src="post.image"
                  class="img-fluid rounded-top w-100"
                  alt="Wedding image"
                />
                <div class="overlay"></div>
                <div class="blog-categiry py-2 px-4 bg-purple-500">
                  <span class="text-black">{{ post.category }}</span>
                </div>
              </div>
              <div class="blog-content p-4">
                <div class="blog-comment d-flex justify-content-between mb-3">
                  <div class="small">
                    <span class="fa fa-user text-purple-400"></span>
                    {{ post.author }}
                  </div>
                  <div class="small">
                    <span class="fa fa-calendar text-purple-400"></span>
                    {{ post.date }}
                  </div>
                  <div class="small">
                    <span class="fa fa-comment-alt text-purple-400"></span>
                    {{ post.comments }} Comments
                  </div>
                </div>
                <!-- NuxtLink used instead of <a> -->
                <NuxtLink :to="post.link" class="h4 d-inline-block mb-3">{{ post.title }}</NuxtLink>
                <p class="mb-3">{{ post.description }}</p>
                <NuxtLink :to="post.link" class="btn p-0">Read More <i class="fa fa-arrow-right"></i></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Blog End -->

    <!-- Back to Top -->
    <NuxtLink to="#" class="btn btn-purple-500 btn-lg-square rounded-circle back-to-top">
      <i class="fa fa-arrow-up"></i>
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
const posts = ref([])

onMounted(() => {
  setTimeout(() => {
    loading.value = false
    posts.value = [
      {
        image: '/img/blog-3.png',
        category: 'Rustic Wedding',
        author: 'Magesty Organizer',
        date: '10 Oct 2024',
        comments: 15,
        title: 'Pernikahan Bernuansa Rustic di Tepi Danau',
        description:
          'Acara pernikahan Rizki dan Maya yang sederhana namun elegan, dengan nuansa rustic di tepi danau, berhasil mencuri perhatian semua tamu. Magesty Organizer berhasil menyiapkan acara ini dengan sempurna.',
        link: '/blog/blog1',
      },
      {
        image: '/img/blog-2.png',
        category: 'Modern-Traditional Wedding',
        author: 'Magesty Organizer',
        date: '5 Sep 2024',
        comments: 10,
        title: 'Perpaduan Modern dan Tradisional di Pernikahan Farhan & Indah',
        description:
          'Farhan dan Indah memadukan unsur modern dan tradisional dengan begitu indah dalam pernikahan mereka. Magesty Organizer memastikan acara berjalan lancar tanpa kehilangan sentuhan budaya.',
        link: '/blog/blog2',
      },
      {
        image: '/img/blog-1.png',
        category: 'Outdoor Wedding',
        author: 'Magesty Organizer',
        date: '20 Aug 2024',
        comments: 20,
        title: 'Pernikahan Outdoor Sempurna di Tengah Pandemi',
        description:
          'Yusuf dan Anita mengadakan pernikahan outdoor yang aman dan indah di tengah pandemi. Magesty Organizer memastikan semua protokol kesehatan terpenuhi tanpa mengurangi keindahan acara.',
        link: '/blog/blog3',
      }
    ]
  }, 1000)
})
</script>

<style scoped>
.blog-item {
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.breadcrumb {
    background-color: transparent;
}

.blog-item:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.blog-img {
  position: relative;
}

.blog-img img {
  object-fit: cover;
  transition: transform 0.3s ease; /* Zoom effect */
}

.blog-img:hover img {
  transform: scale(1.1); /* Zoom effect */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(147, 51, 234, 0.3); /* Purple-400 */
  opacity: 0; /* Initial opacity */
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateY(-100%);
}

.blog-item:hover .overlay {
  opacity: 0.5; /* Set opacity when hovered */
  transform: translateY(0);
}

.blog-categiry {
  z-index: 1;
}

.btn {
  position: relative;
  transition: color 0.3s ease, background-color 0.3s ease;
  color: #7C3AED; /* Purple-500 */
  font-weight: bold;
}

.btn:hover {
  color: #5B21B6; /* Purple-600 */
}

.spinner-border {
  width: 3rem;
  height: 3rem;
}

.back-to-top {
  background-color: #7C3AED; /* Purple-500 */
}

.back-to-top:hover {
  background-color: #5B21B6; /* Purple-600 */
}

.text-black {
  color: #000; /* Warna hitam untuk teks kategori */
}
</style>
