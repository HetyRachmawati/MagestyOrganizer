<template>
  <!-- Navbar -->
  <header id="navbar" :class="['py-4']">
    <div class="container mx-auto flex justify-between items-center px-4">
      <!-- Logo -->
      <nuxt-link to="/" class="text-white font-bold text-xl mb-4 md:mb-0 flex items-center">
        <img src="/img/icon.png" alt="Logo" class="w-10 h-10 mr-2" />
        <span class="text-purple-400">MAGESTY</span> ORGANIZER
      </nuxt-link>

      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMenu" 
        class="md:hidden text-white focus:outline-none ml-auto"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      <!-- Desktop Navigation -->
      <nav :class="['hidden md:flex space-x-6 items-center']">
        <ul class="nav-links flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 items-center">
          <li><nuxt-link to="/" class="text-white" @click="closeMobileMenu">Home</nuxt-link></li>
          <li><nuxt-link to="/profile/about" class="text-white" @click="closeMobileMenu">About</nuxt-link></li>
          <li><nuxt-link to="/profile/contact" class="text-white" @click="closeMobileMenu">Contact</nuxt-link></li>
          <li><nuxt-link to="/profile/paket" class="text-white" @click="closeMobileMenu">Paket</nuxt-link></li>
        </ul>
        <div class="btn-login mt-3 md:mt-0">
          <nuxt-link
            to="/auth/login"
            class="px-4 py-2 border-2 border-white text-white bg-transparent rounded-md transition-colors duration-300 hover:bg-white hover:text-black"
            @click="closeMobileMenu"
          >
            Login
          </nuxt-link>
        </div>
      </nav>
    </div>
  </header>

  <!-- Mobile Navigation (Overlay) -->
  <nav :class="['mobile-menu', isMobileMenuOpen ? 'open' : '']" ref="mobileMenu">
    <button @click="closeMobileMenu" class="absolute top-6 right-6 text-white text-3xl focus:outline-none">&times;</button>
    <ul class="nav-mobile flex flex-col space-y-4 text-white text-center p-6">
      <li><nuxt-link to="/" @click="closeMobileMenu">Home</nuxt-link></li>
      <li><nuxt-link to="/profile/about" @click="closeMobileMenu">About</nuxt-link></li>
      <li><nuxt-link to="/profile/contact" @click="closeMobileMenu">Contact</nuxt-link></li>
      <li><nuxt-link to="/profile/paket" @click="closeMobileMenu">Paket</nuxt-link></li>
      <div class="btn-login mt-3 md:mt-0">
        <nuxt-link
          to="/login"
          class="px-4 py-2 border-2 border-white text-white bg-transparent rounded-md transition-colors duration-300 hover:bg-white hover:text-black"
          @click="closeMobileMenu"
        >
          Login
        </nuxt-link>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HeaderMain',
  data() {
    return {
      isMobileMenuOpen: false,
      buttonBgColor: "#AA6BF7",
      navbarClass: "bg-purple-600", // Ganti di sini jika perlu
    };
  },
  methods: {
    toggleMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      if (this.isMobileMenuOpen) {
        document.addEventListener('mousedown', this.handleClickOutside);
      } else {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false; // Menutup menu setelah tautan diklik
    },
    changeBgOnHover(isHovering) {
      this.buttonBgColor = isHovering ? "#9855D2" : "#AA6BF7";
    },
    handleClickOutside(event) {
      if (this.isMobileMenuOpen && !this.$refs.mobileMenu.contains(event.target)) {
        this.closeMobileMenu();
      }
    },
  },
  mounted() {
    // Hapus event listener scroll
  },
  beforeUnmount() {
    // Hapus event listener scroll
    document.removeEventListener('mousedown', this.handleClickOutside); // Clean up listener
  },
};
</script>

<style scoped>
#navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  background-color:  rgba(109, 40, 217, 0.95);
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
}

/* Hapus kelas navbar-colored dan navbar-transparent jika tidak digunakan lagi */
/* .navbar-colored {
  background-color:  rgba(109, 40, 217, 0.95);
  border-color: rgba(0, 0, 0, 0.5);
}

.navbar-transparent {
  background-color: transparent;
} */

.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 70%;
  height: 100%;
  background-color: rgba(126, 34, 206, 0.9);
  transition: right 0.5s ease-in-out; /* Lebih halus */
  z-index: 1001;
  overflow-y: auto;
}

.mobile-menu.open {
  right: 0;
}
.mobile-menu button {
  z-index: 1002; /* Pastikan tombol X tetap di atas mobile menu */
}

.btn-login a {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 2px solid white;
  border-radius: 0.375rem;
  color: white;
  background-color: transparent;
  transition: all 0.3s ease;
}

.btn-login a:hover {
  background-color: #ffffff;
  color: #d64bf2;
}

/* Navbar link styling */
.nav-links a {
  position: relative; /* Required for the ::after pseudo-element */
  color: #fff; /* White text color */
  text-decoration: none; /* Remove underline */
  transition: color 0.3s ease; /* Smooth transition for text color */
  font-size: 1.1rem;
}

/* Hover effect for navbar links */
.nav-links a:hover {
  color: #e5e5e5; /* Slightly lighter color on hover */
}

/* Underline animation */
.nav-links a::after {
  content: '';
  display: block;
  border-bottom: 0.1rem solid var(--primary, #fff); /* Underline color */
  transform: scaleX(0);
  transform-origin: bottom left; /* Ensure the line grows from the left */
  transition: transform 0.2s linear; /* Smooth transition for underline */
}

.nav-links a:hover::after {
  transform: scaleX(1); /* Expand underline on hover */
}

/* navbar mobile */
.nav-mobile li {
  position: relative; /* Diperlukan untuk pseudo-element */
}

.nav-mobile a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
  padding-bottom: 4px; /* Tambahkan padding untuk memberikan ruang di bawah teks */
}

/* Hover effect untuk navbar links */
.nav-mobile a:hover {
  color: #b6b5b5;
}

/* Garis bawah saat hover */
.nav-mobile li::after {
  content: '';
  display: block;
  width: 30%; /* Atur panjang garis */
  border-bottom: 0.1rem solid var(--primary, #fff);
  transform: scaleX(0);
  transform-origin: bottom left;
  transition: transform 0.2s linear;
  margin: 0 auto; /* Pusatkan garis */
}

.nav-mobile a:hover::after {
  transform: scaleX(1); /* Garis muncul saat hover */
}

/* Untuk tombol Login */
.btn-login {
  display: flex; /* Menggunakan flexbox untuk memusatkan isi */
  justify-content: center;
  align-items: center;
}
</style>
