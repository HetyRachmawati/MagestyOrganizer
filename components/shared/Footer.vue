<template>
  <footer class="bg-purple-50 py-8 px-4 md:px-6 mt-32">
    <hr class="border-t-2 border-purple-500 mb-6">
    <div class="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      <!-- Logo and Description -->
      <div class="flex flex-col mb-6 wow fadeIn" data-wow-duration="1s">
        <div class="flex items-center mb-4">
          <img src="/img/icon.png" alt="Magesty Organizer Logo" class="w-8 h-8 mr-2">
          <h2 class="text-[20px] font-bold text-purple-500 font-montserrat">MAGESTY ORGANIZER</h2>
        </div>
        <p class="text-[16px] text-purple-500 font-montserrat">Meet Your Best organizer needs at all times</p>

        <!-- Social Icons -->
        <div class="social-icons flex space-x-4 mt-4">
          <a href="#" class="text-purple-500 hover:text-purple-700">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="text-purple-500 hover:text-purple-700">
            <i class="fab fa-pinterest"></i>
          </a>
          <a href="#" class="text-purple-500 hover:text-purple-700">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="#" class="text-purple-500 hover:text-purple-700">
            <i class="fab fa-youtube"></i>
          </a>
        </div>



        <p class="mt-4 text-sm text-purple-500 font-montserrat">© 2024 Tailrace Centre.</p>
      </div>

      <!-- Venues -->
      <div class="wow fadeIn" data-wow-duration="1s">
        <h3 class="text-lg font-semibold text-black mb-4 font-opensans">VENUES</h3>
        <ul class="text-purple-500 space-y-2 font-opensans">
          <li>Chapel</li>
          <li>Cradle Room</li>
          <li>Freycinet Room</li>
          <li>Tamar Room</li>
        </ul>
      </div>

      <!-- Event -->
      <div class="wow fadeIn" data-wow-duration="1s">
        <h3 class="text-lg font-semibold text-black mb-4 font-opensans">EVENT</h3>
        <ul class="text-purple-500 space-y-2 font-opensans">
          <li>Kids paradise</li>
          <li>Jude's Cafe</li>
          <li>Covid safety plan</li>
        </ul>
      </div>

      <!-- Contact Us -->
      <div class="wow fadeIn" data-wow-duration="1s">
        <h3 class="text-lg font-semibold text-black mb-4 font-opensans">CONTACT US</h3>
        <ul class="space-y-4 font-opensans">
          <li class="flex items-center text-purple-500">
            <i class="fas fa-phone-alt mr-2"></i> 087727124
          </li>
          <li class="flex items-center text-purple-500">
            <i class="fas fa-envelope mr-2"></i> Magestyorganizer@gmail.com
          </li>
          <li class="flex items-center text-purple-500">
            <i class="fas fa-map-marker-alt mr-2"></i> Jalan Bandar Kidul
          </li>
        </ul>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  mounted() {
    new WOW().init();
  }
}
</script>

<style scoped>
.social-icons {
  font-size: 24px; /* Atur ukuran ikon */
}
@media (max-width: 768px) {
  .social-icons {
    font-size: 20px; /* Ukuran ikon lebih kecil pada layar kecil */
  }
  h2 {
    font-size: 18px; /* Ukuran font untuk judul lebih kecil pada layar kecil */
  }
  p {
    font-size: 14px; /* Ukuran font untuk deskripsi lebih kecil pada layar kecil */
  }
}
</style>
