export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:8000',
    },
  },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  app: {
    head: {
      title: 'Website Magesty',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Your website description here' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Montserrat:wght@400;500&family=Garamond:wght@400&family=Nunito:wght@200;200i;300;300i;400;400i;600;600i;700;700i;800;800i;900;900i&display=swap'
        },
        { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css', rel: 'stylesheet' },
        { href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css', rel: 'stylesheet' },
        { href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css', rel: 'stylesheet' },
        { href: 'https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css', rel: 'stylesheet' },
        { href: '/boostrap/css/sb-admin-2.min.css', rel: 'stylesheet' },
        { href: '/boostrap/vendor/fontawesome-free/css/all.min.css', rel: 'stylesheet' },
        { href: '/lib/animate/animate.min.css', rel: 'stylesheet' },
        { href: '/lib/lightbox/css/lightbox.min.css', rel: 'stylesheet' },
        { href: '/lib/owlcarousel/assets/owl.carousel.min.css', rel: 'stylesheet' },
        { href: '/css/bootstrap.min.css', rel: 'stylesheet' },
        { href: '/css/style.css', rel: 'stylesheet' },
      ],
      script: [
        { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js', defer: true },
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js', defer: true },
        { src: 'https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js', defer: true },
        { src: 'https://unpkg.com/swiper/swiper-bundle.min.js', defer: true },
        { src: 'https://code.jquery.com/jquery-3.5.1.min.js', defer: true },
        { src: '/lib/wow/wow.min.js', defer: true },
        { src: '/lib/waypoints/waypoints.min.js', defer: true },
        { src: '/lib/easing/easing.min.js', defer: true },
        { src: '/lib/counterup/counterup.min.js', defer: true },
        { src: '/lib/lightbox/js/lightbox.min.js', defer: true },
        { src: '/lib/owlcarousel/owl.carousel.min.js', defer: true },
        { src: '/boostrap/vendor/chart.js/Chart.min.js', defer: true },
        { src: '/boostrap/js/sb-admin-2.min.js', defer: true },
        { src: '/boostrap/js/demo/chart-area-demo.js', defer: true },
        { src: '/boostrap/js/demo/chart-pie-demo.js', defer: true },
        { src: '/bootstrap/js/demo/datatables-demo.js', defer: true },
        { src: '/boostrap/vendor/datatables/jquery.dataTables.min.js', defer: true },
        { src: '/boostrap/vendor/datatables/dataTables.bootstrap4.min.js', defer: true },
        { src: '/boostrap/js/jquery.min.js', defer: true },
        { src: '/boostrap/js/bootstrap.bundle.min.js', defer: true },
        { src: '/boostrap/js/jquery.easing.min.js', defer: true },
        { src: '/boostrap/js/jquery.dataTables.min.js', defer: true },
        { src: '/boostrap/js/dataTables.bootstrap4.min.js', defer: true },
        { src: '/boostrap/js/datatables-demo.js', defer: true },
        { src: '/js/main.js', defer: true }
      ]
    }
  },

  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/wow.client.js', 
  ],

  compatibilityDate: '2024-10-12',
})