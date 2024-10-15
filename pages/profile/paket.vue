<template>
  <div class="about-content">
    <Paket />
    <Testimoni />
  </div>
</template>

<script>
import Paket from "~/components/profile/Package.vue";
import Testimoni from "~/components/profile/Testimoni.vue";

export default {
  components: {
    Paket,
    Testimoni,
  },
};

definePageMeta({
  middleware: 'auth'
});
</script>

<style scoped></style>
