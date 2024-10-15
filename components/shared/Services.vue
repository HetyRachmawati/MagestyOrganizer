<template>
  <!-- Services Start -->
  <div class="container-fluid services py-5">
    <div class="container py-5 wow animate__fadeInUp">
      <div class="mx-auto text-center mb-5" style="max-width: 800px;">
        <p class="fs-4 text-uppercase text-primary">Our Service</p>
        <h1 class="display-3 text-purple-600">MagestyOrganizeer</h1>
      </div>
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="services-item bg-light rounded p-4 wow fadeInLeft" data-wow-duration="1s">
            <div class="row align-items-center">
              <div class="col-8">
                <div class="services-content text-end">
                  <h3 class="service-title">Wedding Planner</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                  <a href="#" class="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Booking</a>
                </div>
              </div>
              <div class="col-4">
                <div class="services-img d-flex align-items-center justify-content-center rounded">
                  <img src="/img/services-1.jpg" class="img-fluid rounded" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="services-item bg-light rounded p-4 border-left-purple no-border-right wow fadeInRight" data-wow-duration="1s">
            <div class="row align-items-center">
              <div class="col-4">
                <div class="services-img d-flex align-items-center justify-content-center rounded">
                  <img src="/img/services-2.jpg" class="img-fluid rounded" alt="">
                </div>
              </div>
              <div class="col-8">
                <div class="services-content text-start">
                  <h3 class="service-title">Wedding Organizer</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                  <a href="#" class="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Booking</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="services-item bg-light rounded p-4 wow fadeInLeft" data-wow-duration="1s">
            <div class="row align-items-center">
              <div class="col-8">
                <div class="services-content text-end">
                  <h3 class="service-title">Party Planner</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                  <a href="#" class="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Booking</a>
                </div>
              </div>
              <div class="col-4">
                <div class="services-img d-flex align-items-center justify-content-center rounded">
                  <img src="/img/services-3.jpg" class="img-fluid rounded" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="services-item bg-light rounded p-4 border-left-purple no-border-right wow fadeInRight" data-wow-duration="1s">
            <div class="row align-items-center">
              <div class="col-4">
                <div class="services-img d-flex align-items-center justify-content-center rounded">
                  <img src="/img/services-4.jpg" class="img-fluid rounded" alt="">
                </div>
              </div>
              <div class="col-8">
                <div class="services-content text-start">
                  <h3 class="service-title">Corporate Event </h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                  <a href="#" class="btn btn-primary btn-primary-outline-0 rounded-pill py-2 px-4">Booking</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="services-btn text-center mt-10">
            <a href="#" class="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5">Service More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Services End -->
</template>

<style scoped>
.container-fluid.services {
  background-color: #f3f3f3; /* Light background color for contrast */
}

.services-item {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
  border-right: 5px solid #9F7AEA; /* Ungu untuk border kanan */
}

.border-left-purple {
  border-left: 5px solid #9F7AEA; /* Ungu untuk border kiri */
}

.no-border-right {
  border-right: none; /* Remove right border */
}

.service-title {
  margin-left: 5px; /* Add left margin */
  color: #9F7AEA; /* Initial text color in purple */
  transition: color 0.3s; /* Smooth color transition */
}

.service-title:hover {
  color: #6B46C1; /* Darker shade of purple on hover */
}

.services-content h3 {
  font-family: 'Lora', serif; /* Customize font for headings */
  font-size: 1.5rem; /* Adjust heading size */
  margin-bottom: 1rem; /* Space below heading */
}

.services-content p {
  font-family: 'Montserrat', sans-serif; /* Customize font for paragraph */
  font-size: 1rem; /* Adjust paragraph size */
  margin-bottom: 1rem; /* Space below paragraph */
}

.services-btn .btn {
  background-color: #9F7AEA; /* Customize button color to purple */
  color: white; /* Button text color */
  transition: background-color 0.3s; /* Smooth color transition */
}

.services-btn .btn:hover {
  background-color: #6B46C1; /* Darker purple shade on hover */
}
</style>
