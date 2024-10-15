<template>
  <div>
    <Carousel />
    <Goals />
    <Services /> 
    <Gallery />
    <Book />
  </div>  
</template>

<script>
import Carousel from '~/components/shared/Carousel.vue';
import Goals from '~/components/shared/Goals.vue';
import Services from '~/components/shared/Services.vue';
import Gallery from '~/components/shared/Gallery.vue';
import Book from '~/components/shared/Book.vue';




export default {
  components: {
    Carousel,
    Goals,
    Services,
    Gallery,
    Book,
  },
};
</script>

<style scoped>
/* Tambahkan gaya tambahan di sini jika diperlukan */
</style>
