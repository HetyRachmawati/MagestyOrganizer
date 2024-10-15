<template>
  <!-- Header Start -->
 <div class="container-fluid bg-breadcrumb py-5" style="background-image: url('/img/bg.png'); background-size: cover; background-position: center;">
    <div class="container text-center py-5">
      <h3 class="text-white display-3 mb-4">Contact Us</h3>
      <ol class="breadcrumb justify-content-center mb-0">
        <li class="breadcrumb-item"><nuxt-link to="/" class="text-purple-300">Home</nuxt-link></li>
        <li class="breadcrumb-item"><nuxt-link to="#" class="text-purple-300">Pages</nuxt-link></li>
        <li class="breadcrumb-item active text-white">Contact Us</li>
      </ol>
    </div>
  </div>
  <!-- Header End -->
  <div class="flex flex-col items-center py-10 px-5 mt-32 wow fadeInUp" data-wow-delay="0.2s">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl bg-white shadow-lg p-8 rounded-lg">
      <!-- Left Contact  -->
      <div class="pr-6 wow slideInLeft" data-wow-delay="0.2s">
        <h2 class="text-4xl font-lora mb-4">Contact Us</h2>
        <div class="flex items-center justify-start mb-6">
          <!-- Garis di kiri  -->
          <div class="mr-2 w-24 h-0.5 bg-purple-600 relative">
            <div class="absolute left-0 top-[-5px] transform -translate-x-1 rotate-45 w-2 h-2 bg-purple-600"></div>
          </div>

          <!-- Subtitle -->
          <div class="subtitle mx-2 text-purple-600">contact</div> 

          <!-- Garis di kanan  -->
          <div class="ml-2 w-24 h-0.5 bg-purple-600 relative">
            <div class="absolute right-0 top-[-5px] transform translate-x-1 rotate-45 w-2 h-2 bg-purple-600"></div>
          </div>
        </div>
        <p class="text-gray-700 mb-8">
          Ingin menghubungi kami? kirimkan pertanyaan Anda di sini dan kami akan segera menghubungi Anda.
        </p>
        <ul class="space-y-4 text-gray-700">
          <li class="flex items-center">
            <i class="fab fa-whatsapp text-2xl mr-4 text-purple-600"></i>
            0877727124
          </li>
          <li class="flex items-center">
            <i class="fas fa-envelope text-2xl mr-4 text-purple-600"></i>
            magestyorganizer@gmail.com
          </li>
          <li class="flex items-center">
            <i class="fas fa-map-marker-alt text-2xl mr-4 text-purple-600"></i>
            Jl. KH. Agus Salim Gg. VIII No.9A, Bandar Kidul, Kec. Mojoroto, Kota Kediri, Jawa Timur 64118
          </li>
        </ul>
      </div>

    <!-- Right Contact  -->
      <div class="bg-white drop-shadow-md rounded-lg p-6 wow slideInRight" data-wow-delay="0.2s">
        <form>
          <div class="mb-6">
            <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
            <input type="text" id="name" class="w-full border border-gray-300 rounded-lg px-4 py-2" placeholder="Full Name">
          </div>
          <div class="mb-6">
            <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" id="email" class="w-full border border-gray-300 rounded-lg px-4 py-2" placeholder="Your Email">
          </div>
          <div class="mb-6">
            <label for="message" class="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea id="message" class="w-full border border-gray-300 rounded-lg px-4 py-2" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" class="w-full bg-purple-500 text-white font-semibold py-2 rounded-lg hover:bg-purple-600 transition-colors">
            Submit
          </button>
        </form>
      </div>
          </div>
    <!-- Location -->
    <div class="w-full max-w-6xl mx-auto mt-16 pr-6 wow fadeInUp" data-wow-delay="0.4s">
      <h2 class="text-4xl font-lora mb-4">Our Location</h2>
      
      <div class="flex items-center justify-start mb-6">
        <!-- Garis di kiri -->
        <div class="mr-2 w-24 h-0.5 bg-purple-600 relative">
          <div class="absolute left-0 top-[-5px] transform -translate-x-1 rotate-45 w-2 h-2 bg-purple-600"></div>
        </div>

        <!-- Subtitle -->
        <div class="subtitle mx-2 text-purple-600">location</div> 

        <!-- Garis di kanan -->
        <div class="ml-2 w-24 h-0.5 bg-purple-600 relative">
          <div class="absolute right-0 top-[-5px] transform translate-x-1 rotate-45 w-2 h-2 bg-purple-600"></div>
        </div>
      </div>
      
      <iframe class="w-full h-96 rounded-lg shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.640970410862!2d112.00255191432606!3d-7.791732694390364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e784731d004e6fd%3A0x6f217c3ef876dcb7!2sJl.%20KH.%20Agus%20Salim%2C%20Kota%20Kediri%2C%20Jawa%20Timur%2064118!5e0!3m2!1sen!2sid!4v1639999999999!5m2!1sen!2sid"
        allowfullscreen="" loading="lazy"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.font-lora {
  font-family: 'Lora', serif;
}
.breadcrumb {
    background-color: transparent;
}

</style>
