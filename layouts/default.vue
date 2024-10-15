<template>
  <div>
    <!-- Gunakan HeaderLanding sebagai default, HeaderMain bisa digunakan di halaman tertentu -->
    <HeaderLanding />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script>
import HeaderLanding from '~/components/shared/HeaderLanding.vue';
import Footer from '~/components/shared/Footer.vue';

export default {
  components: {
    HeaderLanding,
    Footer,
  },
  mounted() {
    console.log("Default layout digunakan");
  },
};
</script>

