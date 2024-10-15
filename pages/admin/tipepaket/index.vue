<template>
    <div class="table-container ml-3 mr-3">
      <h1 class="h3 mb-2 text-gray-800">Tabel Tipe Paket</h1>
      <p class="mb-4">
        DataTables adalah plugin pihak ketiga yang digunakan untuk membuat tabel demo di bawah ini.
        Untuk informasi lebih lanjut tentang DataTables, silakan kunjungi
        <a target="_blank" href="https://datatables.net">dokumentasi resmi DataTables</a>.
      </p>
  
      <button class="btn btn-primary mb-3" @click="openCreateModal">
        Tambah Tipe Paket
      </button>
  
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Data Tipe Paket</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-striped table-bordered mt-3 mb-3" id="dataTable" width="100%" cellspacing="0">
              <thead class="thead-light">
                <tr>
                  <th>ID</th>
                  <th>Jenis Paket</th>
                  <th>Deskripsi</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="packageType in packageTypes" :key="packageType.id">
                  <td>{{ packageType.id }}</td>
                  <td>{{ packageType.package_type }}</td>
                  <td>{{ packageType.description }}</td>
                  <td class="text-center">
                    <button class="btn btn-sm btn-primary me-2" @click="openEditModal(packageType)">Edit</button>
                    <button class="btn btn-sm btn-danger" @click="deleteItem(packageType.id)">Hapus</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  
      <!-- Modal for Adding/Editing Package Type -->
      <div v-if="showModal" class="modal fade show" tabindex="-1" style="display: block;">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ isEditing ? 'Edit Tipe Paket' : 'Tambah Tipe Paket' }}</h5>
              <button type="button" class="close" @click="closeModal">&times;</button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="isEditing ? updatePackageType() : createPackageType()">
                <div class="form-group">
                  <label for="package_type">Jenis Paket</label>
                  <input type="text" id="package_type" v-model="newPackageType.package_type" class="form-control" placeholder="Masukkan jenis paket" required />
                </div>
                <div class="form-group">
                  <label for="description">Deskripsi</label>
                  <textarea id="description" v-model="newPackageType.description" class="form-control" placeholder="Masukkan deskripsi" required></textarea>
                </div>
  
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary">{{ isEditing ? 'Update' : 'Simpan' }}</button>
                  <button type="button" class="btn btn-secondary" @click="closeModal">Kembali</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, nextTick } from 'vue';
  import Swal from 'sweetalert2';
  import $ from 'jquery';
  import 'datatables.net-bs4/css/dataTables.bootstrap4.css';
  import 'datatables.net-bs4';
  
  const apiBase = useRuntimeConfig().public.apiBase;
  
  const packageTypes = ref([]);
  const showModal = ref(false);
  const isEditing = ref(false);
  const newPackageType = ref({ id: null, package_type: '', description: '' });
  
  const fetchPackageTypes = async () => {
    try {
      const response = await fetch(`${apiBase}/api/type`);
      const responseData = await response.json();
  
      if (!response.ok) {
        throw new Error('Failed to fetch package types');
      }
  
      packageTypes.value = responseData.data;
  
      await nextTick();
  
      const dataTable = $('#dataTable').DataTable();
      if (dataTable) {
        dataTable.destroy();
      }
  
      $('#dataTable').DataTable({
        paging: true,
        searching: true,
        info: true,
        lengthChange: true,
        columnDefs: [{ searchable: true, targets: '_all' }],
        language: { search: 'Search:', lengthMenu: 'Show _MENU_ entries' },
      });
      console.log('Package Types:', responseData);
    } catch (error) {
      console.error('Error fetching package types:', error);
    }
  };
  
  const openCreateModal = () => {
    newPackageType.value = { package_type: '', description: '' };
    isEditing.value = false;
    showModal.value = true;
  };
  
  const openEditModal = (packageType) => {
    newPackageType.value = { ...packageType };
    isEditing.value = true;
    showModal.value = true;
  };
  
  const closeModal = () => {
    showModal.value = false;
  };
  
  const createPackageType = async () => {
    try {
      const response = await fetch(`${apiBase}/api/type`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPackageType.value),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create package type');
      }
  
      await Swal.fire({
        title: 'Sukses!',
        text: 'Tipe Paket berhasil ditambahkan.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
  
      closeModal();
      fetchPackageTypes();
    } catch (error) {
      console.error('Error creating package type:', error);
      await Swal.fire({
        title: 'Error!',
        text: 'Terjadi kesalahan saat menambahkan Tipe Paket.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };
  
  const updatePackageType = async () => {
    try {
      const response = await fetch(`${apiBase}/api/type/${newPackageType.value.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPackageType.value),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update package type');
      }
  
      await Swal.fire({
        title: 'Sukses!',
        text: 'Tipe Paket berhasil diperbarui.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
  
      closeModal();
      fetchPackageTypes();
    } catch (error) {
      console.error('Error updating package type:', error);
      await Swal.fire({
        title: 'Error!',
        text: 'Terjadi kesalahan saat memperbarui Tipe Paket.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };
  
  const deleteItem = async (id) => {
    try {
      const response = await fetch(`${apiBase}/api/type/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete package type');
      }
  
      await Swal.fire({
        title: 'Sukses!',
        text: 'Tipe Paket berhasil dihapus.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
  
      fetchPackageTypes();
    } catch (error) {
      console.error('Error deleting package type:', error);
      await Swal.fire({
        title: 'Error!',
        text: 'Terjadi kesalahan saat menghapus Tipe Paket.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };
  
  onMounted(() => {
    fetchPackageTypes();
  });
  
  definePageMeta({
    layout: 'admin',
  });
  </script>
  
  <style scoped>
  .table-container {
    margin-top: 20px;
  }
  </style>
  