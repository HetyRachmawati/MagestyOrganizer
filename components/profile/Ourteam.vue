<template>
  <div class="container-fluid team py-5">
    <div class="container py-5">
      <div class="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style="max-width: 800px;">
        <h1 class="display-4 mb-4 text-purple-600">Meet Our Expert Team Members</h1>
        <div class="flex items-center justify-center mb-4 mt-4">
          <div class="ml-2 w-24 h-0.5 bg-purple-600 relative">
            <div class="absolute left-0 top-[-5px] transform -translate-x-1 rotate-45 w-2 h-2 bg-purple-600"></div>
          </div>
          <div class="subtitle mx-2 text-purple-600">Our Team</div>
          <div class="mr-2 w-24 h-0.5 bg-purple-600 relative">
            <div class="absolute right-0 top-[-5px] transform translate-x-1 rotate-45 w-2 h-2 bg-purple-600"></div>
          </div>
        </div>
        <p class="mb-0 text-gray-700">
          Magesty Organizer memiliki tim yang solid dan berpengalaman, yang berkomitmen untuk mewujudkan pernikahan impian Anda.
        </p>
      </div>
      <div class="row g-4">
        <div class="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s" v-for="(member, index) in teamMembers" :key="index">
          <div class="team-item">
            <div class="team-img position-relative">
              <img :src="member.image" class="img-fluid rounded-top w-100 scale-image" alt="">
              <div class="team-icon d-flex flex-column align-items-center position-absolute">
                <a class="btn btn-purple btn-sm-square rounded-pill mb-2" href=""><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-purple btn-sm-square rounded-pill mb-2" href=""><i class="fab fa-twitter"></i></a>
                <a class="btn btn-purple btn-sm-square rounded-pill mb-2" href=""><i class="fab fa-linkedin-in"></i></a>
                <a class="btn btn-purple btn-sm-square rounded-pill mb-0" href=""><i class="fab fa-instagram"></i></a>
              </div>
            </div>
            <div class="team-title p-4 bg-purple text-start text-white team-text">
              <h4 class="mb-0">{{ member.name }}</h4>
              <p class="mb-0">{{ member.profession }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        {
          image: '/img/team-1.jpg',
          name: 'Rega Atika Sari',
          profession: 'Owner Magesty',
        },
        {
          image: '/img/team-2.jpg',
          name: 'Rega Atika Sari',
          profession: 'Owner Magesty',
        },
        {
          image: '/img/team-3.jpg',
          name: 'Rega Atika Sari',
          profession: 'Owner Magesty',
        },
        {
          image: '/img/team-4.jpg',
          name: 'Rega Atika Sari',
          profession: 'Owner Magesty',
        },
      ],
    };
  },
};
</script>

<style scoped>
.team-item {
  position: relative;
  overflow: hidden;
}

.team-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.team-item:hover .team-icon {
  opacity: 1;
}

.scale-image {
  transition: transform 0.3s ease;
}

.team-img:hover .scale-image {
  transform: scale(1.1);
}

.bg-purple {
  background-color: #6B46C1;
}

.team-title {
  text-align: left;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.team-item:hover .team-title {
  background-color: #E9D8FD;
}

.team-item:hover .team-title h4,
.team-item:hover .team-title p {
  color: #000; /* Warna teks berubah menjadi hitam saat hover */
}

.text-purple-600 {
  color: #9F7AEA;
}

.btn-purple {
  background-color: #9F7AEA;
  color: #fff;
  border: 2px solid transparent;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.btn-purple:hover {
  background-color: transparent;
  color: #9F7AEA;
  border-color: #9F7AEA;
}

.text-gray-700 {
  color: #6B7280;
}
.breadcrumb {
    background-color: transparent;
}

</style>
