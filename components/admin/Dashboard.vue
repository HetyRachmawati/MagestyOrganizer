<template>
  <div class="container-fluid">
    <!-- Tambahkan Tulisan Selamat Datang -->
    <div class="row mb-4">
      <div class="col-12">
        <h1 class="h3 mb-4 welcome-text">Selamat datang di dashboard admin</h1>
      </div>
    </div>

    <!-- Content Row -->
    <div class="row">
      <!-- Earnings (Monthly) Card Example -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card custom-card shadow h-100 py-2 border-left-primary">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2 ml-2 mt-2">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1 ">Earnings (Monthly)</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
              </div>
              <div class="col-auto mr-3">
                <i class="fas fa-calendar fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Earnings (Annual) Card Example -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card custom-card shadow h-100 py-2 border-left-success">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2 ml-2 mt-2">
                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Earnings (Annual)</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
              </div>
              <div class="col-auto mr-3">
                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tasks Card Example -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card custom-card shadow h-100 py-2 border-left-info">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2 ml-2 mt-2">
                <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">50%</div>
              </div>
              <div class="col-auto mr-3">
                <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pending Requests Card Example -->
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card custom-card shadow h-100 py-2 border-left-warning">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2 ml-2 mt-2">
                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Pending Requests</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
              </div>
              <div class="col-auto mr-3">
                <i class="fas fa-comments fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>


<style scoped>
h1, .welcome-text {
  font-family: 'Open Sans', sans-serif;  
  font-weight: 400;  
  color: #5a5c69;    
}

.custom-card {
  border-radius: 10px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.custom-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}

.border-left-primary {
  border-left: 4px solid #4e73df; /* Warna biru untuk card pertama */
}

.border-left-success {
  border-left: 4px solid #1cc88a; /* Warna hijau untuk card kedua */
}

.border-left-info {
  border-left: 4px solid #36b9cc; /* Warna biru terang untuk card ketiga */
}

.border-left-warning {
  border-left: 4px solid #f6c23e; /* Warna kuning untuk card keempat */
}

.text-primary {
  color: #4e73df !important;
}

.text-success {
  color: #1cc88a !important;
}

.text-info {
  color: #36b9cc !important;
}

.text-warning {
  color: #f6c23e !important;
}

.text-gray-800 {
  color: #5a5c69 !important;
}

.shadow {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.progress-bar {
  height: 8px;
  border-radius: 5px;
}
</style>
