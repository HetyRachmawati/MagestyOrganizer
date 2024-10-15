<template>
    <!-- Carousel Start -->
    <div class="container-fluid carousel-header px-0">
      <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img src="/img/bg1.jpg" class="img-fluid" alt="Image">
            <div class="carousel-caption custom-caption">
              <div class="p-3" style="max-width: 900px;">
                <h4 class="text-primary text-uppercase mb-3">Wedding Planning</h4>
                <h1 class="display-1 text-capitalize text-light mb-3">Bringing Your Special</h1>
                <h1 class="mx-md-5 fs-4 px-4 mb-5 text-light"> Moments to Life with Perfection</h1>
                <div class="d-flex align-items-center justify-content-center">
                  <a class="btn btn-light btn-light-outline-0 rounded-pill py-3 px-5 me-4" href="/auth/login">Get Start</a>
                  <a class="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5" href="/booking/booking">Book Now</a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/img/carousel-2.jpg" class="img-fluid" alt="Image">
            <div class="carousel-caption custom-caption">
              <div class="p-3" style="max-width: 900px;">
                <h4 class="text-primary text-uppercase mb-3">Event Planning</h4>
                <h1 class="display-1 text-capitalize text-light mb-3">Your Dream Wedding </h1>
                <h1 class="mx-md-5 fs-4 px-5 mb-5 text-light">Make your special day unforgettable with our professional wedding planning services.</h1>
                <div class="d-flex align-items-center justify-content-center">
                  <a class="btn btn-light btn-light-outline-0 rounded-pill py-3 px-5 me-4" href="/auth/login">Get Start</a>
                  <a class="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5" href="/booking/booking">Book Now</a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/img/carousel-1.jpg" class="img-fluid" alt="Image">
            <div class="carousel-caption custom-caption">
              <div class="p-3" style="max-width: 900px;">
                <h4 class="text-primary text-uppercase mb-3">Event Organizer</h4>
                <h1 class="display-1 text-capitalize text-light">Perfectly Planned</h1>
                <p class="mx-md-5 fs-4 px-5 mb-5 text-light">Lorem rebum magna dolore amet lorem eirmod magna erat diam stet.</p>
                <div class="d-flex align-items-center justify-content-center">
                <NuxtLink class="btn btn-light btn-light-outline-0 rounded-pill py-3 px-5 me-4" to="/auth/login">Get Start</NuxtLink>
                <NuxtLink class="btn btn-primary btn-primary-outline-0 rounded-pill py-3 px-5" to="/booking/booking">Book Now</NuxtLink>
              </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <!-- Carousel End -->
  </template>
  
  <script>
  export default {
    // Your component logic
  }
  </script>
  
  <style scoped>
  /* Customize the caption background to have blur effect with opacity black */
  .custom-caption {
    background: rgba(0, 0, 0, 0.2); /* Slight black opacity */
    backdrop-filter: blur(2px); /* Apply a slight blur effect */
    padding: 1.5rem;
    border-radius: 1rem;
  }
  
  .carousel-caption {
    bottom: 20%;
  }
  
  .carousel-item img {
    filter: brightness(60%); /* Darken the background image slightly */
  }
  </style>
  