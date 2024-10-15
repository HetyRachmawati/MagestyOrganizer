<template>
  <!-- Topbar Start -->
  <div class="container-fluid topbar bg-purple d-none d-lg-block">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <div class="d-flex flex-wrap">
            <a href="#" class="me-4 text-light">
              <i class="fas fa-map-marker-alt text-pink me-2"></i>Find A Location
            </a>
            <a href="#" class="me-4 text-light">
              <i class="fas fa-phone-alt text-pink me-2"></i>+01234567890
            </a>
            <a href="#" class="text-light">
              <i class="fas fa-envelope text-pink me-2"></i>MagestyOrganizeer@gmail.com
            </a>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="d-flex align-items-center justify-content-end">
            <a href="#" class="me-3 btn-square border rounded-circle text-pink"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="me-3 btn-square border rounded-circle text-pink"><i class="fab fa-twitter"></i></a>
            <a href="#" class="me-3 btn-square border rounded-circle text-pink"><i class="fab fa-instagram"></i></a>
            <a href="#" class="btn-square border rounded-circle text-pink"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Topbar End -->

  <div>
    <!-- Navbar Start -->
    <div id="navbar" class="container-fluid bg-light sticky-top">
      <div class="container">
        <nav class="navbar">
          <a href="#" class="navbar-logo">
            <span class="text-purple-600">Magesty</span> Organizer
          </a>
          <button class="navbar-toggler" @click="toggleMenu">
            <i class="fas fa-bars"></i>
          </button>
          <div :class="['navbar-links', { 'navbar-active': isActive }]">
            <ul>
              <li><nuxt-link to="/" exact-active-class="active">Home</nuxt-link></li>
              <li><nuxt-link to="/profile/about" exact-active-class="active">About</nuxt-link></li>
              <li><nuxt-link to="/profile/paket" exact-active-class="active">Package</nuxt-link></li>
              <li><nuxt-link to="/profile/blog" exact-active-class="active">Blog</nuxt-link></li>
              <li><nuxt-link to="/profile/portofolio" exact-active-class="active">Portofolio</nuxt-link></li>
              <li><nuxt-link to="/profile/vendor" exact-active-class="active">Vendor</nuxt-link></li>
              <li><nuxt-link to="/profile/contact" exact-active-class="active">Contact Us</nuxt-link></li>
            </ul>
          </div>

          <!-- Conditional Rendering Based on Login Status -->
          <div class="navbar-button d-none d-lg-flex gap-2">
            <template v-if="isLoggedIn">
              <div class="dropdown">
                <button class="dropdown-toggle d-flex align-items-center bg-transparent border-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fas fa-user-circle text-purple-600"></i>
                  <span class="ms-2 text-purple-600">Welcome, {{ username }}</span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" @click="logout">Logout</a></li>
                </ul>
              </div>
            </template>
            <template v-else>
              <NuxtLink to="/auth/login" class="btn-appointment">Login</NuxtLink>
              <NuxtLink to="/auth/register" class="btn-appointment">Register</NuxtLink>
            </template>
          </div>
        </nav>
      </div>
    </div>
    <!-- Navbar End -->
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      isActive: false, // Menu tidak aktif secara default
      isLoggedIn: false, // Status login
      username: "", // Nama pengguna setelah login
    };
  },
  mounted() {
    // Menambahkan listener untuk scroll event
    window.addEventListener('scroll', this.handleScroll);

    // Cek apakah pengguna sudah login dengan mengecek localStorage
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    if (token && name) {
      this.isLoggedIn = true;
      this.username = name;
    }
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive; // Aktifkan atau nonaktifkan menu
    },
    handleScroll() {
      const navbar = document.getElementById('navbar');
      const scrollPosition = window.scrollY;
      
      // Ketika scroll lebih dari 50px, tambahkan class fixed
      if (scrollPosition > 50) {
        navbar.classList.add('fixed-top');
      } else {
        navbar.classList.remove('fixed-top');
      }
    },
    logout() {
      // Hapus token dan informasi login dari localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("role_id");
      this.isLoggedIn = false;
      this.username = "";
      // Redirect ke halaman login
      this.$router.push("/auth/login");
    }
  },
  beforeDestroy() {
    // Hapus listener ketika komponen di-unmount
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>



<style scoped>
/* Topbar Styles */
.topbar {
  padding: 10px 0;
}

.bg-purple {
  background-color: #9e42f5;
}

.text-pink {
  color: #ff4bb6;
}

.text-light {
  color: white;
}

.btn-square {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 50%;
  color: white;
  transition: 0.3s;
}

.btn-square:hover {
  background-color: #ff4bb6;
  color: white;
  border-color: #ff4bb6;
}

/* Navbar Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background-color: #fdfdfd;
}


.navbar-logo {
  font-size: 30px;
  font-weight: bold;
  color: #ff4bb6;
  font-family: 'Lora', serif; /* Perbaikan di sini */
}

.navbar-toggler {
  background: none;
  border: none;
  font-size: 24px;
  display: none;
  cursor: pointer;
}

.navbar-links {
  display: flex;
  list-style: none;
  gap: 20px;
  transition: all 0.3s ease-in-out;
}

.navbar-links ul {
  display: flex;
  list-style: none;
  gap: 20px;
}



.navbar-links ul li a {
  text-decoration: none;
  color: #555;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.navbar-links ul li a:hover {
  color: #ff4bb6; /* Warna saat hover */
  background-color: transparent; /* Mencegah latar belakang pada hover */
}

.navbar-links ul li a.nuxt-link-active {
  color: #ff4bb6; /* Warna untuk link yang aktif */
  font-weight: bold; /* Tebal untuk link aktif */
}
.navbar-button .btn-appointment {
  background-color: #ff4bb6;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.navbar-button .btn-appointment:hover {
  background-color: #b54cf6;
}

.fixed-top .navbar-links ul li a.active {
  background-color: transparent; /* Ensure no background when navbar is fixed */
  color: #ff4bb6; /* Consistent color for active state */
}

.bg-light {
  background-color: #fdfdfd !important;
}

/* Sticky Navbar */
.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #fdfdfd;
}

.fixed-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #fdfdfd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Tambahkan bayangan */
}

.container-fluid.bg-light {
  padding: 0 15px; /* Memberikan padding agar tidak menempel ke tepi layar */
}

/* Mobile Styles */
@media (max-width: 991px) {
  .navbar-links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    background-color: #fdfdfd;
    display: none; /* Sembunyikan menu secara default */
    justify-content: flex-start; /* Menu dimulai dari kiri */
    padding: 0 20px; /* Beri padding untuk membatasi lebar */
  }

  /* Saat navbar toggler diaktifkan, menu muncul */
  .navbar-active {
    display: flex;
  }

  .navbar-toggler {
    display: block;
  }

  /* Sembunyikan tombol "Book Appointment" secara default di mobile */
  .navbar-button {
    display: none;
  }

  /* Tampilkan tombol "Book Appointment" saat menu burger aktif */
  .navbar-active ~ .navbar-button {
    display: block;
    text-align: center; /* Rata tengah */
    margin-top: 10px;
  }

  .navbar-button .btn-appointment {
    width: 100%; /* Tombol full width di mobile */
    padding: 15px 0; /* Penyesuaian padding */
    border-radius: 10px; /* Sedikit kurva untuk tombol */
    background-color: #ff4bb6;
    font-weight: bold;
  }

  .navbar-links ul {
    flex-direction: column;
    gap: 10px;
  }

  .navbar-links ul li {
    text-align: left; /* Teks rata kiri */
  }
}


</style>
