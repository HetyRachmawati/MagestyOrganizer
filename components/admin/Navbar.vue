<template>
  <div id="content-wrapper" class="d-flex flex-column">
    <!-- Main Content -->
    <div id="content">
      <!-- Topbar -->
      <nav class="navbar navbar-expand navbar-light bg-gradient-purple topbar mb-4 static-top shadow">
        <!-- Sidebar Toggle (Topbar) -->
        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
          <i class="fa fa-bars"></i>
        </button>

        <!-- Topbar Search -->
        <form class="form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100">
          <div class="input-group" id="custom-search">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <i class="fas fa-search search-icon"></i>
          </div>
        </form>

        <!-- Topbar Navbar -->
        <ul class="navbar-nav ml-auto d-flex align-items-center">
          <!-- Notification Icon -->
          <li class="nav-item dropdown no-arrow mx-1">
            <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-bell fa-fw"></i>
              <span class="badge badge-danger badge-counter">3+</span>
            </a>
          </li>

          <!-- Messages Icon -->
          <li class="nav-item dropdown no-arrow mx-1">
            <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-envelope fa-fw"></i>
              <span class="badge badge-danger badge-counter">7</span>
            </a>
          </li>

          <div class="topbar-divider d-none d-sm-block"></div>

          <!-- Nav Item - User Information -->
          <li class="nav-item dropdown no-arrow">
            <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <!-- Menampilkan name yang diambil dari localStorage -->
              <span class="mr-2 d-none d-lg-inline text-gray-100 small">Hello, {{ name }}</span>
              <img class="img-profile rounded-circle" src="/img/undraw_profile.svg" alt="Profile Image" />
            </a>
            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <router-link class="dropdown-item" to="/profile">
                <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </router-link>
              <router-link class="dropdown-item" to="/activity-log">
                <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
              </router-link>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#" @click.prevent data-toggle="modal" data-target="#logoutModal">
                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    name() {
      // name dari localStorage
      if (process.client) {
        return localStorage.getItem('name') || 'Anonymous';
      }
      return 'Anonymous'; 
    }
  }
}
</script>

<style scoped>
.bg-gradient-purple {
  background: linear-gradient(170deg, #6B46C1 10%, #D6BCFA 100%) !important;
}

#custom-search {
  position: relative;
}

#custom-search .form-control {
  border: 2px solid white;  
  border-radius: 50px; 
  background-color: #8e74f1;  
  color: white;  
  padding-left: 45px;  
  padding-right: 20px;  
  padding-top: 10px;
  padding-bottom: 10px;
  width: 300px;  
  box-shadow: none;
}

#custom-search .form-control::placeholder {
  color: #e6e6e6;
}

.search-icon {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: white;
  font-size: 18px;
  pointer-events: none;
}

#custom-search .form-control:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
}

#custom-search:focus-within .search-icon {
  color: white;
}

.img-profile {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

.badge-counter {
  position: absolute;
  top: 12px;
  right: 0;
  font-size: 12px;
  transform: translate(50%, -50%);
}

.topbar-divider {
  width: 1px;
  background-color: #e3e6f0;
  margin: 0 10px;
}

.navbar-nav .nav-link {
  color: #858796;
}

.navbar-nav .nav-link:hover {
  color: #4e73df;
}
</style>
