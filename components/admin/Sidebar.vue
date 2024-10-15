<template>
  <!-- Sidebar -->
  <ul :class="['navbar-nav bg-gradient-purple sidebar sidebar-dark accordion', { toggled: isToggled }]" id="accordionSidebar">
    <!-- Sidebar - Brand -->
    <router-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/">
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </router-link>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Dashboard -->
    <li class="nav-item active">
      <router-link class="nav-link" to="/admin/dashboard">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
      Manajemen Team
    </div>

    <!-- Nav Item - Charts -->
    <li class="nav-item">
      <router-link class="nav-link" to="/admin/posisi">
        <i class="fas fa-fw fa-chart-area"></i>
        <span>Jabatan Team</span>
      </router-link>
    </li>

    <!-- Nav Item - Tables -->
    <li class="nav-item">
      <router-link class="nav-link" to="/admin/team">
        <i class="fas fa-fw fa-table"></i>
        <span>Team Magesty</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- Heading -->
    <div class="sidebar-heading">
      Manajemen Produk
    </div>

    <!-- Nav Item - Charts -->
    <li class="nav-item">
      <router-link class="nav-link" to="/admin/tipepaket">
        <i class="fas fa-fw fa-table"></i>
        <span>Tipe Paket </span>
      </router-link>
    </li>


    <!-- Nav Item - Tables -->
    <li class="nav-item">
      <router-link class="nav-link" to="/admin/paket">
        <i class="fas fa-fw fa-table"></i>
        <span>Data Paket</span>
      </router-link>
    </li>

     <!-- Divider -->
     <hr class="sidebar-divider">

      <!-- Heading -->
      <div class="sidebar-heading">
        Manajemen Media
      </div>

    <!-- Nav Item - Tables -->
    <li class="nav-item">
        <router-link class="nav-link" to="/admin/gallery">
          <i class="fas fa-fw fa-table"></i>
          <span>Gallery Foto</span>
        </router-link>
      </li>


      <!-- Nav Item - Tables -->
      <li class="nav-item">
        <router-link class="nav-link" to="/tables">
          <i class="fas fa-fw fa-table"></i>
          <span>Gallery Foto</span>
        </router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/tables">
          <i class="fas fa-fw fa-table"></i>
          <span>Testimoni</span>
        </router-link>
      </li>
          <!-- Heading -->
          <div class="sidebar-heading">
        Manajemen Media
      </div>

      <!-- Nav Item - Charts -->
      <li class="nav-item">
            <a class="nav-link" href="/admin/posisi">
              <i class="fas fa-fw fa-chart-area"></i>
              <span>Manajemen Transaksi</span>
            </a>
          </li>

      <!-- Nav Item - Tables -->
      <li class="nav-item">
        <router-link class="nav-link" to="/tables">
          <i class="fas fa-fw fa-table"></i>
          <span>Data Transaksi</span>
        </router-link>
      </li>

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" @click="toggleSidebar" id="sidebarToggle"></button>
    </div>
  </ul>
  <!-- End of Sidebar -->
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isToggled: false,  // Menyimpan status toggle sidebar
    };
  },
  methods: {
    toggleSidebar() {
      this.isToggled = !this.isToggled;  // Ubah status toggle
    }
  }
};
</script>

<style scoped>
.bg-gradient-purple {
  background: linear-gradient(180deg, #6B46C1 10%, #D6BCFA 100%);
}

/* Ubah warna garis menjadi putih dengan !important */
.sidebar-divider {
  border-color: white !important;
}

/* Ubah warna dan ketebalan garis untuk lebih jelas */
.sidebar-divider {
  border-color: white !important ; /* Warna putih dengan transparansi */
  border-width: 1px !important; /* Meningkatkan ketebalan garis */
}
</style>
