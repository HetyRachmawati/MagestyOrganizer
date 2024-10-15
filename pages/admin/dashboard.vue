<template>
  <div>
    <Dashboard /> <!-- Komponen Dashboard hanya di sini -->
    <!-- Isi halaman dashboard lainnya -->
  </div>
</template>

<script setup>
import Dashboard from "@/components/admin/Dashboard.vue";

// Definisikan meta halaman
definePageMeta({
  layout: 'admin',

});
</script>

<style scoped>
/* Jika ada styling khusus, tambahkan di sini */
</style>
