import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faStar, faEnvelope, faHouseChimney, faHouse } from '@fortawesome/free-solid-svg-icons'; // Tambah ikon solid
import { faSmile } from '@fortawesome/free-regular-svg-icons'; // Tambah ikon regular
import { fab, faFacebook, faPinterest, faLinkedin, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Tambah ikon merek

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Tambahkan ikon yang diimpor ke dalam library
library.add(faHeart, faStar, faEnvelope, faHouseChimney, faHouse, faSmile, fab, faFacebook, faPinterest, faLinkedin, faYoutube, faTwitter);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
