<template>
  <div id="app">
    <!-- Konten Utama -->
    <main>
      <!-- Konten halaman lain di sini -->
    </main>

    <!-- Footer -->
    <footer class="sticky-footer" id="footer-custom">
      <div class="container my-auto">
        <div class="copyright text-center">
          <span>Copyright &copy; Your Website 2024</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>


<style scoped>
/* Flexbox pada seluruh halaman */
html, body {
  height: 100%; /* Memastikan halaman memiliki tinggi penuh */
  margin: 0; /* Menghapus margin default */
  display: flex;
  flex-direction: column; /* Mengatur elemen anak secara vertikal */
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 80vh; /* Mengatur minimal tinggi halaman */
}

main {
  flex: 1; /* Memungkinkan konten utama mengambil ruang sisa */
}

/* Styling untuk footer agar selalu di bawah halaman */
#footer-custom {
  background-color: #ffffff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1); /* Menambahkan bayangan */
  width: 100%;
  padding: 20px 0;
  position: relative;
  left: 0;
  bottom: 0;
  margin-top: auto; /* Menempatkan footer di bagian bawah */
  z-index: 1000;
}

/* Teks copyright di tengah */
#footer-custom .copyright {
  color: #858796;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
}

/* Mengatur container di dalam footer */
#footer-custom .container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Menonaktifkan hover */
#footer-custom a,
#footer-custom button,
#footer-custom * {
  pointer-events: none !important;
  text-decoration: none !important;
  color: inherit !important;
  background-color: inherit !important;
  cursor: default !important;
}


</style>
